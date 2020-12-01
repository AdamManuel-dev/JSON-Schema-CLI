const { compile, compileFromFile } = require('json-schema-to-typescript')
const Types = require('./Types.oas3')
const fs = require('fs')

const entityScript = (name, schema) => `import { State } from '@ngxs/store';
import {
  defaultEntityState,
  EntityStateModel,
  EntityState,
  IdStrategy
} from '@ngxs-labs/entity-state';
import { Injectable } from '@angular/core';

${schema}

@State<EntityStateModel<${name}Definition>>({
  name: '${name.toLowerCase()}',
  defaults: defaultEntityState()
})
@Injectable({
  providedIn: 'root'
})
export class ${name}State extends EntityState<${name}Definition> {
  constructor() {
    super(${name}State, 'id', IdStrategy.EntityIdGenerator);
  }
}`

async function generateEntity (key, baseSchema) {
  const schema = await compile(baseSchema, key, {
    enableConstEnums: true,
    unreachableDefinitions: true
  })
  const entity = entityScript(key, schema)
    .replace(/json-schema-to-typescript/g, 'Augi Entity Generator')
    .replace(/.*\[k: string\]: any;\n/, '')
  return entity
}

async function run () {
  const deconstructed = Object.entries(Types)
  deconstructed.shift()
  deconstructed.forEach(async ([name, schema]) => {
    console.log(name)
    const output = await generateEntity(name, schema).catch(err => {
      console.log(`${name}: ${err.toJSON().message}`)
    })
    // console.log(output)
    fs.writeFile(`./dist/${name}.state.ts`, output, err => undefined)
  })
}

run()
