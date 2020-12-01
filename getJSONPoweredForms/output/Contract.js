
export const ContractDefintions = {
  "ContractPrototype": {
    "properties": {
      "status": {
        "enum": [
          "SIGNED",
          "APPROVED",
          "PENDING",
          "SENT",
          "DRAFT"
        ],
        "type": "string"
      },
      "contract": {
        "format": "uuid",
        "type": "string"
      },
      "lead": {
        "format": "uuid",
        "type": "string"
      },
      "order": {
        "format": "uuid",
        "type": "string"
      },
      "datetime": {
        "minimum": 946684800,
        "maximum": 2147483646,
        "type": "integer"
      },
      "name": {
        "maxLength": 50,
        "type": "string"
      },
      "lastRequested": {
        "minimum": 946684800,
        "maximum": 2147483646,
        "type": "integer"
      }
    },
    "type": "object",
    "required": [
      "status",
      "name"
    ]
  },
  "ContractRecord": {
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
          "Contract"
        ],
        "type": "string"
      },
      "status": {
        "enum": [
          "SIGNED",
          "APPROVED",
          "PENDING",
          "SENT",
          "DRAFT"
        ],
        "type": "string"
      },
      "contract": {
        "format": "uuid",
        "type": "string"
      },
      "lead": {
        "format": "uuid",
        "type": "string"
      },
      "order": {
        "format": "uuid",
        "type": "string"
      },
      "datetime": {
        "minimum": 946684800,
        "maximum": 2147483646,
        "type": "integer"
      },
      "name": {
        "maxLength": 50,
        "type": "string"
      },
      "lastRequested": {
        "minimum": 946684800,
        "maximum": 2147483646,
        "type": "integer"
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
      "status",
      "name"
    ]
  }
}