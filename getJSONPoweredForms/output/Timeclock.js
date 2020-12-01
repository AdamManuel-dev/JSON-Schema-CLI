
export const TimeclockDefintions = {
  "TimeclockPrototype": {
    "properties": {
      "status": {
        "enum": [
          "OFF_CLOCK",
          "ON_CLOCK",
          "VACATION",
          "SICK_LEAVE",
          "START_BREAK",
          "END_BREAK"
        ],
        "type": "string"
      },
      "date": {
        "minimum": 10957,
        "maximum": 24855,
        "type": "integer"
      }
    },
    "type": "object",
    "required": [
      "status",
      "date"
    ]
  },
  "TimeclockRecord": {
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
          "Timeclock"
        ],
        "type": "string"
      },
      "status": {
        "enum": [
          "OFF_CLOCK",
          "ON_CLOCK",
          "VACATION",
          "SICK_LEAVE",
          "START_BREAK",
          "END_BREAK"
        ],
        "type": "string"
      },
      "date": {
        "minimum": 10957,
        "maximum": 24855,
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
      "date"
    ]
  }
}