module.exports = (properName, graph = false) => {
  let lowerName = properName.toLowerCase()
  let listingEndpoint = graph
    ? getPaths.marketing.search(properName, lowerName)
    : getPaths.production.search(properName, lowerName)
  return `
  ${listingEndpoint},
  ${getPaths.get(properName, lowerName)},
  "/${properName}": {
    ${getPaths.list(properName, lowerName)},
    ${getPaths.add(properName, lowerName)},
    ${getPaths.update(properName, lowerName)},
    ${getPaths.remove(properName, lowerName)}
  }`
}

const getPaths = {
  production: {
    search: (properName, lowerName) => `
    "/${properName}/search": {
      "post": {
        "responses": {
          "200": {
            "$ref": "#/responses/${properName}-List-Response"
          }
        },
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "schema": {
              "type": "object"
            }
          },
          {
            "in": "query",
            "name": "limit",
            "type": "number",
            "description": "This is the max amount of whatever record you are requesting.",
            "default": "20"
          },
          {
            "in": "query",
            "name": "skip",
            "type": "string",
            "default": "0",
            "description": "Number of records to omit from start of scan. "
          },
          {
            "in": "query",
            "name": "order",
            "type": "string",
            "default": "_ts",
            "description": "Order of database scan. Must be an attribute of the type"
          },
          {
            "in": "query",
            "name": "dir",
            "type": "string",
            "default": "desc",
            "description": "Direction of the ordering from the order parameter."
          }
        ],
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "tags": [
          "${properName}"
        ],
        "summary": "Search for ${properName}s",
        "description": "List all of the contracts that have a specific attribute: value pairs. ",
        "operationId": "search${properName}"
      }
    }`
  },
  marketing: {
    search: (properName, lowerName) => `
    "/${properName}/search": {
      "post": {
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {}
            }
          }
        },
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "schema": {
              "type": "object"
            },
            "x-examples": {
              "application/json": {
                "attribute": "attributeValue"
              }
            }
          }
        ],
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "tags": [
          "${properName}"
        ],
        "summary": "Search ${properName}s",
        "description": "Searchs and returns a list of all ${properName}s with provided attributes. ",
        "operationId": "search${properName}s"
      }
    }`
  },
  get: (properName, lowerName) => `
  "/${properName}/id": {
    "post": {
      "summary": "Get ${properName}",
      "operationId": "get${properName}",
      "responses": {
        "200": {
          "$ref": "#/responses/${properName}-Response"
        },
        "400": {
          "$ref": "#/responses/Error-Response"
        }
      },
      "description": "Gets a ${properName}'s Vertex by it's ID. ",
      "tags": [
        "${properName}"
      ],
      "consumes": [
        "application/json"
      ],
      "produces": [
        "application/json"
      ],
      "parameters": [
        {
          "in": "body",
          "name": "get${properName}Body",
          "schema": {
            "$ref": "#/definitions/Record-Request-Definition"
          },
          "description": "Request to get a ${properName} record."
        }
      ]
    }
  }`,
  list: (properName, lowerName) => `
  "get": {
    "summary": "List ${properName}s",
    "operationId": "list${properName}s",
    "description": "Lists ${properName}s",
    "responses": {
      "200": {
        "$ref": "#/responses/${properName}-List-Response"
      },
      "400": {
        "$ref": "#/responses/Error-Response"
      }
    },
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "tags": [
      "${properName}"
    ],
    "parameters": [
      {
        "in": "query",
        "name": "limit",
        "type": "number",
        "description": "This is the max amount of whatever record you are requesting.",
        "default": "20"
      },
      {
        "in": "query",
        "name": "skip",
        "type": "string",
        "default": "0",
        "description": "Number of records to omit from start of scan. "
      },
      {
        "in": "query",
        "name": "order",
        "type": "string",
        "default": "_ts",
        "description": "Order of database scan. Must be an attribute of the type"
      },
      {
        "in": "query",
        "name": "dir",
        "type": "string",
        "default": "desc",
        "description": "Direction of the ordering from the order parameter."
      }
    ]
  }`,
  add: (properName, lowerName) => `
  "post": {
    "responses": {
      "200": {
        "$ref": "#/responses/${properName}-Response"
      },
      "400": {
        "$ref": "#/responses/Error-Response"
      }
    },
    "summary": "Insert ${properName}",
    "operationId": "insert${properName}",
    "description": "Insert a new ${properName} Vertex into the Graph. ",
    "tags": [
      "${properName}"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "parameters": [
      {
        "in": "body",
        "name": "insert${properName}Body",
        "schema": {
          "$ref": "#/definitions/${properName}"
        },
        "description": "Insert ${properName} as a new record"
      }
    ]
  }`,
  update: (properName, lowerName) => `
  "put": {
    "summary": "Update ${properName}",
    "operationId": "update${properName}",
    "parameters": [
      {
        "in": "body",
        "name": "update${properName}Body",
        "schema": {
          "$ref": "#/definitions/${properName}"
        },
        "description": "New record details for ${properName}"
      }
    ],
    "responses": {
      "200": {
        "$ref": "#/responses/${properName}-Response"
      },
      "400": {
        "$ref": "#/responses/Error-Response"
      }
    },
    "description": "Updates the ${properName} Vertex Properties. ",
    "tags": [
      "${properName}"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ]
  }`,
  remove: (properName, lowerName) => `
  "delete": {
    "summary": "Delete ${properName}",
    "operationId": "delete${properName}",
    "responses": {
      "200": {
        "$ref": "#/responses/${properName}-Remove-Response"
      },
      "400": {
        "$ref": "#/responses/Error-Response"
      }
    },
    "description": "Deletes the Vertex associated with provided Id. ",
    "tags": [
      "${properName}"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "parameters": [
      {
        "in": "body",
        "name": "delete${properName}Body",
        "schema": {
          "$ref": "#/definitions/Record-Request-Definition"
        },
        "description": "Delete ${properName} with given id"
      }
    ]
  }`
}
