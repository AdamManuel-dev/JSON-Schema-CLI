
export const ProductDefintions = {
  "ProductPrototype": {
    "properties": {
      "status": {
        "enum": [
          "NEW_PRODUCT",
          "PRODUCT_MEASURED",
          "PURCHASED_PRODUCT",
          "PRODUCT_COMPLETE",
          "PRODUCT_CANCELED"
        ],
        "type": "string"
      },
      "orderId": {
        "format": "uuid",
        "type": "string"
      },
      "vendor": {
        "properties": {
          "name": {
            "type": "string"
          },
          "id": {
            "format": "uuid",
            "type": "string"
          }
        },
        "type": "object",
        "required": [
          "name"
        ]
      },
      "productType": {
        "type": "string"
      },
      "category": {
        "type": "string"
      },
      "totals": {
        "items": {
          "type": "number"
        },
        "type": "array"
      }
    },
    "type": "object",
    "required": [
      "status",
      "vendor",
      "productType",
      "category",
      "totals"
    ]
  },
  "ProductRecord": {
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
          "Product"
        ],
        "type": "string"
      },
      "status": {
        "enum": [
          "NEW_PRODUCT",
          "PRODUCT_MEASURED",
          "PURCHASED_PRODUCT",
          "PRODUCT_COMPLETE",
          "PRODUCT_CANCELED"
        ],
        "type": "string"
      },
      "orderId": {
        "format": "uuid",
        "type": "string"
      },
      "vendor": {
        "properties": {
          "name": {
            "type": "string"
          },
          "id": {
            "format": "uuid",
            "type": "string"
          }
        },
        "type": "object",
        "required": [
          "name"
        ]
      },
      "productType": {
        "type": "string"
      },
      "category": {
        "type": "string"
      },
      "totals": {
        "items": {
          "type": "number"
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
      "vendor",
      "productType",
      "category",
      "totals"
    ]
  }
}