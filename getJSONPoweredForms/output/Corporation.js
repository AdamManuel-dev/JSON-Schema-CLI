
export const CorporationDefintions = {
  "CorporationPrototype": {
    "properties": {
      "corporationID": {
        "format": "uuid",
        "type": "string"
      },
      "businessClassification": {
        "maxLength": 80,
        "type": "string"
      },
      "businessType": {
        "maxLength": 80,
        "type": "string"
      },
      "businessName": {
        "maxLength": 80,
        "type": "string"
      },
      "ein": {
        "maxLength": 80,
        "type": "string"
      },
      "businessAddress": {
        "items": {
          "format": "uuid",
          "type": "string"
        },
        "type": "array"
      }
    },
    "type": "object",
    "required": [
      "businessClassification",
      "businessType",
      "businessName",
      "ein",
      "businessAddress"
    ]
  },
  "CorporationRecord": {
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
          "Corporation"
        ],
        "type": "string"
      },
      "corporationID": {
        "format": "uuid",
        "type": "string"
      },
      "businessClassification": {
        "maxLength": 80,
        "type": "string"
      },
      "businessType": {
        "maxLength": 80,
        "type": "string"
      },
      "businessName": {
        "maxLength": 80,
        "type": "string"
      },
      "ein": {
        "maxLength": 80,
        "type": "string"
      },
      "businessAddress": {
        "items": {
          "format": "uuid",
          "type": "string"
        },
        "type": "array"
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
      "businessClassification",
      "businessType",
      "businessName",
      "ein",
      "businessAddress"
    ]
  }
}