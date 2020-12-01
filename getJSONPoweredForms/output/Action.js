
export const ActionDefintions = {
  "ActionPrototype": {
    "properties": {
      "action": {
        "type": "string"
      },
      "payload": {
        "properties": {
          "appointment": {
            "type": "string"
          },
          "lead": {
            "type": "string"
          },
          "explanation": {
            "type": "string"
          }
        },
        "type": "object",
        "required": [
          "appointment",
          "lead"
        ]
      }
    },
    "type": "object",
    "required": [
      "action",
      "payload"
    ]
  },
  "ActionRecord": {
    "properties": {
      "id": {
        "format": "uuid",
        "type": "string"
      },
      "user": {
        "format": "uuid",
        "type": "string"
      },
      "action": {
        "type": "string"
      },
      "payload": {
        "properties": {
          "appointment": {
            "type": "string"
          },
          "lead": {
            "type": "string"
          },
          "explanation": {
            "type": "string"
          }
        },
        "type": "object",
        "required": [
          "appointment",
          "lead"
        ]
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
      "action",
      "payload"
    ]
  }
}