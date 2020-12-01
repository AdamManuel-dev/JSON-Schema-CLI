const {
	quicktype,
	InputData,
	jsonInputForTargetLanguage,
	JSONSchemaInput,
	JSONSchemaStore
} = require('quicktype-core');

async function fromJSON(targetLanguage, typeName, jsonString) {
	const jsonInput = jsonInputForTargetLanguage(targetLanguage);

	// We could add multiple samples for the same desired
	// type, or many sources for other types. Here we're
	// just making one type from one piece of sample JSON.
	await jsonInput.addSource({
		name: typeName,
		samples: [ jsonString ]
	});

	const inputData = new InputData();
	inputData.addInput(jsonInput);

	return await quicktype({
		inputData,
		lang: targetLanguage
	});
}

async function fromJSONSchema(targetLanguage, typeName, jsonSchemaString, dartOptions = false) {
	const schemaInput = new JSONSchemaInput(new JSONSchemaStore());

	// We could add multiple schemas for multiple types,
	// but here we're just making one type from JSON schema.
	await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });
	schemaInput.addSource;

	const inputData = new InputData();
	inputData.addInput(schemaInput);

	return await quicktype({
		inputData,
		lang: targetLanguage,
		leadingComments: [
			'Thank you for using the Type-CLI by Adam Manuel',
			'If you find any bugs or need help please contact me at',
			' - adam@augmenteddestiny.com'
		],
		rendererOptions: {
			'copy-with': true,
			'final-props': true
		}
	});
}

module.exports = {
	fromJSON,
	fromJSONSchema
};
