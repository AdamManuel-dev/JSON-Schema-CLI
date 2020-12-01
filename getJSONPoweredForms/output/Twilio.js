
export const TwilioDefintions = {
  "TwilioPrototype": {
    "properties": {
      "isoCountryCode": {
        "type": "string"
      },
      "TwillioURL": {
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
      "recordingSid": {
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
      "ConferenceSid": {
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
      "messageSid": {
        "items": {
          "type": "string"
        },
        "type": "array"
      }
    },
    "type": "object",
    "required": [
      "isoCountryCode",
      "ApplicationSid",
      "CallSid"
    ]
  },
  "TwilioRecord": {
    "properties": {
      "id": {
        "format": "uuid",
        "type": "string"
      },
      "user": {
        "format": "uuid",
        "type": "string"
      },
      "isoCountryCode": {
        "type": "string"
      },
      "TwillioURL": {
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
      "recordingSid": {
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
      "ConferenceSid": {
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
      "messageSid": {
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
      "isoCountryCode",
      "ApplicationSid",
      "CallSid"
    ]
  }
}