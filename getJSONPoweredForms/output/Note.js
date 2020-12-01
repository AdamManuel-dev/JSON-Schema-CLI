
export const NoteDefintions = {
  "NotePrototype": {
    "properties": {
      "scopes": {
        "items": {
          "maxLength": 80,
          "type": "string"
        },
        "type": "array"
      },
      "records": {
        "items": {
          "format": "uuid",
          "type": "string"
        },
        "type": "array"
      },
      "tabs": {
        "items": {
          "maxLength": 80,
          "type": "string"
        },
        "type": "array"
      }
    },
    "type": "object",
    "required": [
      "scopes",
      "records",
      "tabs"
    ]
  },
  "NoteRecord": {
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
          "Permission"
        ],
        "type": "string"
      },
      "group": {
        "format": "uuid",
        "type": "string"
      },
      "scopes": {
        "items": {
          "maxLength": 80,
          "type": "string"
        },
        "type": "array"
      },
      "records": {
        "items": {
          "format": "uuid",
          "type": "string"
        },
        "type": "array"
      },
      "tabs": {
        "items": {
          "maxLength": 80,
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
      "scopes",
      "records",
      "tabs"
    ]
  }
}