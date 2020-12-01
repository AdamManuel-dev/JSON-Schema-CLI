
export const UserLocationDefintions = {
  "UserLocationPrototype": {
    "properties": {
      "locations": {
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
      "currentArea": {
        "format": "uuid",
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
      "locations",
      "date"
    ]
  },
  "UserLocationRecord": {
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
          "UserLocation"
        ],
        "type": "string"
      },
      "locations": {
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
      "currentArea": {
        "format": "uuid",
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
      "locations",
      "date"
    ]
  }
}