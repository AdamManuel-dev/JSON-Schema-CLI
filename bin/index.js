#!/usr/bin/env node
/**
 *
 * Library Imports
 */
const fs = require('fs-extra')
const path = require('path')
const os = require('os')
const vorpal = require('vorpal')()
const { produce } = require('immer')
const shell = require('shelljs')
const json = require('@buzuli/json')
const exec = require('child_process').exec

/**
 * My Imports
 */
const { quicktype } = require('../CLI/functions')
const { Typings } = require('../Typings/schema')
const { TypeClient } = require('../Tools/TypeClient')
const runtime = require('../Typings/schema_runtime')

/**
 * CLI Flag Handling
 */
const checkFlag = (...toCheck) => {
  let present = false
  toCheck.forEach(flag => {
    if (process.argv.includes(flag + '')) {
      present = true
    }
  })
  return present
}
const flags = {
  verbose: checkFlag('-v', '--verbose'),
  emojiSupport: !checkFlag('-e', '--no-emoji')
}

/**
 * Config Constants
 */
const configPath = path.join(os.homedir(), '.augirc.json')
const defaultConfig = {}

const verbose =
  process.argv.includes('-v', 2) || process.argv.includes('--verbose', 2)

const colorPrint = (data, indent = true) =>
  console.log(
    json(data, {
      indent,
      color: true
    })
  )

/**
 * Singleton Service for moving data
 */
var Service = (function () {
  var cache

  loadConfig = () => {
    if (fs.existsSync(configPath)) {
      return fs.readJSONSync(configPath)
    } else {
      fs.writeJSONSync(configPath, defaultConfig)
      return defaultConfig
    }
  }

  saveConfig = ({ config }) => {
    fs.writeJSONSync(configPath, config)
  }

  function loadCache () {
    const loadedTypes = new Typings()
    const { definitions } = JSON.parse(loadedTypes.toString())
    return {
      definitions,
      names: Object.keys(definitions),
      config: loadConfig()
    }
  }

  return {
    cache: function () {
      if (!cache) {
        cache = loadCache()
      }
      return cache
    },
    loadConfig: loadConfig,
    saveConfig: saveConfig,
    client: new TypeClient()
  }
})()

function getNames (vorpal) {
  vorpal
    .command('list', 'gets the names of all the types')
    .option('-l, --local', 'Grabs the local version')
    .action(async (args, callback) => {
      if (args.options.local) {
        console.log(
          '\n\nTypes: \n------\n' + Service.cache().names.join('\n')
        ) + '\n'
      } else {
        const names = await Service.client.getTypesNames()
        colorPrint(names)
        console.log('\n\nTypes: \n------\n' + names.join('\n')) + '\n'
      }
    })
}

function pickDefinition (vorpal) {
  vorpal
    .command('get <name> [out]', 'Gets a single type definition')
    .autocomplete(Service.cache().names)
    .action(async (args, callback) => {
      const outFile = args.out || './' + args.name + '.json'
      console.log('Generating', args.name, '🎉')
      const type = Service.cache().definitions[args.name]
      fs.writeFileSync(outFile, JSON.stringify(type, undefined, 2))
      console.log('Finished at', outFile)
    })
}

function setPrefLanguage (vorpal) {
  vorpal
    .command(
      'pref <language> [fileEnd]',
      'Sets a preferences schema language for type generation'
    )
    .action(async ({ language, fileEnd }, callback) => {
      // console.log(args)
      const newConfig = produce(Service.cache(), draft => {
        draft.config.language = language
        draft.config.fileEnd = fileEnd
      })
      console.log(newConfig)
      Service.saveConfig(newConfig)
    })
}

function generateType (vorpal) {
  vorpal
    .command(
      'gen <type> <out> [language]',
      'Generate a type file in given language for given type'
    )
    .action(async (args, cb) => {
      console.log({
        cache: Service.cache(),
        args,
        types: Service.cache().definitions,
        type: Service.cache().definitions[args.type]
      })
      const type = await quicktype.fromJSONSchema(
        args.language || Service.cache().language,
        args.type,
        JSON.stringify(Service.cache().definitions[args.type])
      )
      fs.writeFile(args.out, type.lines.join('\n'))
    })
}

function generateAllTypes (vorpal) {
  vorpal
    .command(
      'gen-all <out> [fileEnd] [language]',
      'Generates all the type definitions available'
    )
    .action(async (args, cb) => {
      fs.rmdirSync(args.out, {
        recursive: true
      })
      fs.mkdirSync(args.out)
      const newFiles = Object.entries(Service.cache().definitions).map(
        async ([typeName, definition]) => {
          const type = await quicktype.fromJSONSchema(
            args.language || Service.cache().language,
            typeName,
            JSON.stringify(definition)
          )
          fs.writeFile(
            args.fileEnd
              ? args.out + '/' + typeName + args.fileEnd
              : args.out + '/' + typeName + Service.cache().fileEnd,
            type.lines.join('\n')
          )
        }
      )
    })
}

function viewConfig (vorpal) {
  vorpal
    .command('view-config', 'Opens the config in VS Code')
    .action(async args => {
      console.log(
        `
1. Edit config in VS Code
2. Save file in VS Code
3. Exit Tab
4. Return to running terminal

⏱... waiting`
      )
      const result = shell.exec(`code ${configPath} --wait`).code
      if (result == 0) {
        console.log(`✅ File Saved!`)
      } else {
        console.log(`⛔ Error!`)
      }
    })
}

function query (vorpal) {
  vorpal
    .command('type-query [query]', 'Executes a query against the Types DB')
    .help(function (args, cb) {
      console.log(`
This lets you create Cosmos SQL queries to query the Types DB.
ex: \`type-query "select * from c"\` Selects everything inside DB
ex: \`type-query "select c.id, c.src from c"\` selects the ID and the Generation src from the DB
ex: \`type-query "select c.id from c order by c._ts"\` selects most recently updates type names`)
      cb()
    })
    .option('-p, --project <project>', 'Which project partition to query')
    .option('-o, --output <path>', 'Output result to a file')
    .action(async args => {
      if (!!args.query) {
        console.log('⏱ ...Querying')
        const response = await Service.client
          .textQuery(args.query, args.options.project)
          .catch(err => {
            console.log('⛔ ERROR:', colorPrint(err))
          })
        console.log('✅ Success!')
        if (args.options.output) {
          fs.writeJsonSync(
            args.options.output,
            JSON.stringify(response, undefined, 2)
          )
        } else {
          console.log(colorPrint(response, true))
        }
      }
    })
}

function createType (vorpal) {
  const prepare = () => {
    const editor = path.join(os.homedir(), '.typeDefinition.js')
    if (fs.existsSync(editor)) {
      fs.removeSync(editor)
      console.log('✅ removed previous draft')
    }
    fs.copyFileSync('./example.js', editor)
    console.log('✅ created', editor, 'from', './example.js')
    const lib = path.join(os.homedir(), '.ext.js')
    if (fs.existsSync(lib)) {
      fs.removeSync(lib)
      console.log('✅ removed cached library')
    }
    console.log('✅ created', editor, 'from', './Types/ext.js')
    fs.copyFileSync('./Typings/ext.js', lib)
    console.log(`⌚ ...waiting on npm packages to cache`)
    shell.exec(`cd ~ && npm i kontur`, {
      silent: true
    })
    console.log('✅ Kontur successfully cached')
    return editor
  }
  const cleanUp = () => {
    const editor = path.join(os.homedir(), '.typeDefinition.js')
    const lib = path.join(os.homedir(), '.ext.js')
    if (fs.existsSync(editor)) {
      fs.removeSync(editor)
      console.log('✅ removed local draft')
    }
    if (fs.existsSync(lib)) {
      fs.removeSync(lib)
      console.log('✅ removed cached library')
    }
    console.log(`⌚ ...waiting on removal of cached package`)
    shell.exec(`cd ~ && npm uninstall kontur`, {
      silent: true
    })
    console.log('✅ Kontur was successfully removed from cache')
    return editor
  }
  vorpal
    .command('create-type [name]', 'Opens the config in VS Code')
    .option('-p, --project', 'Project to save for (defaults to "Midtown")')
    .action(async args => {
      const editor = prepare()
      console.log(
        `
1. Edit config in VS Code
2. Save file in VS Code
3. Exit Tab
4. Return to running terminal

⏱... waiting`
      )
      const result = shell.exec(`code ${editor} --wait`).code
      if (result == 0) {
        console.log(`✅ Draft Saved!`)
        setTimeout(() => undefined, 500)
        const script = fs.readFileSync(editor).toString()

        const definition = await runtime(script).catch(() =>
          console.log(`⛔ Error compiling!`)
        )

        if (!!args.name) {
          Service.client
            .createType(
              args.name,
              definition,
              args.options.project || 'Midtown',
              script + ''
            )
            .then(response => {
              console.log(`✅ saved in DB!`)
              console.log(response)
              json(response.definition, {
                color: true
              })
            })
            .catch(error => {
              console.log(`⛔ Error saving in DB!`, error)
            })
        } else {
          setTimeout(() => undefined, 500)
          console.log(`🚩 Printing draft, will not persist`)
          console.log(
            json(definition, {
              color: true,
              indent: true
            })
          )
        }
        cleanUp()
      } else {
        console.log(`⛔ Error!`)
      }
    })
}

function setupCommands (vorpal) {
  return vorpal
    .delimiter('types|')
    .use(getNames)
    .use(pickDefinition)
    .use(setPrefLanguage)
    .use(generateType)
    .use(generateAllTypes)
    .use(viewConfig)
    .use(createType)
    .use(query)
}

;(() => {
  setupCommands(vorpal)
    .show()
    .catch('[bashcmds...]')
    .action(function (args, next) {
      console.log(`🔰 "${args.bashcmds.join(' ')}" running as bash cmd\n`)
      exec(args.bashcmds.join(' '), (err, result) => {
        if (err) {
          console.log('Error!')
        } else {
          console.log(result)
        }
        next()
      })
    })
})()

function stopVorpal () {
  Service.saveConfig(Service.cache())
  vorpal.exec('exit')
}

process.on('exit', code => {
  stopVorpal()
  if (flags.emojiSupport) console.log(`👋 Thanks for using types|CLI 💻`)
  else console.log(`Thanks for using types|CLI`)
})
