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
const { quicktype } = require('./functions')
const { Typings } = require('../Typings/schema')
const { TypeClient } = require('../Tools/TypeClient')
const runtime = require('../Typings/schema_runtime')
const parasite = require('parasite')

const time_buffer = ms => setTimeout(() => undefined, ms)

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
}

function createType (vorpal) {
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
        time_buffer(500)
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
          time_buffer(500)
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

function updateType (vorpal) {
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
        time_buffer(500)
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
          time_buffer(500)
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

module.exports = {
  createType
}
