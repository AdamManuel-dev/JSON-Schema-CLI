
export const TwillioDefintions = {
  "TwillioPrototype": {
    "properties": {
      "messageSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "recordingSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "ApplicationSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "TwillioURL": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "isoCountryCode": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "CallSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "ConferenceSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "IncomingPhoneNumberSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "OutgoingCallerIdSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      }
    },
    "type": "object",
    "required": [
      "messageSid",
      "recordingSid",
      "ApplicationSid",
      "TwillioURL",
      "isoCountryCode",
      "CallSid",
      "ConferenceSid",
      "IncomingPhoneNumberSid",
      "OutgoingCallerIdSid"
    ]
  },
  "TwillioRecord": {
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
          "Twillio"
        ],
        "type": "string"
      },
      "messageSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "recordingSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "ApplicationSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "TwillioURL": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "isoCountryCode": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "CallSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "ConferenceSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "IncomingPhoneNumberSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "OutgoingCallerIdSid": {
        "items": {
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
      "messageSid",
      "recordingSid",
      "ApplicationSid",
      "TwillioURL",
      "isoCountryCode",
      "CallSid",
      "ConferenceSid",
      "IncomingPhoneNumberSid",
      "OutgoingCallerIdSid"
    ]
  }
}