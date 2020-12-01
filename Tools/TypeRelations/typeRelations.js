const types = require('./types.js');

const getUUID = (value) => {
	Object.entries(value.properties || {}).filter((prop) => {
		if (prop[1].type === 'string' && prop[1].format === 'uuid') {
			console.log(prop);
			return true;
		} else {
			if (prop[1].properties) {
				return getUUID(prop[1] || {}) ? value : {};
			}
			if (Array.isArray(prop[1])) {
				return prop[1].map((x) => (getUUID(x) ? value : {}));
			}
			return false;
		}
	});
};

const getRelations = (types) => {
	const reults = Object.entries(types).map(([ key, value ]) => {
		return { [key]: getUUID(value) };
	});
	// const relationProps = getUUID()
	console.log(reults);
	// return Object.entries(.definitions).map(([key, value]) => {
	//   // console.log()

	//   return Object.entries(relationProps || {})
	//   const fields = relationProps.map(([_0, _1]) => {
	//     return _0
	//   })
	//   return {
	//     [key]: fields
	//   }
	// })
};
getRelations(types);
