/**
 *
 * Library Imports
 */
const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const vorpal = require('vorpal')();
const { produce } = require('immer');
const shell = require('shelljs');
const exec = require('child_process').exec;

/**
 * My Imports
 */
const { quicktype } = require('./functions');
const { Typings } = require('../Typings/schema');
const { TypeClient } = require('../Tools/TypeClient');
const runtime = require('../Typings/schema_runtime');
const { createType } = require('./runtime');
const { Log, colorPrint } = require('./functions/logger');
const { concat } = require('lodash');

/**
 * CLI Flag Handling
 */
const checkFlag = (...toCheck) => {
	let present = false;
	toCheck.forEach((flag) => {
		if (process.argv.includes(flag + '')) {
			present = true;
		}
	});
	return present;
};
const flags = {
	verbose: checkFlag('-v', '--verbose'),
	emojiSupport: !checkFlag('-e', '--no-emoji')
};

/**
 * Config Constants
 */
const configPath = path.join(os.homedir(), '.augirc.json');
const defaultConfig = {};

const verbose = process.argv.includes('-v', 2) || process.argv.includes('--verbose', 2);

const logger = new Log(verbose ? 5 : 3);

/**
 * Singleton Service for moving data
 */
var Service = (function() {
	var cache;

	loadConfig = () => {
		if (fs.existsSync(configPath)) {
			return fs.readJSONSync(configPath);
		} else {
			fs.writeJSONSync(configPath, defaultConfig);
			return defaultConfig;
		}
	};

	saveConfig = ({ config }) => {
		fs.writeJSONSync(configPath, config);
	};

	function loadCache() {
		const loadedTypes = new Typings();
		const { definitions } = JSON.parse(loadedTypes.toString());
		return {
			definitions,
			names: Object.keys(definitions),
			config: loadConfig()
		};
	}

	return {
		cache: function() {
			if (!cache) {
				cache = loadCache();
			}
			return cache;
		},
		loadConfig: loadConfig,
		saveConfig: saveConfig,
		client: new TypeClient()
	};
})();

function getNames(vorpal) {
	vorpal
		.command('list', 'gets the names of all the types')
		.option('-l, --local', 'Grabs the local version')
		.action(async (args, callback) => {
			if (args.options.local) {
				console.log('\n\nTypes: \n------\n' + Service.cache().names.join('\n')) + '\n';
			} else {
				const names = await Service.client.getTypesNames();
				colorPrint(names);
				console.log('\n\nTypes: \n------\n' + names.join('\n')) + '\n';
			}
		});
}

function pickDefinition(vorpal) {
	vorpal
		.command('get <name> [out]', 'Gets a single type definition')
		.autocomplete(Service.cache().names)
		.action(async (args, callback) => {
			const outFile = args.out || './' + args.name + '.json';
			logger.InfoLog(concat('Generating', args.name));
			const type = Service.cache().definitions[args.name];
			fs.writeFileSync(outFile, JSON.stringify(type, undefined, 2));
			logger.SuccessLog(concat('Finished at', outFile));
		});
}

function setPrefLanguage(vorpal) {
	vorpal
		.command('pref <language> [fileEnd]', 'Sets a preferences schema language for type generation')
		.action(async ({ language, fileEnd }, callback) => {
			const newConfig = produce(Service.cache(), (draft) => {
				draft.config.language = language;
				draft.config.fileEnd = fileEnd;
			});
			logger.TraceLog(newConfig);
			Service.saveConfig(newConfig);
		});
}

function generateType(vorpal) {
	vorpal
		.command('gen <type> <out> [language]', 'Generate a type file in given language for given type')
		.action(async (args, cb) => {
			logger.TraceLog({
				cache: Service.cache(),
				args,
				types: Service.cache().definitions,
				type: Service.cache().definitions[args.type]
			});
			const type = await quicktype.fromJSONSchema(
				args.language || Service.cache().language,
				args.type,
				JSON.stringify(Service.cache().definitions[args.type])
			);
			fs.writeFile(args.out, type.lines.join('\n'));
		});
}

function generateAllTypes(vorpal) {
	vorpal
		.command('gen-all <out> [fileEnd] [language] [useCopyWith]', 'Generates all the type definitions available')
		.action(async (args, cb) => {
			fs.rmdirSync(args.out, {
				recursive: true
			});
			fs.mkdirSync(args.out);
			const newFiles = Object.entries(Service.cache().definitions).map(async ([ typeName, definition ]) => {
				const type = await quicktype.fromJSONSchema(
					args.language || Service.cache().language,
					typeName,
					JSON.stringify(definition),
					!!args.useCopyWith
				);
				fs.writeFile(
					args.fileEnd
						? args.out + '/' + typeName + args.fileEnd
						: args.out + '/' + typeName + Service.cache().fileEnd,
					type.lines.join('\n')
				);
			});
		});
}

function viewConfig(vorpal) {
	vorpal.command('view-config', 'Opens the config in VS Code').action(async (args) => {
		console.log(
			`
1. Edit config in VS Code
2. Save file in VS Code
3. Exit Tab
4. Return to running terminal

⏱... waiting`
		);
		const result = shell.exec(`code ${configPath} --wait`).code;
		if (result == 0) {
			logger.SuccessLog(`File Saved!`);
		} else {
			logger.ErrorLog(`Error!`);
		}
	});
}

function query(vorpal) {
	vorpal
		.command('type-query [query]', 'Executes a query against the Types DB')
		.help(function(args, cb) {
			console.log(`
This lets you create Cosmos SQL queries to query the Types DB.
ex: \`type-query "select * from c"\` Selects everything inside DB
ex: \`type-query "select c.id, c.src from c"\` selects the ID and the Generation src from the DB
ex: \`type-query "select c.id from c order by c._ts"\` selects most recently updates type names`);
			cb();
		})
		.option('-p, --project <project>', 'Which project partition to query')
		.option('-o, --output <path>', 'Output result to a file')
		.action(async (args) => {
			if (!!args.query) {
				logger.TraceLog('Querying');
				const response = await Service.client.textQuery(args.query, args.options.project).catch((err) => {
					console.log('⛔ ERROR:', colorPrint(err));
				});
				logger.SuccessLog('Success!');
				if (args.options.output) {
					fs.writeJsonSync(args.options.output, JSON.stringify(response, undefined, 2));
				} else {
					logger.ErrorLog(response);
				}
			}
		});
}

function setupCommands(vorpal) {
	return vorpal
		.delimiter('AugiType⚡⚡\x08') // WARNING: DO NOT DELETE
		.use(getNames)
		.use(pickDefinition)
		.use(setPrefLanguage)
		.use(generateType)
		.use(generateAllTypes)
		.use(viewConfig)
		.use(createType)
		.use(query);
}

(() => {
	setupCommands(vorpal).show().catch('[bashcmds...]').action(function(args, next) {
		console.log(`🔰 "${args.bashcmds.join(' ')}" running as bash cmd\n`);
		exec(args.bashcmds.join(' '), (err, result) => {
			if (err) {
				logger.ErrorLog('Error!');
			} else {
				logger.SuccessLog(result);
			}
			next();
		});
	});
})();

function stopVorpal() {
	Service.saveConfig(Service.cache());
	vorpal.exec('exit');
}

process.on('exit', (code) => {
	stopVorpal();
	if (flags.emojiSupport) logger.InfoLog(` Thanks for using types|CLI 💻`, '👋');
	else logger.InfoLog(`Thanks for using types|CLI`);
});
