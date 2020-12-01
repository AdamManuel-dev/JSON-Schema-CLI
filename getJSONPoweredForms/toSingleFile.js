const _ = require('lodash');
const fs = require('fs-extra');

const Full = fs.readJSONSync('./FullSchema.json');
const Proto = fs.readJSONSync('./ProtoSchema.json');

const { quicktype, InputData, JSONSchemaInput, JSONSchemaStore } = require('quicktype-core');

const generationComment = `
|----------------------------------------------------------------------------|
|GENERATED CODE: Create by GenType by Adam Manuel                            |
|                                                                            |
|                                                                            |
|Please rerun the tests and regenerate these definitions instead of editting |
|any of them by hand.                                                        |
|                                                                            |
|----------------------------------------------------------------------------|`;

async function quicktypeJSONSchema(typeName, jsonSchemaString) {
	const schemaInput = new JSONSchemaInput(new JSONSchemaStore());

	// We could add multiple schemas for multiple types,
	// but here we're just making one type from JSON schema.
	await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });

	const inputData = new InputData();
	inputData.addInput(schemaInput);

	return await quicktype({
		inputData,
		lang: 'ts',
		// leadingComments: generationComment,
		rendererOptions: {
			'just-types': true
		}
	});
}

/**
 * Updates the types name
 * @param {string} AppendedString String value to append to name of Type
 */
const updateDefinitionName = ({ AppendedString } = { AppendedString: 'Definition' }) => ([ key, value ]) => {
	const record = `${key}${AppendedString}`;
	return {
		[record]: value
	};
};

/**
 * Sorts the resulting array by objects property **KEY** value
 * @param {boolean} asc 
 */
const sortByFirstParameter = ({ desc } = { desc: false }) => (a, b) => {
	if (Object.keys(a)[0] < Object.keys(b)[0]) return desc ? -1 : 1;
	else if (Object.keys(a)[0] > Object.keys(b)[0]) return desc ? 1 : -1;
	else return 0;
};

/**
 * Basic Reducer into 1 Object or 1 Array
 */
const deconstructIntoOne = (isArray = false) => [
	(prev, cur) => {
		return isArray ? [ ...prev, ...cur ] : { ...prev, ...cur };
	},
	isArray ? [] : {}
];

/**
 * New PostName string for Types
 * @param {string} name 
 */
const mapToNewName = (values, name) =>
	Object.entries(values).map(
		updateDefinitionName({
			AppendedString: name
		})
	);

/**
 * 
 * @param {*} param0 
 */
const removePipeFromValues = ([ key, value ]) => {
	return value.map((i) => i.replace('|', ''));
};

/**
 * 
 * @param {[string, any]} defTupple
 */
const groupByPrePipe = (defTupple) => {
	return defTupple.split('|')[0];
};

/**
 * 
 * @param {any[]} values 
 * @param {function} groupFunction 
 */
const groupProperties = (values, groupFunction) => {
	return Object.entries(_.groupBy(Object.keys(values), groupFunction));
};

const all = []
	.concat(mapToNewName(Full.definitions, '|'.concat('Record')), mapToNewName(Proto, '|'.concat('Prototype')))
	.sort(
		sortByFirstParameter({
			desc: true
		})
	)
	.reduce(...deconstructIntoOne(false));

const groupedDefs = groupProperties(all, groupByPrePipe).map(removePipeFromValues);

const results = groupedDefs.map((defs) => {
	return defs.map((def) => {
		return Object.entries(all).find(([ item, value ]) => {
			// console.log(item.replace('|', '') === def ? [ item, def ] : 'no');
			return item.replace('|', '') === def;
		});
	});
});

const arrayToObject = (arr) =>
	arr.reduce(
		(prev, cur) => {
			return {
				...prev,
				[cur[0].replace('|', '')]: cur[1]
			};
		},
		{
			name: arr[0][0].split('|')[0]
		}
	);

const groupedResults = results.map((i) => arrayToObject(i));

console.log(JSON.stringify(groupedResults, undefined, 2));

// if (fs.existsSync('./output')) {
// 	fs.removeSync('./output');
// }
// fs.mkdirSync('./output');

// Promise.all(
// 	groupedResults.map(async (group) => {
// 		const title = group.commonName;
// 		delete group.commonName;
// 		const strOutpu = JSON.stringify(group, undefined, 2);
// 		// const ts = await quicktypeJSONSchema(title, JSON.stringify(group));
// 		// console.log(ts);
// 		fs.writeFileSync(
// 			'./output'.concat('/', title, '.js'),
// 			`
// export const ${title}Defintions = ${strOutpu}`
// 		);
// 	})
// );

// // const results = resultIndexes.map(([ index1, index2 ]) => {
// // 	return [ all[index1], all[index2] ];
// // });

// // console.log(resultIndexes, results);
