
export const OrderDefintions = {
  "OrderPrototype": {
    "properties": {
      "status": {
        "enum": [
          "saleConfirmed",
          "signedContract",
          "contractApprove",
          "addProduction",
          "orderCancel",
          "measureProduct",
          "addQuickbooks",
          "financeRejected",
          "deadLead",
          "permit",
          "lienWaver",
          "digright",
          "executeOrder",
          "intuitBookCondfirmation",
          "deliverMaterial",
          "orderProgress",
          "problemOrder",
          "orderCompleted",
          "customerSurver",
          "recycle"
        ],
        "type": "string"
      },
      "legal": {
        "properties": {
          "permit": {
            "properties": {
              "exists": {
                "type": "boolean"
              },
              "path": {
                "type": "string"
              }
            },
            "type": "object",
            "required": [
              "exists"
            ]
          },
          "signature": {
            "properties": {
              "exists": {
                "type": "boolean"
              },
              "path": {
                "type": "string"
              }
            },
            "type": "object",
            "required": [
              "exists"
            ]
          },
          "contract": {
            "properties": {
              "exists": {
                "type": "boolean"
              },
              "path": {
                "type": "string"
              }
            },
            "type": "object",
            "required": [
              "exists"
            ]
          },
          "lienWaver": {
            "properties": {
              "exists": {
                "type": "boolean"
              },
              "path": {
                "type": "string"
              }
            },
            "type": "object",
            "required": [
              "exists"
            ]
          },
          "digright": {
            "properties": {
              "exists": {
                "type": "boolean"
              },
              "path": {
                "type": "string"
              }
            },
            "type": "object",
            "required": [
              "exists"
            ]
          }
        },
        "type": "object",
        "required": [
          "permit",
          "signature",
          "contract",
          "lienWaver",
          "digright"
        ]
      },
      "sales": {
        "properties": {
          "commission": {
            "type": "number"
          },
          "users": {
            "items": {
              "format": "uuid",
              "type": "string"
            },
            "type": "array"
          }
        },
        "type": "object",
        "required": [
          "commission",
          "users"
        ]
      },
      "measurementTotals": {
        "items": {
          "properties": {
            "unitsPerSection": {
              "type": "number"
            },
            "unit": {
              "type": "number"
            },
            "extras": {
              "type": "object"
            }
          },
          "type": "object",
          "required": [
            "unitsPerSection",
            "unit",
            "extras"
          ]
        },
        "type": "array"
      },
      "materialTotals": {
        "items": {
          "properties": {
            "unitsPerSection": {
              "type": "number"
            },
            "unit": {
              "type": "number"
            },
            "costPerUnit": {
              "type": "number"
            },
            "total": {
              "type": "number"
            }
          },
          "type": "object",
          "required": [
            "unitsPerSection",
            "unit",
            "costPerUnit",
            "total"
          ]
        },
        "type": "array"
      },
      "financialTotals": {
        "items": {
          "properties": {
            "perSection": {
              "type": "number"
            },
            "extraPrice": {
              "type": "number"
            },
            "sectionItem": {
              "type": "number"
            },
            "total": {
              "type": "number"
            }
          },
          "type": "object",
          "required": [
            "perSection",
            "extraPrice",
            "sectionItem",
            "total"
          ]
        },
        "type": "array"
      },
      "financial": {
        "enum": [
          "ACCEPTED",
          "REJECTED"
        ],
        "type": "string"
      },
      "alive": {
        "enum": [
          "DEAD",
          "RECYCLE",
          "ACTIVE"
        ],
        "type": "string"
      }
    },
    "type": "object",
    "required": [
      "status",
      "legal",
      "sales",
      "measurementTotals",
      "materialTotals",
      "financialTotals",
      "financial",
      "alive"
    ]
  },
  "OrderRecord": {
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
          "Order"
        ],
        "type": "string"
      },
      "status": {
        "enum": [
          "saleConfirmed",
          "signedContract",
          "contractApprove",
          "addProduction",
          "orderCancel",
          "measureProduct",
          "addQuickbooks",
          "financeRejected",
          "deadLead",
          "permit",
          "lienWaver",
          "digright",
          "executeOrder",
          "intuitBookCondfirmation",
          "deliverMaterial",
          "orderProgress",
          "problemOrder",
          "orderCompleted",
          "customerSurver",
          "recycle"
        ],
        "type": "string"
      },
      "legal": {
        "properties": {
          "permit": {
            "properties": {
              "exists": {
                "type": "boolean"
              },
              "path": {
                "type": "string"
              }
            },
            "type": "object",
            "required": [
              "exists"
            ]
          },
          "signature": {
            "properties": {
              "exists": {
                "type": "boolean"
              },
              "path": {
                "type": "string"
              }
            },
            "type": "object",
            "required": [
              "exists"
            ]
          },
          "contract": {
            "properties": {
              "exists": {
                "type": "boolean"
              },
              "path": {
                "type": "string"
              }
            },
            "type": "object",
            "required": [
              "exists"
            ]
          },
          "lienWaver": {
            "properties": {
              "exists": {
                "type": "boolean"
              },
              "path": {
                "type": "string"
              }
            },
            "type": "object",
            "required": [
              "exists"
            ]
          },
          "digright": {
            "properties": {
              "exists": {
                "type": "boolean"
              },
              "path": {
                "type": "string"
              }
            },
            "type": "object",
            "required": [
              "exists"
            ]
          }
        },
        "type": "object",
        "required": [
          "permit",
          "signature",
          "contract",
          "lienWaver",
          "digright"
        ]
      },
      "sales": {
        "properties": {
          "commission": {
            "type": "number"
          },
          "users": {
            "items": {
              "format": "uuid",
              "type": "string"
            },
            "type": "array"
          }
        },
        "type": "object",
        "required": [
          "commission",
          "users"
        ]
      },
      "measurementTotals": {
        "items": {
          "properties": {
            "unitsPerSection": {
              "type": "number"
            },
            "unit": {
              "type": "number"
            },
            "extras": {
              "type": "object"
            }
          },
          "type": "object",
          "required": [
            "unitsPerSection",
            "unit",
            "extras"
          ]
        },
        "type": "array"
      },
      "materialTotals": {
        "items": {
          "properties": {
            "unitsPerSection": {
              "type": "number"
            },
            "unit": {
              "type": "number"
            },
            "costPerUnit": {
              "type": "number"
            },
            "total": {
              "type": "number"
            }
          },
          "type": "object",
          "required": [
            "unitsPerSection",
            "unit",
            "costPerUnit",
            "total"
          ]
        },
        "type": "array"
      },
      "financialTotals": {
        "items": {
          "properties": {
            "perSection": {
              "type": "number"
            },
            "extraPrice": {
              "type": "number"
            },
            "sectionItem": {
              "type": "number"
            },
            "total": {
              "type": "number"
            }
          },
          "type": "object",
          "required": [
            "perSection",
            "extraPrice",
            "sectionItem",
            "total"
          ]
        },
        "type": "array"
      },
      "financial": {
        "enum": [
          "ACCEPTED",
          "REJECTED"
        ],
        "type": "string"
      },
      "alive": {
        "enum": [
          "DEAD",
          "RECYCLE",
          "ACTIVE"
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
      "type",
      "status",
      "legal",
      "sales",
      "measurementTotals",
      "materialTotals",
      "financialTotals",
      "financial",
      "alive"
    ]
  }
}