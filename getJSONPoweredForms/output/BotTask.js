
export const BotTaskDefintions = {
  "BotTaskPrototype": {
    "properties": {
      "botTaskId": {
        "type": "string"
      },
      "friendlyName": {
        "type": "string"
      },
      "uniqueName": {
        "type": "string"
      },
      "actions": {
        "properties": {
          "actions": {
            "items": {
              "properties": {
                "say": {
                  "type": "string"
                }
              },
              "type": "object",
              "required": [
                "say"
              ]
            },
            "type": "array"
          }
        },
        "type": "object",
        "required": [
          "actions"
        ]
      },
      "actionObject": {
        "properties": {
          "actions": {
            "items": {
              "properties": {
                "say": {
                  "properties": {
                    "speech": {
                      "type": "string"
                    }
                  },
                  "type": "object",
                  "required": [
                    "speech"
                  ]
                }
              },
              "type": "object",
              "required": [
                "say"
              ]
            },
            "type": "array"
          }
        },
        "type": "object",
        "required": [
          "actions"
        ]
      },
      "botTaskPathAssistantSid": {
        "type": "string"
      }
    },
    "type": "object",
    "required": [
      "botTaskId",
      "friendlyName",
      "uniqueName",
      "actions",
      "actionObject"
    ]
  },
  "BotTaskRecord": {
    "properties": {
      "id": {
        "format": "uuid",
        "type": "string"
      },
      "user": {
        "format": "uuid",
        "type": "string"
      },
      "botTaskId": {
        "type": "string"
      },
      "friendlyName": {
        "type": "string"
      },
      "uniqueName": {
        "type": "string"
      },
      "actions": {
        "properties": {
          "actions": {
            "items": {
              "properties": {
                "say": {
                  "type": "string"
                }
              },
              "type": "object",
              "required": [
                "say"
              ]
            },
            "type": "array"
          }
        },
        "type": "object",
        "required": [
          "actions"
        ]
      },
      "type": {
        "enum": [
          "BotTask"
        ],
        "type": "string"
      },
      "actionObject": {
        "properties": {
          "actions": {
            "items": {
              "properties": {
                "say": {
                  "properties": {
                    "speech": {
                      "type": "string"
                    }
                  },
                  "type": "object",
                  "required": [
                    "speech"
                  ]
                }
              },
              "type": "object",
              "required": [
                "say"
              ]
            },
            "type": "array"
          }
        },
        "type": "object",
        "required": [
          "actions"
        ]
      },
      "botTaskPathAssistantSid": {
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
      "botTaskId",
      "friendlyName",
      "uniqueName",
      "actions",
      "type",
      "actionObject"
    ]
  }
}