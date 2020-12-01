const types = require('./types.js')
const _ = require('lodash')
const R = require('ramda')

function propertiesToArray (obj) {
  const isObject = val => typeof val === 'object' && !Array.isArray(val)

  const addDelimiter = (a, b) => (a ? `${a}.${b}` : b)

  const paths = (obj = {}, head = '') => {
    return Object.entries(obj).reduce((product, [key, value]) => {
      let fullPath = addDelimiter(head, key)
      return isObject(value)
        ? product.concat(paths(value, fullPath))
        : product.concat(fullPath)
    }, [])
  }

  return paths(obj)
}

async function run () {
  const paths = propertiesToArray(types)
  // console.log(paths)
  const formats = paths.filter(path => path.includes('format'))
  // console.log(formats)
  const formatValues = formats.filter(path => {
    return path.includes('format') && _.get(types, path) == 'uuid'
  })
  const splitPaths = formatValues.map(i =>
    i.split('.').filter(i => i !== 'properties' && i !== 'format')
  )

  const splitAllPaths = paths
    .filter(i => i !== '')
    .map(i =>
      i
        .split('.')
        .filter(
          i =>
            i !== 'properties' &&
            i !== 'format' &&
            i !== 'type' &&
            i !== '' &&
            i !== 'enum' &&
            i !== 'required' &&
            i !== 'maximum' &&
            i !== 'minimum' &&
            i !== 'maxLength'
        )
    )
    .filter((i, n) => {
      return n % 2 == 0
    })

  // const removeProperties = splitPaths.filter(i => i.includes('properties'))

  const format = splitPaths.map(tuple => {
    return {
      Type: tuple.shift(),
      path: [...tuple].join('.').replace('.items', [`[0]`])
    }
  })

  const formatAll = splitAllPaths.map(tuple => {
    return {
      Type: tuple.shift(),
      path: [...tuple].join('.').replace('.items', [`[0]`])
    }
  })

  const groupedByType = R.groupBy(item => item.Type, format)

  var groupByTypeValues = {}
  for (const key in groupedByType) {
    if (groupedByType.hasOwnProperty(key)) {
      const group = groupedByType[key]
      groupByTypeValues[key] = R.uniqBy(x => x.path, group)
        .map(i => (i.path !== '' ? i.path /** '^' + i.path + '$' */ : '*'))
        .filter(i => i !== '')
    }
  }

  const groupedAllByType = R.groupBy(item => item.Type, formatAll)

  var groupAllByTypeValues = {}
  for (const key in groupedAllByType) {
    if (groupedAllByType.hasOwnProperty(key)) {
      const group = groupedAllByType[key]
      groupAllByTypeValues[key] = R.uniqBy(x => x.path, group)
        .map(i => (i.path !== '' ? i.path /** '^' + i.path + '$' */ : '*'))
        .filter(i => i !== '')
    }
  }

  return {
    ReferencePathRegex: groupByTypeValues,
    pathRegex: groupAllByTypeValues
  }
}
run().then(i => {
  console.log(JSON.stringify(i))
})
