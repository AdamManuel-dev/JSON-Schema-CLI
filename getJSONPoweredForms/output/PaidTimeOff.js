
export const PaidTimeOffDefintions = {
  "PaidTimeOffPrototype": {
    "properties": {
      "name": {
        "maxLength": 80,
        "type": "string"
      },
      "hours": {
        "maxLength": 80,
        "type": "string"
      }
    },
    "type": "object",
    "required": [
      "name",
      "hours"
    ]
  },
  "PaidTimeOffRecord": {
    "properties": {
      "id": {
        "format": "uuid",
        "type": "string"
      },
      "user": {
        "format": "uuid",
        "type": "string"
      },
      "type": {
        "enum": [
          "PaidTimeOff"
        ],
        "type": "string"
      },
      "name": {
        "maxLength": 80,
        "type": "string"
      },
      "hours": {
        "maxLength": 80,
        "type": "string"
      },
      "createdOn": {
        "minimum": 946684800,
        "maximum": 2147483646,
        "type": "integer"
      },
      "createdBy": {
        "format": "uuid",
        "type": "string"
      },
      "updatedOn": {
        "minimum": 946684800,
        "maximum": 2147483646,
        "type": "integer"
      },
      "updatedBy": {
        "format": "uuid",
        "type": "string"
      }
    },
    "type": "object",
    "required": [
      "user",
      "type",
      "name",
      "hours"
    ]
  }
}