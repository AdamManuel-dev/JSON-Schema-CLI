
export const MessageDefintions = {
  "MessagePrototype": {
    "properties": {
      "status": {
        "enum": [
          "New",
          "Draft",
          "Viewed",
          "Archived"
        ],
        "type": "string"
      },
      "to": {
        "type": "string"
      },
      "sendType": {
        "enum": [
          "Group",
          "User"
        ],
        "type": "string"
      },
      "message": {
        "type": "string"
      },
      "sentAt": {
        "minimum": 946684800,
        "maximum": 2147483646,
        "type": "integer"
      },
      "seenAt": {
        "minimum": 946684800,
        "maximum": 2147483646,
        "type": "integer"
      }
    },
    "type": "object",
    "required": [
      "status",
      "to",
      "sendType",
      "message"
    ]
  },
  "MessageRecord": {
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
          "Message"
        ],
        "type": "string"
      },
      "status": {
        "enum": [
          "New",
          "Draft",
          "Viewed",
          "Archived"
        ],
        "type": "string"
      },
      "to": {
        "type": "string"
      },
      "sendType": {
        "enum": [
          "Group",
          "User"
        ],
        "type": "string"
      },
      "message": {
        "type": "string"
      },
      "sentAt": {
        "minimum": 946684800,
        "maximum": 2147483646,
        "type": "integer"
      },
      "seenAt": {
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
      "to",
      "sendType",
      "message"
    ]
  }
}