
export const RoleDefintions = {
  "RolePrototype": {
    "properties": {
      "roleId": {
        "items": {
          "format": "uuid",
          "type": "string"
        },
        "type": "array"
      },
      "roleName": {
        "items": {
          "format": "uuid",
          "type": "string"
        },
        "type": "array"
      },
      "detailID": {
        "format": "uuid",
        "type": "string"
      },
      "vendorID": {
        "format": "uuid",
        "type": "string"
      }
    },
    "type": "object",
    "required": [
      "roleId",
      "roleName"
    ]
  },
  "RoleRecord": {
    "properties": {
      "id": {
        "format": "uuid",
        "type": "string"
      },
      "user": {
        "format": "uuid",
        "type": "string"
      },
      "roleId": {
        "items": {
          "format": "uuid",
          "type": "string"
        },
        "type": "array"
      },
      "roleName": {
        "items": {
          "format": "uuid",
          "type": "string"
        },
        "type": "array"
      },
      "detailID": {
        "format": "uuid",
        "type": "string"
      },
      "vendorID": {
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
      "roleId",
      "roleName"
    ]
  }
}