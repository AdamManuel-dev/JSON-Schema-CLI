module.exports = properName => {
  let lowername = properName.toLowerCase()
  return `
  "${properName}-Response": {
    "description": "This is a successful response with a single ${properName} Object",
    "schema": {
      "type": "object",
      "properties": {
        "success": {
          "type": "string"
        },
        "response": {
          "$ref": "#/definitions/${properName}"
        }
      }
    }
  },
  "${properName}-List-Response": {
    "description": "This is a successful response with a list of ${properName} Objects",
    "schema": {
      "type": "object",
      "properties": {
        "success": {
          "type": "string"
        },
        "response": {
          "$ref": "#/definitions/${properName}-list"
        }
      }
    }
  },
  "${properName}-Remove-Response": {
    "description": "This is a successful response from removing a single ${properName} Object",
    "schema": {
      "type": "object",
      "properties": {
        "success": {
          "type": "string"
        }
      }
    }
  }`
}
