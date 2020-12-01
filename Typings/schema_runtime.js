const ext = require('./ext') // Create the schema in the function below
const getStdin = require('get-stdin')
const util = require('util')
const vm = require('vm')

const sandbox = {
  ext,
  schema: {},
  output: ''
}

const print = new vm.Script(`output = JSON.stringify(schema)`)

const runtime = async textInput =>
  new Promise((resolve, reject) => {
    try {
      const script = textInput.replace(
        new RegExp('const ext = require(.*)\n'),
        ''
      )
      const stdin = new vm.Script(script)
      const ctx = new vm.createContext(sandbox)
      stdin.runInContext(ctx)
      print.runInContext(ctx)
      const parsedOutput = JSON.parse(
        util
          .inspect(sandbox.output, {
            depth: 150,
            compact: true
          })
          .replace(/'/g, '')
      )
      return resolve(parsedOutput)
    } catch (error) {
      reject(error)
    }
  })

module.exports = runtime
