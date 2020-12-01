const String = require('kontur/lib/string')
const oas = require('kontur')

/**
 * Extension to kontur string typing builder
 */
class str extends String {
  constructor () {
    super()
  }

  /**
   * Creates a list of enumerated string values
   * @param  {...String} enums Enumerated String
   */
  static enum (...enums) {
    return new this().enum(...enums)
  }

  /**
   * Creates a list of enumerated string values
   * @param  {...String} enums Enumerated String
   */
  enum (...enums) {
    this.s.enum = enums
    return this
  }
}

const presets = {
  /**
   * @function list
   * Turns a definition into an array definition of that definition
   */
  list: partial => {
    return oas.array.items(partial)
  },
  /**
   * @function record
   * @param partialSchema
   * @param permissions
   * @param notes
   */
  record: ({
    partialSchema,
    permissions = false,
    notes = false,
    user = false
  }) => {
    return {
      id: oas.str.uuid.optional,
      ...(user ? { user: oas.str.uuid.optional } : {}),
      ...partialSchema,
      ...(permissions
        ? {
            owner: {
              users: oas.array.items(oas.str.uuid).optional,
              groups: oas.array.items(oas.str.uuid).optional
            }
          }
        : {}),
      ...(notes
        ? {
            noteIds: oas.array.items(oas.str.uuid).optional
          }
        : {}),
      createdOn: oas.int.min(946684800).max(2147483646).optional, // <Min> 01/01/2000 00:00:00 <Max> 01/19/2038 3:14:07
      createdBy: oas.str.uuid.optional.optional,
      updatedOn: oas.int.min(946684800).max(2147483646).optional, // <Min> 01/01/2000 00:00:00 <Max> 01/19/2038 3:14:07
      updatedBy: oas.str.uuid.optional
    }
  },
  /**
   * @function
   * UUID Schema
   */
  id: oas.str.uuid,
  /**
   * @function phone_number
   * Our phone number validation
   */
  phone_number: oas.str.match(new RegExp(/\d\(\d{3}\)\d{3}-\d{4}/)),
  /**
   * @function time_date
   * Out timedate validation and schema
   */
  time_date: oas.int.min(946684800).max(2147483646)
}

const utils = {
  /**
   * @function combine
   * Combines multiple schema definitions into a single definition
   */
  combine: (...schemas) => {
    const combined = {}
    Object.freeze(combined)
    const _schemas = schemas.reverse()
    _schemas.forEach(schema => {
      combined = {
        ...combined,
        ...schema
      }
    })
    return combined
  },
  /**
   * @function compileObjectOfSchema
   * Compiles an object of schema definitions instead of an array or a single one
   */
  compileObjectOfSchema: object => {
    const compiled = Object.freeze({})
    for (const type in object) {
      if (object.hasOwnProperty(type)) {
        const typeDef = object[type]
        compiled = {
          ...compiled,
          type: oas.compile(typeDef)
        }
      }
    }
    return compiled
  }
}

module.exports = {
  ...oas,
  str,
  presets,
  utils
}
