
export const PaymentDefintions = {
  "PaymentPrototype": {
    "properties": {
      "contractId": {
        "maxLength": 80,
        "type": "string"
      },
      "contractStatus": {
        "maxLength": 80,
        "type": "string"
      }
    },
    "type": "object",
    "required": [
      "contractId",
      "contractStatus"
    ]
  },
  "PaymentRecord": {
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
          "ContractStatus"
        ],
        "type": "string"
      },
      "contractId": {
        "maxLength": 80,
        "type": "string"
      },
      "contractStatus": {
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
      "type",
      "contractId",
      "contractStatus"
    ]
  }
}