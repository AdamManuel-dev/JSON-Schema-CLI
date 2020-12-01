const _ = require('lodash');
const fs = require('fs-extra');

const Full = fs.readJSONSync('./FullSchema.json');
const Proto = fs.readJSONSync('./ProtoSchema.json');

console.log(Full, Proto);

const all = [
	...Object.entries(Full.definitions).map(([ key, value ]) => {
		const record = `${key}Record`;
		return {
			[record]: value
		};
	}),
	...Object.entries(Proto).map(([ key, value ]) => {
		const record = `${key}Prototype`;
		return {
			[record]: value
		};
	})
]
	.sort((a, b) => {
		if (Object.keys(a)[0] < Object.keys(b)[0]) return -1;
		else if (Object.keys(a)[0] > Object.keys(b)[0]) return 1;
		else return 0;
	})
	.reduce((prev, cur) => {
		return { ...prev, ...cur };
	}, {});

console.log(all);
