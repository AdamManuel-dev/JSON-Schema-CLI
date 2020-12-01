const _ = require('lodash');
const fs = require('fs-extra');

const { definitions } = fs.readJSONSync('./FullSchema.json');
const types = Object.entries(definitions)
	.map(([ key, value ]) => {
		return {
			[key]: {
				...value,
				properties: Object.entries(value.properties).reduce((prev, cur) => {
					return [
						'id',
						'user',
						'type',
						'group',
						'createdOn',
						'createdBy',
						'updatedOn',
						'updatedBy'
					].includes(cur[0])
						? prev
						: { ...prev, ...{ [cur[0]]: cur[1] } };
				}, {}),
				required: !!value.required
					? value.required.filter(
							(i) =>
								![
									'id',
									'user',
									'type',
									'group',
									'createdOn',
									'createdBy',
									'updatedOn',
									'updatedBy'
								].includes(i)
						)
					: value.required
			}
		};
	})
	.reduce((prev, cur) => {
		return { ...prev, ...cur };
	}, {});

console.log(JSON.stringify(types, undefined, 2));
