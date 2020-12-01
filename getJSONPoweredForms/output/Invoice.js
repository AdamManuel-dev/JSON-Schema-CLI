
export const InvoiceDefintions = {
  "InvoicePrototype": {
    "properties": {
      "salesID": {
        "format": "uuid",
        "type": "string"
      },
      "Description": {
        "maxLength": 80,
        "type": "string"
      },
      "Amount": {
        "maxLength": 80,
        "type": "string"
      },
      "DetailType": {
        "maxLength": 80,
        "type": "string"
      },
      "UnitPrice": {
        "maxLength": 80,
        "type": "string"
      },
      "Qty": {
        "maxLength": 80,
        "type": "string"
      },
      "TaxCodeRef": {
        "maxLength": 80,
        "type": "string"
      },
      "salesItemLineDetail": {
        "maxLength": 80,
        "type": "string"
      }
    },
    "type": "object",
    "required": [
      "Description",
      "Amount",
      "DetailType",
      "UnitPrice",
      "Qty",
      "TaxCodeRef",
      "salesItemLineDetail"
    ]
  },
  "InvoiceRecord": {
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
          "Sales"
        ],
        "type": "string"
      },
      "salesID": {
        "format": "uuid",
        "type": "string"
      },
      "Description": {
        "maxLength": 80,
        "type": "string"
      },
      "Amount": {
        "maxLength": 80,
        "type": "string"
      },
      "DetailType": {
        "maxLength": 80,
        "type": "string"
      },
      "UnitPrice": {
        "maxLength": 80,
        "type": "string"
      },
      "Qty": {
        "maxLength": 80,
        "type": "string"
      },
      "TaxCodeRef": {
        "maxLength": 80,
        "type": "string"
      },
      "salesItemLineDetail": {
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
      "Description",
      "Amount",
      "DetailType",
      "UnitPrice",
      "Qty",
      "TaxCodeRef",
      "salesItemLineDetail"
    ]
  }
}