
export const PhonecallDefintions = {
  "PhonecallPrototype": {
    "properties": {
      "direction": {
        "enum": [
          "OUTBOUND",
          "INBOUND"
        ],
        "type": "string"
      }
    },
    "type": "object",
    "required": [
      "direction"
    ]
  },
  "PhonecallRecord": {
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
          "Phonecall"
        ],
        "type": "string"
      },
      "direction": {
        "enum": [
          "OUTBOUND",
          "INBOUND"
        ],
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
      "type",
      "direction"
    ]
  }
}