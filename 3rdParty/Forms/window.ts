const WindowFields = [
	{
		key: 'SHINGLE MAKE',
		type: 'select',
		defaultValue: 'IKO (ASHPALT)',
		templateOptions:
			{
				label: 'SHINGLE MAKE',
				options:
					[
						{
							label: 'IKO (ASHPALT)',
							value: 'IKO (ASHPALT)'
						},
						{
							label: 'CERTAINTEED (METAL)',
							value: 'CERTAINTEED (METAL)'
						}
					]
			}
	},
	{
		key: 'CERTAINTEED (METAL) STYLE',
		type: 'select',
		defaultValue: 'SHAKE',
		templateOptions:
			{
				label: 'CERTAINTEED (METAL) STYLE',
				options:
					[
						{
							label: 'SHAKE',
							value: 'SHAKE'
						},
						{
							label: 'SLATE',
							value: 'SLATE'
						},
						{
							label: 'TILE',
							value: 'TILE'
						}
					]
			}
	},
	{
		key: 'PROTECTIVE MEMBRANE',
		type: 'select',
		defaultValue: 'SYNFELT',
		templateOptions:
			{
				label: 'PROTECTIVE MEMBRANE',
				options:
					[
						{
							label: 'SYNFELT',
							value: 'SYNFELT'
						},
						{
							label: '(ASPHALT) DIAMOND DECK (METAL)',
							value: '(ASPHALT) DIAMOND DECK (METAL)'
						},
						{
							label: 'FLANGE COVERS ',
							value: 'FLANGE COVERS '
						},
						{
							label: 'ALL LEAD',
							value: 'ALL LEAD'
						}
					]
			}
	},
	{
		key: '"SPECTRA" GUTTER COLORS',
		type: 'select',
		defaultValue: '30 DEGREE WHITE',
		templateOptions:
			{
				label: '"SPECTRA" GUTTER COLORS',
				options:
					[
						{
							label: '30 DEGREE WHITE',
							value: '30 DEGREE WHITE'
						},
						{
							label: 'PEARL GRAY',
							value: 'PEARL GRAY'
						},
						{
							label: 'CREAM',
							value: 'CREAM'
						},
						{
							label: 'DOVE GRAY',
							value: 'DOVE GRAY'
						},
						{
							label: 'BRONZE',
							value: 'BRONZE'
						},
						{
							label: 'FOREST GREEN',
							value: 'FOREST GREEN'
						},
						{
							label: 'LINEN',
							value: 'LINEN'
						},
						{
							label: 'MUSKET BROWN',
							value: 'MUSKET BROWN'
						},
						{
							label: 'COPPER',
							value: 'COPPER'
						},
						{
							label: 'TRADITIONAL BLUE',
							value: 'TRADITIONAL BLUE'
						},
						{
							label: 'COCOA BROWN',
							value: 'COCOA BROWN'
						},
						{
							label: 'TUXEDO GRAY',
							value: 'TUXEDO GRAY'
						},
						{
							label: 'ALMOND',
							value: 'ALMOND'
						},
						{
							label: 'EGGSHELL',
							value: 'EGGSHELL'
						},
						{
							label: 'SCOTCH RED',
							value: 'SCOTCH RED'
						},
						{
							label: 'TERRATONE',
							value: 'TERRATONE'
						},
						{
							label: 'WICKER',
							value: 'WICKER'
						},
						{
							label: 'ROYAL BROWN',
							value: 'ROYAL BROWN'
						},
						{
							label: 'ANTIQUE IVORY',
							value: 'ANTIQUE IVORY'
						},
						{
							label: 'CLAY',
							value: 'CLAY'
						},
						{
							label: 'COLONIAL GRAY',
							value: 'COLONIAL GRAY'
						}
					]
			}
	},
	{
		key: 'ASPHALT STYLE',
		type: 'select',
		defaultValue: 'DYNASTY',
		templateOptions:
			{
				label: 'ASPHALT STYLE',
				options:
					[
						{
							label: 'DYNASTY',
							value: 'DYNASTY'
						},
						{
							label: 'NORDIC',
							value: 'NORDIC'
						}
					]
			}
	},
	{
		key: 'SHAKE (METAL) COLORS',
		type: 'select',
		defaultValue: 'CEDAR',
		templateOptions:
			{
				label: 'SHAKE (METAL) COLORS',
				options:
					[
						{
							label: 'CEDAR',
							value: 'CEDAR'
						},
						{
							label: 'TIMBER ASH',
							value: 'TIMBER ASH'
						},
						{
							label: 'WEATHERWOOD',
							value: 'WEATHERWOOD'
						},
						{
							label: 'SHOREWOOD',
							value: 'SHOREWOOD'
						}
					]
			}
	},
	{
		key: 'ICE/WATER PROTECTION',
		type: 'select',
		defaultValue: 'EAVES',
		templateOptions:
			{
				label: 'ICE/WATER PROTECTION',
				options:
					[
						{
							label: 'EAVES',
							value: 'EAVES'
						},
						{
							label: 'VALLEYS',
							value: 'VALLEYS'
						}
					]
			}
	},
	{
		key: 'RIDGE VENT',
		type: 'select',
		defaultValue: 'TAMKO (ASPHALT)',
		templateOptions:
			{
				label: 'RIDGE VENT',
				options:
					[
						{
							label: 'TAMKO (ASPHALT)',
							value: 'TAMKO (ASPHALT)'
						},
						{
							label: 'CERTAINTEED (METAL)',
							value: 'CERTAINTEED (METAL)'
						}
					]
			}
	},
	{
		key: 'CERTAINTEED (METAL) STYLE',
		type: 'select',
		defaultValue: 'SILVER',
		templateOptions:
			{
				label: 'CERTAINTEED (METAL) STYLE',
				options:
					[
						{
							label: 'SILVER',
							value: 'SILVER'
						}
					]
			}
	},
	{
		key: 'DYNASTY (ASPHALT) COLORS,',
		type: 'select',
		defaultValue: 'GRANITE BLACK',
		templateOptions:
			{
				label: 'DYNASTY (ASPHALT) COLORS,',
				options:
					[
						{
							label: 'GRANITE BLACK',
							value: 'GRANITE BLACK'
						},
						{
							label: 'GLACIER',
							value: 'GLACIER'
						},
						{
							label: 'CASTLE GREY',
							value: 'CASTLE GREY'
						},
						{
							label: 'DRIFTSHAKE',
							value: 'DRIFTSHAKE'
						},
						{
							label: 'SEDONA',
							value: 'SEDONA'
						},
						{
							label: 'CORNERSTONE',
							value: 'CORNERSTONE'
						},
						{
							label: 'APPALACHIAN',
							value: 'APPALACHIAN'
						},
						{
							label: 'BROWNSTONE',
							value: 'BROWNSTONE'
						},
						{
							label: 'FROSTONE GREY',
							value: 'FROSTONE GREY'
						},
						{
							label: 'BISCAYNE',
							value: 'BISCAYNE'
						},
						{
							label: 'ATLANTIC BLUE',
							value: 'ATLANTIC BLUE'
						},
						{
							label: 'MONACO RED',
							value: 'MONACO RED'
						},
						{
							label: 'EMERALD GREEN',
							value: 'EMERALD GREEN'
						},
						{
							label: 'PACIFIC RIM',
							value: 'PACIFIC RIM'
						},
						{
							label: 'SHADOW BROWN',
							value: 'SHADOW BROWN'
						}
					]
			}
	},
	{
		key: 'SLATE (METAL) COLORS',
		type: 'select',
		defaultValue: 'BROWNSTONE',
		templateOptions:
			{
				label: 'SLATE (METAL) COLORS',
				options:
					[
						{
							label: 'BROWNSTONE',
							value: 'BROWNSTONE'
						},
						{
							label: 'COBALT',
							value: 'COBALT'
						},
						{
							label: 'CASTLE GREY',
							value: 'CASTLE GREY'
						},
						{
							label: 'MOUNTAIN SAGE',
							value: 'MOUNTAIN SAGE'
						},
						{
							label: 'STORM SLATE',
							value: 'STORM SLATE'
						}
					]
			}
	},
	{
		key: 'FLASHING/ COUNTER FLASHING',
		type: 'select',
		defaultValue: 'ALL',
		templateOptions:
			{
				label: 'FLASHING/ COUNTER FLASHING',
				options:
					[
						{
							label: 'ALL',
							value: 'ALL'
						}
					]
			}
	},
	{
		key: 'SOFFIT',
		type: 'select',
		defaultValue: '560 AUTUMN LEAF',
		templateOptions:
			{
				label: 'SOFFIT',
				options:
					[
						{
							label: '560 AUTUMN LEAF',
							value: '560 AUTUMN LEAF'
						},
						{
							label: '518 BLACK',
							value: '518 BLACK'
						},
						{
							label: '502 BROWN',
							value: '502 BROWN'
						},
						{
							label: '200 CACTUS',
							value: '200 CACTUS'
						},
						{
							label: '827 CHAMPAGNE',
							value: '827 CHAMPAGNE'
						},
						{
							label: '807 CLAY',
							value: '807 CLAY'
						},
						{
							label: '559 CYPRESS',
							value: '559 CYPRESS'
						},
						{
							label: '327 DESERT TAN',
							value: '327 DESERT TAN'
						},
						{
							label: '503 EGGSHELL',
							value: '503 EGGSHELL'
						},
						{
							label: '605 ELDRIDGE GRAY',
							value: '605 ELDRIDGE GRAY'
						},
						{
							label: '522 FOREST',
							value: '522 FOREST'
						},
						{
							label: '204 GRANITE',
							value: '204 GRANITE'
						},
						{
							label: '506 HEATHER',
							value: '506 HEATHER'
						},
						{
							label: '819 HERRINGBONE',
							value: '819 HERRINGBONE'
						},
						{
							label: '577 MOCHA',
							value: '577 MOCHA'
						},
						{
							label: '508 MUSKET',
							value: '508 MUSKET'
						},
						{
							label: '521 NAVY',
							value: '521 NAVY'
						},
						{
							label: '509 NORWOOD',
							value: '509 NORWOOD'
						},
						{
							label: '805 PEWTER',
							value: '805 PEWTER'
						},
						{
							label: '549 PRAIRIE SAND',
							value: '549 PRAIRIE SAND'
						},
						{
							label: '538 SABLE',
							value: '538 SABLE'
						},
						{
							label: '177 SANDY BEIGE',
							value: '177 SANDY BEIGE'
						},
						{
							label: '523 SNOW MIST',
							value: '523 SNOW MIST'
						},
						{
							label: '511 TERRATONE',
							value: '511 TERRATONE'
						},
						{
							label: '280 WHITE',
							value: '280 WHITE'
						},
						{
							label: '809 WICKER',
							value: '809 WICKER'
						},
						{
							label: '604 WINEBERRY',
							value: '604 WINEBERRY'
						},
						{
							label: '401 BENNINGTON BEIGE',
							value: '401 BENNINGTON BEIGE'
						},
						{
							label: '411 COTTAGE RED',
							value: '411 COTTAGE RED'
						},
						{
							label: '404 DUNE',
							value: '404 DUNE'
						},
						{
							label: '405 FOOTHILL BLUE',
							value: '405 FOOTHILL BLUE'
						},
						{
							label: '407 SAHARA',
							value: '407 SAHARA'
						},
						{
							label: '409 SYCAMORE',
							value: '409 SYCAMORE'
						},
						{
							label: '410 THATCH',
							value: '410 THATCH'
						}
					]
			}
	},
	{
		key: 'GUTTER SIZE',
		type: 'select',
		defaultValue: '5"',
		templateOptions:
			{
				label: 'GUTTER SIZE',
				options:
					[
						{
							label: '5"',
							value: '5"'
						},
						{
							label: '6"',
							value: '6"'
						}
					]
			}
	},
	{
		key: 'NORDIC (ASPHALT) COLORS',
		type: 'select',
		defaultValue: 'GRANITE BLACK',
		templateOptions:
			{
				label: 'NORDIC (ASPHALT) COLORS',
				options:
					[
						{
							label: 'GRANITE BLACK',
							value: 'GRANITE BLACK'
						},
						{
							label: 'CORNERSTONE',
							value: 'CORNERSTONE'
						},
						{
							label: 'DRIFTSHAKE',
							value: 'DRIFTSHAKE'
						},
						{
							label: 'CASTLE GREY',
							value: 'CASTLE GREY'
						},
						{
							label: 'SEDONA',
							value: 'SEDONA'
						},
						{
							label: 'FROSTONE GREY',
							value: 'FROSTONE GREY'
						},
						{
							label: 'BROWNSTONE',
							value: 'BROWNSTONE'
						},
						{
							label: 'SHADOW BROWN',
							value: 'SHADOW BROWN'
						},
						{
							label: 'GLACIER',
							value: 'GLACIER'
						}
					]
			}
	},
	{
		key: 'TILE (METAL) COLORS',
		type: 'select',
		defaultValue: 'TERRACOTTA',
		templateOptions:
			{
				label: 'TILE (METAL) COLORS',
				options:
					[
						{
							label: 'TERRACOTTA',
							value: 'TERRACOTTA'
						},
						{
							label: 'WEATHERED TERRACOTTA',
							value: 'WEATHERED TERRACOTTA'
						},
						{
							label: 'BRICK BLEND',
							value: 'BRICK BLEND'
						},
						{
							label: 'WEATHERED CANYON',
							value: 'WEATHERED CANYON'
						},
						{
							label: 'TUSCAN STONE',
							value: 'TUSCAN STONE'
						},
						{
							label: 'WEATHERED SEQUOIA',
							value: 'WEATHERED SEQUOIA'
						},
						{
							label: 'JADE',
							value: 'JADE'
						},
						{
							label: 'WEATHERED SAGE',
							value: 'WEATHERED SAGE'
						}
					]
			}
	},
	{
		key: 'DRIP EDGE',
		type: 'select',
		defaultValue: 'ALL',
		templateOptions:
			{
				label: 'DRIP EDGE',
				options:
					[
						{
							label: 'ALL',
							value: 'ALL'
						}
					]
			}
	},
	{
		key: 'FASCIA',
		type: 'select',
		defaultValue: '560 AUTUMN LEAF',
		templateOptions:
			{
				label: 'FASCIA',
				options:
					[
						{
							label: '560 AUTUMN LEAF',
							value: '560 AUTUMN LEAF'
						},
						{
							label: '518 BLACK',
							value: '518 BLACK'
						},
						{
							label: '502 BROWN',
							value: '502 BROWN'
						},
						{
							label: '200 CACTUS',
							value: '200 CACTUS'
						},
						{
							label: '827 CHAMPAGNE',
							value: '827 CHAMPAGNE'
						},
						{
							label: '807 CLAY',
							value: '807 CLAY'
						},
						{
							label: '559 CYPRESS',
							value: '559 CYPRESS'
						},
						{
							label: '327 DESERT TAN',
							value: '327 DESERT TAN'
						},
						{
							label: '503 EGGSHELL',
							value: '503 EGGSHELL'
						},
						{
							label: '605 ELDRIDGE GRAY',
							value: '605 ELDRIDGE GRAY'
						},
						{
							label: '522 FOREST',
							value: '522 FOREST'
						},
						{
							label: '204 GRANITE',
							value: '204 GRANITE'
						},
						{
							label: '506 HEATHER',
							value: '506 HEATHER'
						},
						{
							label: '819 HERRINGBONE',
							value: '819 HERRINGBONE'
						},
						{
							label: '577 MOCHA',
							value: '577 MOCHA'
						},
						{
							label: '508 MUSKET',
							value: '508 MUSKET'
						},
						{
							label: '521 NAVY',
							value: '521 NAVY'
						},
						{
							label: '509 NORWOOD',
							value: '509 NORWOOD'
						},
						{
							label: '805 PEWTER',
							value: '805 PEWTER'
						},
						{
							label: '549 PRAIRIE SAND',
							value: '549 PRAIRIE SAND'
						},
						{
							label: '538 SABLE',
							value: '538 SABLE'
						},
						{
							label: '177 SANDY BEIGE',
							value: '177 SANDY BEIGE'
						},
						{
							label: '523 SNOW MIST',
							value: '523 SNOW MIST'
						},
						{
							label: '511 TERRATONE',
							value: '511 TERRATONE'
						},
						{
							label: '280 WHITE',
							value: '280 WHITE'
						},
						{
							label: '809 WICKER',
							value: '809 WICKER'
						},
						{
							label: '604 WINEBERRY',
							value: '604 WINEBERRY'
						},
						{
							label: '401 BENNINGTON BEIGE',
							value: '401 BENNINGTON BEIGE'
						},
						{
							label: '411 COTTAGE RED',
							value: '411 COTTAGE RED'
						},
						{
							label: '404 DUNE',
							value: '404 DUNE'
						},
						{
							label: '405 FOOTHILL BLUE',
							value: '405 FOOTHILL BLUE'
						},
						{
							label: '407 SAHARA',
							value: '407 SAHARA'
						},
						{
							label: '409 SYCAMORE',
							value: '409 SYCAMORE'
						},
						{
							label: '410 THATCH',
							value: '410 THATCH'
						}
					]
			}
	},
	{
		key: 'DOWNSPOUTS SIZE',
		type: 'select',
		defaultValue: '2" X 3"',
		templateOptions:
			{
				label: 'DOWNSPOUTS SIZE',
				options:
					[
						{
							label: '2" X 3"',
							value: '2" X 3"'
						},
						{
							label: '3" X 4"',
							value: '3" X 4"'
						}
					]
			}
	}
];

export { WindowFields };

import { camelCase } from 'lodash';

const formated = WindowFields.map((field) => {
	const camelKey = camelCase(field.key);
	return {
		...field,
		key: camelKey
	};
});
console.log(JSON.stringify(formated, undefined, 2));
