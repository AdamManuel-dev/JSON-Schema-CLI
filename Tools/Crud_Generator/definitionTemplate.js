module.exports = properName => {
  let lowername = properName.toLowerCase()
  return `
  "${properName}-list": {
    "type": "array",
    "title": "${properName} List Definition",
    "description": "This is a List of ${properName}",
    "items": {
      "$ref": "#/definitions/${properName}"
    }
  }`
}
