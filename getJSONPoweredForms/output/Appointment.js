
export const AppointmentDefintions = {
  "AppointmentPrototype": {
    "properties": {
      "appointmentTime": {
        "maxLength": 15,
        "type": "string"
      },
      "appointmentType": {
        "enum": [
          "Windows/Door",
          "Siding/Soffit-Fascia",
          "Roof",
          "Fence",
          "Deck",
          "Bath",
          "Basement",
          "Kitchen"
        ],
        "type": "string"
      },
      "date": {
        "maximum": 50,
        "type": "number"
      },
      "status": {
        "enum": [
          "NEW",
          "TO_CONFIRM",
          "COULD_NOT_REACH",
          "CONFIRMED",
          "UNASSIGNED",
          "CALL_CANCEL",
          "EXTRA",
          "ASSIGNED",
          "ONE_LEG",
          "NO_SHOW",
          "SALE",
          "REP_TIE",
          "PITCH_MISS",
          "BLOWOUT",
          "RESCHEDULE",
          "REHASH"
        ],
        "type": "string"
      },
      "lead": {
        "format": "uuid",
        "type": "string"
      },
      "stepNumber": {
        "type": "integer"
      },
      "notes": {
        "items": {
          "format": "uuid",
          "type": "string"
        },
        "type": "array"
      }
    },
    "type": "object",
    "required": [
      "appointmentTime",
      "appointmentType",
      "date",
      "status"
    ]
  },
  "AppointmentRecord": {
    "properties": {
      "id": {
        "format": "uuid",
        "type": "string"
      },
      "user": {
        "format": "uuid",
        "type": "string"
      },
      "appointmentTime": {
        "maxLength": 15,
        "type": "string"
      },
      "type": {
        "enum": [
          "Appointment"
        ],
        "type": "string"
      },
      "appointmentType": {
        "enum": [
          "Windows/Door",
          "Siding/Soffit-Fascia",
          "Roof",
          "Fence",
          "Deck",
          "Bath",
          "Basement",
          "Kitchen"
        ],
        "type": "string"
      },
      "date": {
        "maximum": 50,
        "type": "number"
      },
      "status": {
        "enum": [
          "NEW",
          "TO_CONFIRM",
          "COULD_NOT_REACH",
          "CONFIRMED",
          "UNASSIGNED",
          "CALL_CANCEL",
          "EXTRA",
          "ASSIGNED",
          "ONE_LEG",
          "NO_SHOW",
          "SALE",
          "REP_TIE",
          "PITCH_MISS",
          "BLOWOUT",
          "RESCHEDULE",
          "REHASH"
        ],
        "type": "string"
      },
      "lead": {
        "format": "uuid",
        "type": "string"
      },
      "stepNumber": {
        "type": "integer"
      },
      "notes": {
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
      "appointmentTime",
      "type",
      "appointmentType",
      "date",
      "status"
    ]
  }
}