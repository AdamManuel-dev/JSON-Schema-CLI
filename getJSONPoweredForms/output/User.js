
export const UserDefintions = {
  "UserPrototype": {
    "properties": {
      "faceListId": {
        "format": "uuid",
        "type": "string"
      },
      "gender": {
        "maxLength": 80,
        "type": "string"
      },
      "companyId": {
        "format": "uuid",
        "type": "string"
      },
      "verified": {
        "type": "boolean"
      },
      "firstName": {
        "maxLength": 80,
        "type": "string"
      },
      "lastName": {
        "maxLength": 80,
        "type": "string"
      },
      "phoneNumber": {
        "pattern": "\\d\\(\\d{3}\\)\\d{3}-\\d{4}",
        "type": "string"
      },
      "dateOfBirth": {
        "minimum": 18,
        "maximum": 100,
        "type": "integer"
      },
      "companyTitle": {
        "maxLength": 80,
        "type": "string"
      },
      "ipAddress": {
        "maxLength": 80,
        "type": "string"
      },
      "userType": {
        "maxLength": 80,
        "type": "string"
      },
      "email": {
        "format": "email",
        "type": "string"
      },
      "ssn": {
        "maxLength": 80,
        "type": "string"
      },
      "permissionId": {
        "format": "uuid",
        "type": "string"
      },
      "theming": {
        "properties": {
          "type": {
            "enum": [
              "UserSettings"
            ],
            "type": "string"
          },
          "productIDs": {
            "items": {
              "format": "uuid",
              "type": "string"
            },
            "type": "array"
          },
          "darkmode": {
            "type": "boolean"
          }
        },
        "type": "object",
        "required": [
          "darkmode"
        ]
      },
      "twillioId": {
        "format": "uuid",
        "type": "string"
      },
      "intuitId": {
        "format": "uuid",
        "type": "string"
      },
      "payrollId": {
        "format": "uuid",
        "type": "string"
      },
      "contractId": {
        "format": "uuid",
        "type": "string"
      }
    },
    "type": "object",
    "required": [
      "gender",
      "verified",
      "firstName",
      "lastName",
      "dateOfBirth",
      "userType",
      "email",
      "theming"
    ]
  },
  "UserRecord": {
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
          "User"
        ],
        "type": "string"
      },
      "faceListId": {
        "format": "uuid",
        "type": "string"
      },
      "gender": {
        "maxLength": 80,
        "type": "string"
      },
      "companyId": {
        "format": "uuid",
        "type": "string"
      },
      "verified": {
        "type": "boolean"
      },
      "firstName": {
        "maxLength": 80,
        "type": "string"
      },
      "lastName": {
        "maxLength": 80,
        "type": "string"
      },
      "phoneNumber": {
        "pattern": "\\d\\(\\d{3}\\)\\d{3}-\\d{4}",
        "type": "string"
      },
      "dateOfBirth": {
        "minimum": 18,
        "maximum": 100,
        "type": "integer"
      },
      "companyTitle": {
        "maxLength": 80,
        "type": "string"
      },
      "ipAddress": {
        "maxLength": 80,
        "type": "string"
      },
      "group": {
        "maxLength": 80,
        "type": "string"
      },
      "userType": {
        "maxLength": 80,
        "type": "string"
      },
      "email": {
        "format": "email",
        "type": "string"
      },
      "ssn": {
        "maxLength": 80,
        "type": "string"
      },
      "permissionId": {
        "format": "uuid",
        "type": "string"
      },
      "theming": {
        "properties": {
          "type": {
            "enum": [
              "UserSettings"
            ],
            "type": "string"
          },
          "productIDs": {
            "items": {
              "format": "uuid",
              "type": "string"
            },
            "type": "array"
          },
          "darkmode": {
            "type": "boolean"
          }
        },
        "type": "object",
        "required": [
          "darkmode"
        ]
      },
      "twillioId": {
        "format": "uuid",
        "type": "string"
      },
      "intuitId": {
        "format": "uuid",
        "type": "string"
      },
      "payrollId": {
        "format": "uuid",
        "type": "string"
      },
      "contractId": {
        "format": "uuid",
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
      "gender",
      "verified",
      "firstName",
      "lastName",
      "dateOfBirth",
      "group",
      "userType",
      "email",
      "theming"
    ]
  }
}