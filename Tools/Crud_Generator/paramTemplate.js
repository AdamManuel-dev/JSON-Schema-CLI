module.exports = (properName) => {
  let lowername = properName.toLowerCase();
  return `"parameters": {
    "${properName} Record": {
      "name": "new",
      "in": "body",
      "type": "string",
      "schema": {}
    },
    "Record Request Body": {
      "name": "new",
      "in": "body",
      "type": "string",
      "schema": {
        "$ref": "#/definitions/test"
      }
    }
  },`;
}
