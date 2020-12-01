
export const ResidenceDefintions = {
  "ResidencePrototype": {
    "properties": {
      "streetAddress": {
        "maxLength": 80,
        "type": "string"
      },
      "city": {
        "maxLength": 80,
        "type": "string"
      },
      "zip": {
        "maxLength": 80,
        "type": "string"
      },
      "state": {
        "maxLength": 80,
        "type": "string"
      },
      "address": {
        "properties": {
          "streetNumber": {
            "maxLength": 80,
            "type": "string"
          },
          "streetName": {
            "maxLength": 80,
            "type": "string"
          },
          "municipality": {
            "maxLength": 80,
            "type": "string"
          },
          "countrySecondarySubdivision": {
            "maxLength": 80,
            "type": "string"
          },
          "countryTertiarySubdivision": {
            "maxLength": 80,
            "type": "string"
          },
          "countrySubdivision": {
            "maxLength": 2,
            "type": "string"
          },
          "countrySubdivisionName": {
            "maxLength": 80,
            "type": "string"
          },
          "postalCode": {
            "maxLength": 5,
            "type": "string"
          },
          "extendedPostalCode": {
            "maxLength": 9,
            "type": "string"
          },
          "countryCode": {
            "maxLength": 4,
            "type": "string"
          },
          "country": {
            "maxLength": 80,
            "type": "string"
          },
          "countryCodeISO3": {
            "maxLength": 5,
            "type": "string"
          },
          "freeformAddress": {
            "maxLength": 100,
            "type": "string"
          },
          "localName": {
            "maxLength": 80,
            "type": "string"
          }
        },
        "type": "object",
        "required": [
          "streetNumber",
          "streetName",
          "municipality",
          "countrySecondarySubdivision",
          "countryTertiarySubdivision",
          "countrySubdivision",
          "countrySubdivisionName",
          "postalCode",
          "extendedPostalCode",
          "countryCode",
          "country",
          "countryCodeISO3",
          "freeformAddress",
          "localName"
        ]
      },
      "location": {
        "properties": {
          "lat": {
            "type": "number"
          },
          "lon": {
            "type": "number"
          }
        },
        "type": "object",
        "required": [
          "lat",
          "lon"
        ]
      }
    },
    "type": "object",
    "required": [
      "streetAddress",
      "city",
      "zip",
      "state",
      "address",
      "location"
    ]
  },
  "ResidenceRecord": {
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
          "Address"
        ],
        "type": "string"
      },
      "streetAddress": {
        "maxLength": 80,
        "type": "string"
      },
      "city": {
        "maxLength": 80,
        "type": "string"
      },
      "zip": {
        "maxLength": 80,
        "type": "string"
      },
      "state": {
        "maxLength": 80,
        "type": "string"
      },
      "address": {
        "properties": {
          "streetNumber": {
            "maxLength": 80,
            "type": "string"
          },
          "streetName": {
            "maxLength": 80,
            "type": "string"
          },
          "municipality": {
            "maxLength": 80,
            "type": "string"
          },
          "countrySecondarySubdivision": {
            "maxLength": 80,
            "type": "string"
          },
          "countryTertiarySubdivision": {
            "maxLength": 80,
            "type": "string"
          },
          "countrySubdivision": {
            "maxLength": 2,
            "type": "string"
          },
          "countrySubdivisionName": {
            "maxLength": 80,
            "type": "string"
          },
          "postalCode": {
            "maxLength": 5,
            "type": "string"
          },
          "extendedPostalCode": {
            "maxLength": 9,
            "type": "string"
          },
          "countryCode": {
            "maxLength": 4,
            "type": "string"
          },
          "country": {
            "maxLength": 80,
            "type": "string"
          },
          "countryCodeISO3": {
            "maxLength": 5,
            "type": "string"
          },
          "freeformAddress": {
            "maxLength": 100,
            "type": "string"
          },
          "localName": {
            "maxLength": 80,
            "type": "string"
          }
        },
        "type": "object",
        "required": [
          "streetNumber",
          "streetName",
          "municipality",
          "countrySecondarySubdivision",
          "countryTertiarySubdivision",
          "countrySubdivision",
          "countrySubdivisionName",
          "postalCode",
          "extendedPostalCode",
          "countryCode",
          "country",
          "countryCodeISO3",
          "freeformAddress",
          "localName"
        ]
      },
      "location": {
        "properties": {
          "lat": {
            "type": "number"
          },
          "lon": {
            "type": "number"
          }
        },
        "type": "object",
        "required": [
          "lat",
          "lon"
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
      "type",
      "streetAddress",
      "city",
      "zip",
      "state",
      "address",
      "location"
    ]
  }
}