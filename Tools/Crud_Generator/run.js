let types = require('./types')

// console.log('test', process.argv[2])

let graph = !!process.argv[2] && process.argv[2] === '--graph'

// console.log(graph)

let definitionGen = require('./definitionTemplate')
let pathGen = require('./pathsTemplate')
let responseGen = require('./responseTemplate')
let { Tags, ErrorResponse, RecordRequest } = require('./miscTemplates')

async function run () {
  let sortedProduction = types.production.sort()

  let _types = sortedProduction
  let _title = 'Basic CRUD'

  let paths = ''
  let definitions = ''
  let responses = ''
  let tags = ''
  _types.forEach((type, index) => {
    if (index === 0) {
      tags += Tags(type)
    } else {
      tags += ',' + Tags(type)
    }
    if (index !== _types.length - 1) {
      paths += pathGen(type, graph) + ','
      definitions += definitionGen(type) + ','
      responses += responseGen(type) + ','
    } else {
      paths += pathGen(type)
      definitions += definitionGen(type)
      responses += responseGen(type)
    }

    if (index === _types.length - 1) {
      console.log(`{
  "swagger": "2.0",
  "info": {
    "title": "${_title} API",
    "version": "1.0",
    "description": "This is the Base API that the entire thing is built from ",
    "contact": {
      "name": "Adam",
      "url": "https://augimenteddestiny.com",
      "email": "support@augmenteddestiny.com"
    },
    "license": {
      "name": "Commercial License"
    }
  },
  "securityDefinitions": {
    "User Authentication": {
      "type": "apiKey",
      "in": "header",
      "name": "Authorization",
      "description": "Bearer Token"
    }
  },
  "basePath": "",
  "schemes": [
    "https"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "host": "midtown-ts.azurewebsites.net/api/base",
  "tags": [
${tags}
  ],
  "paths": {
    ${paths}
  },
  "definitions": {
    ${definitions},
    ${RecordRequest}
  },
  "responses": {
    ${responses},
    ${ErrorResponse}
  }
}`)
    }
  })
}

run()
