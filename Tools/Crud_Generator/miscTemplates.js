const RecordRequest = `"Record-Request-Definition": {
  "type": "object",
  "title": "Record Request Definition",
  "required": [
    "id",
    "type"
  ],
  "description": "This is a request to get or delete an object.",
  "example": {
    "type": "User",
    "id": "recordUUID"
  },
  "properties": {
    "id": {
      "type": "string",
      "description": "ID of Record"
    },
    "type": {
      "type": "string",
      "description": "Record Type"
    }
  }
}`

const ErrorResponse = `
  "Error-Response": {
    "description": "An error response is a response that has success as \`false\`. ",
    "schema": {
      "type": "object",
      "properties": {
        "success": {
          "type": "string"
        },
        "response": {
          "type": [
            "string",
            "object"
          ]
        }
      }
    }
  }`

const Tags = properName => `    {
      "name": "${properName}"
    }
`

module.exports = {
  ErrorResponse,
  RecordRequest,
  Tags
}
