
export const ScorecardDefintions = {
  "ScorecardPrototype": {
    "properties": {
      "title": {
        "maxLength": 80,
        "type": "string"
      },
      "description": {
        "maxLength": 200,
        "type": "string"
      },
      "scores": {
        "items": {
          "type": "number"
        },
        "type": "array"
      },
      "scorecardType": {
        "enum": [
          "GROUP",
          "INDIVIDUAL"
        ],
        "type": "string"
      },
      "series": {
        "enum": [
          "SINGLE",
          "TIME"
        ],
        "type": "string"
      },
      "display": {
        "enum": [
          "AREA_CHART",
          "BAR_CHART",
          "COMPLEX_GAUGE",
          "GROUPED_BAR_CHART",
          "HEAT_MAP",
          "LINE_CHART",
          "NUMBER_CARD",
          "PIE_CHART",
          "POLAR_CHART"
        ],
        "type": "string"
      }
    },
    "type": "object",
    "required": [
      "title",
      "description",
      "scores",
      "scorecardType",
      "series",
      "display"
    ]
  },
  "ScorecardRecord": {
    "properties": {
      "id": {
        "format": "uuid",
        "type": "string"
      },
      "user": {
        "format": "uuid",
        "type": "string"
      },
      "title": {
        "maxLength": 80,
        "type": "string"
      },
      "description": {
        "maxLength": 200,
        "type": "string"
      },
      "scores": {
        "items": {
          "type": "number"
        },
        "type": "array"
      },
      "scorecardType": {
        "enum": [
          "GROUP",
          "INDIVIDUAL"
        ],
        "type": "string"
      },
      "series": {
        "enum": [
          "SINGLE",
          "TIME"
        ],
        "type": "string"
      },
      "display": {
        "enum": [
          "AREA_CHART",
          "BAR_CHART",
          "COMPLEX_GAUGE",
          "GROUPED_BAR_CHART",
          "HEAT_MAP",
          "LINE_CHART",
          "NUMBER_CARD",
          "PIE_CHART",
          "POLAR_CHART"
        ],
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
      "title",
      "description",
      "scores",
      "scorecardType",
      "series",
      "display"
    ]
  }
}