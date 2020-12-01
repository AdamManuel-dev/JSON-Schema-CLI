
export const TimeoffDefintions = {
  "TimeoffPrototype": {
    "properties": {
      "status": {
        "enum": [
          "PENDING",
          "ACCEPTED",
          "REJECTED"
        ],
        "type": "string"
      },
      "department": {
        "enum": [
          "Finance",
          "Marketing",
          "Production",
          "Sales"
        ],
        "type": "string"
      },
      "requestType": {
        "enum": [
          "oneTimeRequest",
          "recurringRequest"
        ],
        "type": "string"
      },
      "reason": {
        "enum": [
          "Vacation",
          "Personal Leave",
          "Funeral/Bereavement",
          "Jury Duty",
          "Family Reasons",
          "Medical Leave",
          "To Vote",
          "Sales (90 days)",
          "custom"
        ],
        "type": "string"
      },
      "customReason": {
        "maxLength": 80,
        "type": "string"
      },
      "oneTimeRequest": {
        "minimum": 946684800,
        "maximum": 2147483646,
        "type": "integer"
      },
      "workDays": {
        "enum": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "type": "string"
      },
      "recurringRequest": {
        "minimum": 946684800,
        "maximum": 2147483646,
        "type": "integer"
      },
      "repeatFor": {
        "maxLength": 80,
        "type": "string"
      },
      "halfDayTime": {
        "maxLength": 80,
        "type": "string"
      },
      "halfDayTime_2": {
        "maxLength": 80,
        "type": "string"
      },
      "fullDay": {
        "maxLength": 80,
        "type": "string"
      }
    },
    "type": "object",
    "required": [
      "status",
      "department",
      "requestType",
      "reason",
      "customReason",
      "workDays",
      "repeatFor",
      "halfDayTime",
      "halfDayTime_2",
      "fullDay"
    ]
  },
  "TimeoffRecord": {
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
          "Timeoff"
        ],
        "type": "string"
      },
      "status": {
        "enum": [
          "PENDING",
          "ACCEPTED",
          "REJECTED"
        ],
        "type": "string"
      },
      "department": {
        "enum": [
          "Finance",
          "Marketing",
          "Production",
          "Sales"
        ],
        "type": "string"
      },
      "requestType": {
        "enum": [
          "oneTimeRequest",
          "recurringRequest"
        ],
        "type": "string"
      },
      "reason": {
        "enum": [
          "Vacation",
          "Personal Leave",
          "Funeral/Bereavement",
          "Jury Duty",
          "Family Reasons",
          "Medical Leave",
          "To Vote",
          "Sales (90 days)",
          "custom"
        ],
        "type": "string"
      },
      "customReason": {
        "maxLength": 80,
        "type": "string"
      },
      "oneTimeRequest": {
        "minimum": 946684800,
        "maximum": 2147483646,
        "type": "integer"
      },
      "workDays": {
        "enum": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "type": "string"
      },
      "recurringRequest": {
        "minimum": 946684800,
        "maximum": 2147483646,
        "type": "integer"
      },
      "repeatFor": {
        "maxLength": 80,
        "type": "string"
      },
      "halfDayTime": {
        "maxLength": 80,
        "type": "string"
      },
      "halfDayTime_2": {
        "maxLength": 80,
        "type": "string"
      },
      "fullDay": {
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
      "status",
      "department",
      "requestType",
      "reason",
      "customReason",
      "workDays",
      "repeatFor",
      "halfDayTime",
      "halfDayTime_2",
      "fullDay"
    ]
  }
}