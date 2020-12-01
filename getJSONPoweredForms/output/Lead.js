
export const LeadDefintions = {
  "LeadPrototype": {
    "properties": {
      "status": {
        "enum": [
          "AVOID",
          "INTEREST",
          "NEW",
          "CUSTOMER",
          "RECYCLE",
          "PITCHING",
          "ORDER",
          "JOB"
        ],
        "type": "string"
      },
      "ownerType": {
        "enum": [
          "Single",
          "Dual"
        ],
        "type": "string"
      },
      "title": {
        "enum": [
          "Mr.",
          "Mrs."
        ],
        "type": "string"
      },
      "firstName": {
        "maxLength": 80,
        "type": "string"
      },
      "lastName": {
        "maxLength": 80,
        "type": "string"
      },
      "title_2": {
        "enum": [
          "Mr.",
          "Mrs."
        ],
        "type": "string"
      },
      "firstName_2": {
        "maxLength": 80,
        "minLength": 0,
        "type": "string"
      },
      "lastName_2": {
        "type": "string"
      },
      "emailAddress": {
        "format": "email",
        "type": "string"
      },
      "primaryPhone": {
        "pattern": "\\d\\(\\d{3}\\)\\d{3}-\\d{4}",
        "type": "string"
      },
      "primaryPhoneType": {
        "enum": [
          "Cell",
          "Work",
          "Home",
          "Fax"
        ],
        "type": "string"
      },
      "secondaryPhone": {
        "pattern": "\\d\\(\\d{3}\\)\\d{3}-\\d{4}",
        "type": "string"
      },
      "secondaryPhoneType": {
        "enum": [
          "Cell",
          "Work",
          "Home",
          "Fax"
        ],
        "type": "string"
      },
      "residence": {
        "format": "uuid",
        "type": "string"
      },
      "additionalEmails": {
        "items": {
          "format": "email",
          "type": "string"
        },
        "type": "array"
      },
      "additionalPhones": {
        "items": {
          "pattern": "\\d\\(\\d{3}\\)\\d{3}-\\d{4}",
          "type": "string"
        },
        "type": "array"
      },
      "leadSource": {
        "items": {
          "type": "string"
        },
        "type": "array"
      }
    },
    "type": "object",
    "required": [
      "status",
      "ownerType",
      "title",
      "firstName",
      "lastName",
      "emailAddress",
      "primaryPhoneType",
      "additionalEmails",
      "additionalPhones",
      "leadSource"
    ]
  },
  "LeadRecord": {
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
          "Lead"
        ],
        "type": "string"
      },
      "status": {
        "enum": [
          "AVOID",
          "INTEREST",
          "NEW",
          "CUSTOMER",
          "RECYCLE",
          "PITCHING",
          "ORDER",
          "JOB"
        ],
        "type": "string"
      },
      "ownerType": {
        "enum": [
          "Single",
          "Dual"
        ],
        "type": "string"
      },
      "title": {
        "enum": [
          "Mr.",
          "Mrs."
        ],
        "type": "string"
      },
      "firstName": {
        "maxLength": 80,
        "type": "string"
      },
      "lastName": {
        "maxLength": 80,
        "type": "string"
      },
      "title_2": {
        "enum": [
          "Mr.",
          "Mrs."
        ],
        "type": "string"
      },
      "firstName_2": {
        "maxLength": 80,
        "minLength": 0,
        "type": "string"
      },
      "lastName_2": {
        "type": "string"
      },
      "emailAddress": {
        "format": "email",
        "type": "string"
      },
      "primaryPhone": {
        "pattern": "\\d\\(\\d{3}\\)\\d{3}-\\d{4}",
        "type": "string"
      },
      "primaryPhoneType": {
        "enum": [
          "Cell",
          "Work",
          "Home",
          "Fax"
        ],
        "type": "string"
      },
      "secondaryPhone": {
        "pattern": "\\d\\(\\d{3}\\)\\d{3}-\\d{4}",
        "type": "string"
      },
      "secondaryPhoneType": {
        "enum": [
          "Cell",
          "Work",
          "Home",
          "Fax"
        ],
        "type": "string"
      },
      "residence": {
        "format": "uuid",
        "type": "string"
      },
      "additionalEmails": {
        "items": {
          "format": "email",
          "type": "string"
        },
        "type": "array"
      },
      "additionalPhones": {
        "items": {
          "pattern": "\\d\\(\\d{3}\\)\\d{3}-\\d{4}",
          "type": "string"
        },
        "type": "array"
      },
      "leadSource": {
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
      "status",
      "ownerType",
      "title",
      "firstName",
      "lastName",
      "emailAddress",
      "primaryPhoneType",
      "additionalEmails",
      "additionalPhones",
      "leadSource"
    ]
  }
}