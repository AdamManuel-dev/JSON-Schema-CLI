const shell = require('shelljs')
const names = require('./typeNames.json')
const types = require('./types.json')

async function run () {
  const toPrint = {}
  for (let index = 0; index < names.length; index++) {
    const name = names[index]
    const response = await shell
      .exec(
        `cat types.json | fx 'x => x.${name}' | quicktype --src-lang schema --lang dart --final-props -o ${name}.dart`
      )
      .toString()
    toPrint[name] = response
    if (index == names.length - 1) {
      console.log(toPrint)
    }
  }
}

run()
