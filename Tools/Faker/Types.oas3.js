module.exports = {
  /**
   *
   */
  RecordRequestDefinition: {
    type: 'object',
    title: 'Record Request Definition',
    required: ['id', 'type'],
    description:
      'This is a request to either get or delete an object. This is reused for a ',
    example: {
      type: 'User',
      id: 'recordUUID'
    },
    properties: {
      id: {
        type: 'string',
        description: 'ID of Record'
      },
      type: {
        type: 'string',
        description: 'Record Type'
      }
    }
  },
  /**
   *
   */
  Email: {
    type: 'object',
    title: 'Email Definition',
    description:
      'This is a Email. An email is a event that sends a specific email to a user or group of users.',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      user: {
        type: 'string'
      },
      status: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.',
        enum: ['DRAFT', 'SENT', 'OPENED', 'LINK_CLICKED', 'RESPONDED']
      },
      type: {
        type: 'string',
        enum: ['Email']
      },
      templateID: {
        type: 'string',
        description: 'Email Templates ID'
      },
      inputs: {
        type: 'array',
        description: 'Input Data for Template Email',
        items: {
          type: 'object'
        }
      },
      leadID: {
        type: 'string',
        description: 'Lead ID to send email to'
      },
      openTimestamp: {
        type: 'string',
        format: 'date-time',
        description: 'When was it opened'
      }
    },
    required: ['user', 'status', 'type', 'templateID', 'leadID']
  },
  /**
   *
   */
  EmailCampaign: {
    type: 'object',
    title: 'Email Campaign Definition',
    description:
      'This is a Email Campaign. An email campaign is a workflow of emails to be sent in an order and segments the lead list.',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      user: {
        type: 'string'
      },
      status: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.',
        enum: ['DRAFT', 'ACTIVE', 'ENDED', 'REMOVED', 'STOPPED']
      },
      type: {
        type: 'string',
        enum: ['EmailCampaign']
      },
      emailTemplate: {
        $ref: 'Types.oas3.json#/EmailTemplate'
      },
      filter: {
        $ref: 'Types.oas3.json#/Filter'
      },
      userList: {
        type: 'array',
        items: {
          $ref: 'Types.oas3.json#/IDReferenceObject'
        }
      }
    },
    required: ['user', 'status', 'type', 'emailTemplate']
  },
  /**
   *
   */
  Lead: {
    type: 'object',
    title: 'Lead Definition',
    description: 'Leads are Residences with Contact Info. ',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      user: {
        type: 'string'
      },
      status: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.',
        enum: [
          'CALL_CANCEL',
          'NO_SHOW',
          'BLOWOUT',
          'LEAD_RESET',
          'NEW_LEAD',
          'DEAD',
          'REDESIGN',
          'REP_TIED',
          'ADD_INTEREST',
          'RECYCLE',
          'AT_DOOR',
          'NOT_HOME',
          'ONE_LEG',
          'NOT_INTERESTED',
          'PITCH_MISS',
          'SALE',
          'NOT_BOOKED'
        ]
      },
      type: {
        type: 'string',
        enum: ['Lead']
      },
      emailAddress: {
        type: 'string'
      },
      title: {
        type: 'string'
      },
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      },
      primaryPhone: {
        type: 'string'
      },
      secondaryPhone: {
        type: 'string'
      },
      leadSources: {
        type: 'string'
      },
      _groups: {
        type: 'string'
      }
    },
    required: [
      'status',
      'type',
      'emailAddress',
      'title',
      'firstName',
      'lastName',
      'primaryPhone',
      'secondaryPhone',
      'leadSources'
    ]
  },
  /**
   *
   */
  Order: {
    type: 'object',
    title: 'Order Definition',
    description:
      'An order is a record that has the status of an installment as well as a status on the Contracts and Payment.\n\nOrders will also have all the measurements, Q&A, and Cost Estimates\n',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      user: {
        type: 'string'
      },
      status: {
        type: 'string',
        enum: [
          'NEW_ORDER',
          'ORDER_MEASURED',
          'PURCHASE_ORDER',
          'ORDER_COMPLETE',
          'ORDER_CANCELED'
        ],
        description: 'Status of the order through the worflow'
      },
      type: {
        type: 'string',
        enum: ['Order']
      },
      client: {
        type: 'string',
        description: 'Client ID reference'
      },
      users: {
        description: 'User',
        type: 'array',
        items: {
          type: 'string'
        }
      },
      groups: {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      submitTime: {
        type: 'integer'
      },
      quote: {
        type: 'object'
      },
      measurements: {
        type: 'array',
        items: {
          type: 'object'
        }
      },
      questionsAndAnswers: {
        type: 'object'
      },
      materials: {
        type: 'array',
        items: {
          type: 'object'
        }
      },
      contractors: {
        type: 'array',
        items: {
          type: 'object'
        }
      },
      notes: {
        type: 'array',
        description: 'Array',
        items: {
          type: 'string'
        }
      }
    },
    required: [
      'status',
      'type',
      'client',
      'submitTime',
      'measurements',
      'questionsAndAnswers',
      'materials',
      'contractors'
    ]
  },
  /**
   *
   */
  Product: {
    type: 'object',
    title: 'Product Definition',
    description:
      'This is a Product definition. These are the different options and selections you may do as a SalesPerson or a Production Memeber. ',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      status: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.',
        enum: ['New', 'Update', 'Active', 'Cold']
      },
      type: {
        type: 'string',
        enum: ['Product']
      },
      category: {
        type: 'string',
        description: 'Product Type'
      },
      producer: {
        type: 'string',
        description: 'Company that produces the '
      },
      forms: {
        type: 'array',
        description:
          'Where to store the data for calculations, as well as the most essentials, their Social Media account. ',
        items: {
          type: 'object',
          properties: {
            productEstimate: {
              type: 'object',
              description:
                'Salesperson form to entry in basic data and estimations'
            },
            estimatePricing: {
              description:
                'All product estimate inputs mapped to pricing values',
              type: 'object'
            },
            orderEstimate: {
              type: 'object',
              description: 'Order measurements and other factors inputs. '
            },
            productPricing: {
              description: 'Pricing for order estimate inputs',
              type: 'object'
            }
          }
        }
      },
      job: {
        type: 'array',
        description: 'All Related Job ID',
        items: {
          type: 'string'
        }
      },
      contracts: {
        type: 'array',
        description: 'All related contract Ids',
        items: {
          type: 'string'
        }
      },
      _avgEstimate: {
        type: 'string'
      },
      user: {
        type: 'string'
      }
    },
    required: [
      'status',
      'type',
      'category',
      'producer',
      'forms',
      'job',
      'contracts',
      'user'
    ]
  },
  /**
   *
   */
  Interest: {
    type: 'object',
    title: 'Interest Definition',
    description:
      'Interest is the Edge between lead and product. It is to indicate interest in the product.\n\nInterest is what the lead is interested in when they schedule an appointment.',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      user: {
        type: 'string'
      },
      status: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.',
        enum: ['New', 'Update', 'Active', 'Cold']
      },
      type: {
        type: 'string',
        enum: ['Prospect']
      },
      productInterest: {
        type: 'object'
      }
    },
    required: ['user', 'status', 'type', 'productInterest']
  },
  /**
   *
   */
  Residence: {
    type: 'object',
    title: 'Residence Definition',
    description:
      'This is a Residence. A residence is a house that is a part of the routes that Canvasers go on, but we have no personal information on them yet.',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      user: {
        type: 'string'
      },
      status: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.',
        enum: ['NO_RESPONSE', 'AVOID', 'ADDRESS_NOT_FOUND', 'LEAD', 'CUSTOMER']
      },
      type: {
        type: 'string',
        enum: ['Residence']
      },
      latlong: {
        type: 'object',
        description: 'Latitude and Longitude of the address/home',
        properties: {
          type: {
            type: 'string',
            enum: ['Point']
          },
          coordinates: {
            type: 'array',
            minItems: 2,
            items: {
              type: 'number'
            }
          }
        },
        required: ['type', 'coordinates']
      },
      StreetAddress: {
        type: 'string',
        description: '1st line Street Address of Home'
      },
      StreetAddress2: {
        type: 'string',
        description: '2nd line Street Address of Home'
      },
      City: {
        type: 'string',
        description: 'Home City'
      },
      State: {
        type: 'string',
        description: 'Home State'
      },
      Zip: {
        type: 'number',
        description: 'Home Zip'
      }
    },
    required: ['user', 'status', 'type']
  },
  /**
   *
   */
  User: {
    type: 'object',
    title: 'User Definition',
    description: 'This is a User',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      type: {
        type: 'string',
        enum: ['User']
      },
      darkmode: {
        type: 'string',
        description: 'Users DarkMode Preference',
        example: 'true'
      },
      firstName: {
        type: 'string',
        description: 'Users First Name'
      },
      middleName: {
        type: 'string',
        description: 'Users Middle Name'
      },
      lastName: {
        type: 'string',
        description: 'Users Last Name'
      },
      emailAddress: {
        type: 'string',
        description: 'Users Email Address'
      },
      phoneNumber: {
        type: 'string',
        description: 'Users Phone Number'
      },
      state: {
        type: 'string',
        description: 'Users Home Address US State'
      },
      streetAddress: {
        type: 'string',
        description: 'Users Home Street Address'
      },
      streetAddress2: {
        type: 'string',
        description:
          'Users Second Line Street Address (APT Types.oas3.jsonTypes.oas3.json)'
      },
      zip: {
        type: 'string',
        description: 'Users Home Addresses Zip Code'
      }
    },
    required: [
      'type',
      'darkmode',
      'firstName',
      'lastName',
      'emailAddress',
      'phoneNumber',
      'state',
      'streetAddress',
      'zip'
    ]
  },
  /**
   *
   */
  Contract: {
    type: 'object',
    title: 'Contract Definition',
    description:
      'This is a Contract. It will be taking an order and turning it into a signable PDF on HelloSign. ',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      user: {
        type: 'string'
      },
      status: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.',
        enum: ['CONTRACT_PENDING', 'CONTRACT_APPROVED', 'CONTRACT_CANCELED']
      },
      type: {
        type: 'string',
        enum: ['Contract'],
        description: 'Type of record. '
      },
      orderId: {
        type: 'string',
        description: 'Order this contract is for.'
      },
      helloSign: {
        type: 'object',
        description: 'All properties needed for Hello Sign legal signing.'
      }
    },
    required: ['status', 'type', 'orderId', 'helloSign']
  },
  /**
   *
   */
  Message: {
    type: 'object',
    title: 'Message Definition',
    description:
      'A Conversation is a organized list of messages with meta data between two user, or a team of users.',
    properties: {
      id: {
        type: 'string'
      },
      user: {
        type: 'string',
        description: 'Who sent the message. Can be thought of as where'
      },
      type: {
        type: 'string',
        enum: ['Message']
      },
      to: {
        type: 'string'
      },
      status: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.',
        enum: ['Draft', 'New', 'Viewed', 'Archived']
      },
      sendType: {
        type: 'string',
        enum: ['Group', 'User']
      },
      message: {
        type: 'string'
      },
      sentAt: {
        type: 'string'
      },
      seenAt: {
        type: 'string'
      }
    },
    required: ['user', 'to', 'sendType', 'status', 'message', 'sentAt']
  },
  /**
   *
   */
  Note: {
    type: 'object',
    title: 'Note Definition',
    description:
      'This is a Note record son a potential lead.\n\n|Direction|Types|\n|---------|-----|\n|From|Residence, Lead|',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      user: {
        type: 'string'
      },
      status: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.',
        enum: ['DRAFT', 'SAVED', 'REMOVED']
      },
      type: {
        type: 'string',
        enum: ['Note']
      },
      noteText: {
        type: 'string'
      },
      createdOn: {
        type: 'string'
      },
      imageURL: {
        type: 'string'
      }
    },
    required: ['id', 'user', 'status', 'type', 'noteText', 'createdOn']
  },
  /**
   *
   */
  Route: {
    type: 'object',
    title: 'Route Definition',
    description:
      'This is a Route. Everyday the Canvasers hit new houses. For each house, they add a Residence to their daily route. Over time we can use this data to generate routes for the canvasers that are more efficient.',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      user: {
        type: 'string',
        description: 'User to record route as'
      },
      status: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.',
        enum: ['NoStart', 'Started', 'OnBreak', 'Lunch', 'Finished']
      },
      type: {
        type: 'string',
        enum: ['Route']
      },
      Route: {
        type: 'array',
        description: '"Route"',
        items: {
          type: 'object',
          properties: {
            Residence: {
              $ref: 'Types.oas3.json#/Residence'
            },
            Answer: {
              type: 'boolean',
              description: 'Did the residence answer the door?'
            },
            Lead: {
              type: 'boolean',
              description: 'Did the residence, lead into a new Lead?'
            },
            StartTimestamp: {
              type: 'string',
              format: 'date-time'
            },
            EndTimestamp: {
              type: 'string'
            }
          },
          required: ['Residence', 'Answer', 'Lead', 'StartTimestamp']
        }
      }
    },
    required: ['id', 'user', 'status', 'type', 'Route']
  },
  /**
   *
   */
  Group: {
    type: 'object',
    title: 'Group Definition',
    description:
      'This is a Group. The group is the major structure behind permissions and tenants. Inside the web app you can switch between different views for each team you are apart of and for your view as well.',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.\n\nGroup ID'
      },
      type: {
        type: 'string',
        enum: ['Team']
      },
      name: {
        type: 'string'
      },
      permissions: {
        type: 'object',
        description: 'Array of permissions for the group of users',
        properties: {
          views: {
            type: 'array',
            description: 'Sidebar tabs group can see',
            items: {
              type: 'object',
              properties: {
                view: {
                  type: 'string',
                  description: 'Tab Name'
                }
              }
            }
          }
        }
      },
      templates: {
        type: 'array',
        items: {
          $ref: 'Types.oas3.json#/IDReferenceObject'
        }
      },
      notes: {
        type: 'array',
        items: {
          $ref: 'Types.oas3.json#/IDReferenceObject'
        }
      },
      user: {
        type: 'string',
        description: 'Creator/Admin of Group'
      },
      managers: {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      users: {
        type: 'array',
        description: 'An array of all the teams ',
        items: {
          type: 'string'
        }
      },
      groups: {
        type: 'array',
        description: 'array of group ids for sub groups',
        items: {
          type: 'string'
        }
      }
    },
    required: [
      'type',
      'name',
      'permissions',
      'templates',
      'notes',
      'user',
      'managers',
      'users',
      'groups'
    ]
  },
  /**
   *
   */
  Timeclock: {
    type: 'object',
    title: 'Timeclock Definition',
    description:
      'This is a Timeclock. A timeclock is a set of clock-ins and clock-outs for that have happened for a single date.',
    properties: {
      id: {
        type: 'string',
        description: 'ID will be the `UserID|UnixEpochDay` format'
      },
      type: {
        type: 'string',
        enum: ['Timeclock'],
        description: 'Record Type'
      },
      user: {
        type: 'string'
      },
      status: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.',
        enum: [
          'OffClock',
          'Late',
          'OnClock',
          'Overtime',
          'Vacation',
          'SickLeave'
        ]
      },
      timestamps: {
        type: 'array',
        description: 'Array of clock ins and clock outs. ',
        items: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['On', 'Off'],
              description: 'Type of clock `ClockIn` or `ClockOut`'
            },
            ts: {
              type: 'string',
              description: 'Timestamp from DB from when they clocked in or out'
            }
          }
        }
      }
    },
    required: ['status', 'type', 'timestamps']
  },
  /**
   *
   */
  Task: {
    type: 'object',
    title: 'Task Definition',
    description:
      'This is a Task. A task is anything that needs to be completed by a employee.',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      user: {
        type: 'string',
        description: 'User to assign the task to'
      },
      assigner: {
        type: 'string',
        description: 'The person that has assigned this task.'
      },
      status: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.',
        enum: ['NEW', 'STARTED', 'FINISHED', 'LATE', 'UNFINISHED', 'DUE_TODAY']
      },
      type: {
        type: 'string',
        enum: ['Task'],
        description: 'Record Type'
      },
      title: {
        type: 'string',
        description: 'Title of task scheduled'
      },
      description: {
        type: 'string',
        description: 'Description of task that needs completing'
      },
      activity: {
        type: 'string',
        enum: [
          'APPOINTMENT',
          'CANVAS_AREA',
          'MEASURE_HOUSE',
          'FILL_OUT_FORM',
          'SKETCH_DESIGN',
          'CALL',
          'EMAIL'
        ],
        description: 'Activity to do for the task to complete'
      },
      startDate: {
        type: 'string',
        description: '> Start is UNIX day\n\nStart of the first billing period'
      },
      endDate: {
        type: 'string',
        description: '> Start is UNIX day\n\nStart of the first billing period'
      },
      activityDetails: {
        type: 'object'
      }
    },
    required: [
      'id',
      'user',
      'assigner',
      'status',
      'type',
      'title',
      'activity',
      'endDate'
    ]
  },
  /**
   *
   */
  Timeoff: {
    type: 'object',
    title: 'Time Off Definition',
    description:
      'This is the record to either request time off, reject a time off request, or accept a time off request. ',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      type: {
        type: 'string'
      },
      department: {
        type: 'string',
        description: 'Department Request is going to'
      },
      reason: {
        type: 'string',
        description: 'Reason to request off'
      },
      acknowledgment: {
        type: 'string',
        description: 'Message to send'
      },
      oneTimeRequest: {
        type: 'object',
        description: 'A request for a single time off work',
        properties: {
          date: {
            type: 'string'
          }
        }
      },
      recurringRequest: {
        type: 'object',
        description:
          'A request to recurring/weekly time off. \n\nDays can be split in halfs. So you are given the chance to input 4 half days off. ',
        properties: {
          date: {
            type: 'string',
            description: 'Date to take time off'
          },
          repeatFor: {
            type: 'string',
            description: 'Number of weeks to repeat this time off'
          },
          status: {
            type: 'string',
            description: 'Status of time off request'
          },
          halfDayTime: {
            type: 'string',
            description: 'First half day'
          },
          requestDate_2: {
            type: 'string',
            description: 'Second Day Off'
          },
          halfDayTime_2: {
            type: 'string',
            description: 'Second Half Day'
          }
        }
      },
      customReason: {
        type: 'string',
        description: 'If they need a custom reason'
      },
      additionalNotes: {
        type: 'string'
      }
    },
    required: ['type', 'department', 'reason']
  },
  /**
   *
   */
  Layout: {
    type: 'object',
    title: 'Layout Definition',
    description: 'This is the styling and display settings for a user. ',
    properties: {
      theme: {
        type: 'object',
        description: 'Material Theme options',
        properties: {
          minisidebar: {
            type: 'boolean',
            description: "If it it's a Mini Sidebar Vs the Full Sidebar"
          },
          boxed: {
            type: 'boolean',
            description: 'NOT SURE???'
          },
          danger: {
            type: 'boolean',
            description: '???'
          },
          blue: {
            type: 'boolean',
            description: 'Theme material is using'
          },
          green: {
            type: 'boolean',
            description: 'Theme material is using (default)'
          },
          dark: {
            type: 'boolean',
            description: 'Theme material is using. (Darkmode)'
          }
        }
      },
      dir: {
        type: 'string',
        description:
          'The direction the page is read. Left-to-Right or Right-to-Left'
      },
      mobileQuery: {
        type: 'boolean',
        description: 'If device is Mobile. (Responsivness)'
      },
      search: {
        type: 'string',
        description: 'Global Search Term'
      },
      showHide: {
        type: 'boolean',
        description: 'Not Sure ???'
      },
      sideBar: {
        type: 'boolean',
        description: 'Whether or not to display the navigation sidebar'
      },
      topBar: {
        type: 'boolean',
        description: 'Whether or not to display the navigation topbar'
      }
    },
    required: ['theme', 'dir', 'showHide', 'sideBar', 'topBar']
  },
  /**
   *
   */
  EmailTemplate: {
    type: 'object',
    title: 'Email Template Definition',
    properties: {
      id: {
        type: 'string'
      },
      type: {
        type: 'string',
        enum: ['EmailTemplate']
      },
      title: {
        type: 'string',
        description: 'Title of Email Template'
      },
      template: {
        type: 'string',
        description:
          'This will be an HTML template that allows you to use inputs and fill out variables inside the template. '
      },
      valuesForTemplate: {
        type: 'object',
        description: 'Values need to complete the template into an email.'
      }
    },
    required: ['type', 'title', 'template']
  },
  /**
   *
   */
  Appointment: {
    type: 'object',
    title: 'Appointment Definition',
    description: 'These are appointments for a user and/or lead.',
    properties: {
      id: {
        type: 'string'
      },
      type: {
        type: 'string',
        enum: ['Appointment']
      },
      appointmentDateType: {
        type: 'string',
        enum: ['Day', 'DayRange', 'QuarterHour', 'QuarterHourRange']
      },
      appointmentType: {
        type: 'string',
        enum: ['Pitch', 'Measure', 'Signature', 'DueDate']
      },
      fromDate: {
        type: 'string',
        description: 'Start Date Time'
      },
      toDate: {
        type: 'string',
        description:
          'End Date Time or if no `fromDate` then this is the time of the appointment'
      },
      additionalProperties: {
        type: 'object',
        description: 'Idk what is all going in here so ____'
      },
      status: {
        type: 'string',
        enum: [
          'SCHEDULE_APPT',
          'APPT_SCHEDULED',
          'APPT_CANCELED',
          'APPT_SUCCESS',
          'APPT_MISSED'
        ]
      }
    },
    required: [
      'type',
      'appointmentDateType',
      'appointmentType',
      'toDate',
      'status'
    ]
  },
  /**
   *
   */
  Aggregate: {
    type: 'object',
    description:
      'This is a Aggregate Record. Each day anytime a record is created or updated that event is recorded in a daily aggregate record. Each user has a different aggregate and you can group them together by groups to create reports, or group them together using dates for a scorecard. ',
    title: 'Aggregate Definition',
    properties: {
      id: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      user: {
        type: 'string'
      },
      day: {
        type: 'integer'
      },
      Product: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          New: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Update: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Active: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Cold: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      Interest: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          New: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Update: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Active: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Cold: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      Residence: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          New: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Update: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Active: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Cold: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      Message: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          CONTRACT_PENDING: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_APPROVED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_CANCELED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      Task: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          New: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Update: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Active: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Cold: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      Payment: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          CONTRACT_PENDING: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_APPROVED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_CANCELED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      Job: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          CONTRACT_PENDING: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_APPROVED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_CANCELED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      Appointment: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          CONTRACT_PENDING: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_APPROVED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_CANCELED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      Timeclock: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          CONTRACT_PENDING: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_APPROVED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_CANCELED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      Route: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          CONTRACT_PENDING: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_APPROVED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_CANCELED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      Contract: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          CONTRACT_PENDING: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_APPROVED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONTRACT_CANCELED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      PhoneCall: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          REHASH: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          REHASH_2: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          MEDIA1: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CV_CALLBACK: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          HOME_SHOWS: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CR1: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CR2: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          PC1: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          HS1: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          NH1: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          SURVEY1: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          RS1: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          PC2: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          PC3: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          PC4: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          PC5: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          HS2: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          HS3: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          HS4: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          HS5: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          HS6: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          MEDIA2: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          MEDIA3: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          MEDIA4: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          NH2: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          NH3: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          NH4: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          SURVEY2: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          SURVEY3: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          SURVEY4: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          SURVEY5: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          SURVEY6: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          RS2: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          RS3: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          RS4: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          RH_CANCEL: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          BLOWOUT: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          COMPLETE: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          RESURECTION1: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          RESURECTION2: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CUSTOMER_SURVEY: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          NOT_NET: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          CONFIRM1: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      Order: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          NEW_ORDER: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          ORDER_MEASURED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          PURCHASE_ORDER: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          ORDER_COMPLETE: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          ORDER_CANCELED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      Lead: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          CALL_CANCEL: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          NO_SHOW: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          BLOWOUT: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          LEAD_RESET: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          NEW_LEAD: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          DEAD: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          REDESIGN: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          REP_TIED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          ADD_INTEREST: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          RECYCLE: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          AT_DOOR: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          NOT_HOME: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          ONE_LEG: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          NOT_INTERESTED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          PITCH_MISS: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          SALE: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          NOT_BOOKED: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      EmailCampaign: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          New: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Update: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Active: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Cold: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      },
      Email: {
        type: 'object',
        properties: {
          count: {
            type: 'integer'
          },
          ids: {
            type: 'array',
            items: {
              type: 'object'
            }
          },
          New: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Update: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Active: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          },
          Cold: {
            type: 'object',
            properties: {
              count: {
                type: 'integer'
              },
              ids: {
                type: 'array',
                items: {
                  type: 'object'
                }
              }
            }
          }
        }
      }
    },
    required: ['type', 'user', 'day']
  },
  /**
   *
   */
  Filter: {
    type: 'object',
    title: 'Filter Definition',
    properties: {
      id: {
        type: 'string'
      },
      type: {
        type: 'string',
        enum: ['Filter']
      },
      parameters: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            valuePath: {
              type: 'string'
            },
            equality: {
              type: 'string',
              enum: [
                'equals',
                'lessThan',
                'greaterThan',
                'lessThanOrEqual',
                'greaterThanOrEqual',
                'includes'
              ]
            },
            value: {
              type: 'object'
            }
          }
        }
      },
      title: {
        type: 'string'
      },
      user: {
        type: 'string'
      },
      _groups: {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    },
    required: ['type', 'parameters', 'title', 'user']
  },
  /**
   *
   */
  ReportTemplate: {
    type: 'object',
    title: 'Report Template Definition',
    description:
      'Definition of Report. A Report is made up of many score cards. ',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      type: {
        type: 'string',
        enum: ['ReportTemplate']
      },
      fromDate: {
        type: 'string',
        description: 'The report will from the `fromDate` until the `toDate`'
      },
      toDate: {
        type: 'string',
        description: 'The report will from the `fromDate` until the `toDate`'
      },
      groups: {
        description: 'Group report is being ran on',
        type: 'array',
        items: {
          type: 'string'
        }
      },
      users: {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      fields: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            path: {
              type: 'string'
            },
            operation: {
              type: 'string',
              enum: [
                'GET',
                'PLUS_TARGET',
                'ADD_TO_TARGET',
                'MINUS_TARGET',
                'MULTIPLY_BY_TARGET',
                'DIVIDE_BY_TARGET'
              ]
            },
            target: {
              type: 'string'
            }
          },
          required: ['type', 'operation']
        }
      }
    },
    required: ['fromDate', 'toDate', 'fields']
  },
  /**
   *
   */
  Label: {
    type: 'object',
    title: 'Label Definition',
    description: 'Segment of the Marketing Graph. ',
    properties: {
      id: {
        type: 'string'
      },
      type: {
        type: 'string',
        enum: ['Label']
      },
      name: {
        type: 'string',
        description:
          'Name of the Label in the Marketing Graph to Segment Population'
      },
      createdOn: {
        type: 'string',
        description: 'TS of creation date'
      },
      total: {
        type: 'number'
      },
      confidence: {
        type: 'number',
        minimum: 0,
        maximum: 1
      }
    },
    required: ['type', 'name', 'createdOn', 'total', 'confidence']
  },
  /**
   *
   */
  PreviousOrder: {
    type: 'object',
    title: 'Previous Order Definition',
    description:
      'Marketing Vertex that keeps track of previous orders a lead has made. ',
    properties: {
      id: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      order: {
        $ref: 'Types.oas3.json#/Order'
      },
      finance: {
        type: 'object',
        properties: {
          profit: {
            type: 'string'
          },
          gross: {
            type: 'string'
          },
          cost: {
            type: 'string'
          },
          profitOverTime: {
            type: 'string'
          }
        }
      },
      ts: {
        type: 'object',
        properties: {
          startTS: {
            type: 'string'
          },
          endTS: {
            type: 'string'
          }
        }
      },
      employeesInvolvedIds: {
        type: 'array',
        description: 'IDS of all employees user involved in order. ',
        items: {
          type: 'string'
        }
      },
      status: {
        type: 'string'
      }
    },
    required: [
      'type',
      'order',
      'finance',
      'ts',
      'employeesInvolvedIds',
      'status'
    ]
  },
  /**
   *
   */
  ScoreCard: {
    type: 'object',
    title: 'Score Card Definition',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      fromDate: {
        type: 'string',
        description: 'Unix Date Time Start Time'
      },
      toDate: {
        type: 'string',
        description: 'Unix Date Time Start Time'
      },
      display: {
        type: 'string',
        enum: ['BAR_CHART', 'COMPLEX_GAUGE', 'LINE_CHART', 'NUMBER_CARD']
      },
      scores: {
        type: 'array',
        items: {
          $ref: 'Types.oas3.json#/Score'
        }
      },
      metaData: {
        type: 'object',
        description:
          'Meta Data is the aggregates, averages, and min/max for scores'
      },
      type: {
        type: 'string',
        enum: ['ScoreCard']
      }
    },
    required: ['toDate', 'scores']
  },
  /**
   *
   */
  Score: {
    type: 'object',
    title: 'Score Definition',
    description:
      'Definition of a Score Record. Many of these make up a single Score Card. A Report is made of many Score Cards. ',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      operatePath: {
        type: 'string',
        description: 'Path string to grab the data from'
      },
      operation: {
        type: 'string',
        enum: ['Add', 'Average', 'Aggregate'],
        description: 'Operation to do on path strings attribute value. '
      },
      weight: {
        type: 'number',
        minimum: 0,
        maximum: 1,
        description: 'How much is this value weighted'
      },
      minimum: {
        type: 'number',
        description:
          'What is the minimum required for a single scores timerange'
      },
      goal: {
        description:
          'Goal to hit with value from operation mapped over operatePath',
        type: 'number'
      },
      type: {
        type: 'string',
        enum: ['Score']
      }
    },
    required: ['operatePath', 'operation', 'weight', 'title']
  },
  /**
   *
   */
  IDReferenceObject: {
    type: 'object',
    title: 'ID Reference Object',
    description:
      'ID reference object, mainly used in definitions where the definition holds the ID to access another definition for more details. ',
    properties: {
      id: {
        type: 'string'
      }
    }
  },
  /**
   *
   */
  ContractTemplate: {
    type: 'object',
    title: 'Contract Template Definition',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      hellosign: {
        type: 'object'
      },
      pdf: {
        type: 'object'
      },
      dataFields: {
        type: 'object'
      },
      type: {
        type: 'string',
        enum: ['ContractTemplate']
      }
    },
    required: ['hellosign', 'pdf', 'dataFields', 'type']
  },
  /**
   *
   */
  TaskTemplate: {
    type: 'object',
    title: 'Task Template Definition',
    description:
      'Template of a task prefilled to assign to a User in your group. ',
    properties: {
      id: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      template: {
        type: 'object',
        properties: {
          hellosign: {
            type: 'object'
          },
          plaintext: {}
        }
      }
    }
  },
  /**
   *
   */
  Area: {
    type: 'object',
    title: 'Area Definition',
    description:
      'An area is an assigned GeoJSON to a group or user to canvas at a certain time. It will be attached to a task. ',
    properties: {
      id: {
        type: 'string'
      },
      type: {
        type: 'string',
        enum: ['Area']
      },
      geoJSON: {
        type: 'object'
      },
      metaData: {
        type: 'object'
      }
    },
    required: ['type', 'geoJSON']
  },
  /**
   *
   */
  Job: {
    type: 'object',
    title: 'Job Definition',
    description:
      'A job is how the Midtown Homes system tracks the progress of the actual installation. ',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      status: {
        type: 'string',
        enum: [
          'IN_PROGRESS',
          'PROBLEM',
          'COMPLETE',
          'ON_HOLD',
          'FINANCE_REJECT_OR_CUSTOMER_CANCEL'
        ]
      },
      contractors: {
        type: 'string'
      },
      comission: {
        type: 'string'
      },
      marketsharp: {
        type: 'object',
        properties: {
          ID: {
            type: 'string'
          },
          'CONTACT ID': {
            type: 'string'
          },
          'LEAD ID': {
            type: 'string'
          },
          'JOB SITE': {
            type: 'string'
          },
          'JOB NUMBER': {
            type: 'string'
          },
          'JOB NAME': {
            type: 'string'
          },
          'JOB DESC': {
            type: 'string'
          },
          'JOB TYPE': {
            type: 'string'
          },
          'JOB STATUS': {
            type: 'string'
          },
          'JOB ADDRESS1': {
            type: 'string'
          },
          'JOB ADDRESS2': {
            type: 'string'
          },
          'JOB CITY': {
            type: 'string'
          },
          'JOB STATE': {
            type: 'string'
          },
          'JOB ZIP': {
            type: 'string'
          },
          'JOB STRUCTURE VALUE CODE': {
            type: 'string'
          },
          'JOB NOTE': {
            type: 'string'
          },
          'JOB START DATE': {
            type: 'string'
          },
          'SALE DATE': {
            type: 'string'
          },
          'JOB COMPLETED DATE': {
            type: 'string'
          },
          'QB SYNC': {
            type: 'string'
          },
          'QB SYNC DATE': {
            type: 'string'
          },
          'QB ID': {
            type: 'string'
          },
          'IS ACTIVE': {
            type: 'string'
          },
          'LAST UPDATEBY': {
            type: 'string'
          },
          'LAST UPDATE': {
            type: 'string'
          },
          'LEAD APPT SOLD ID': {
            type: 'string'
          },
          'EXPORTED TO GUILD QUALITY': {
            type: 'string'
          },
          'JOB SITE NAME': {
            type: 'string'
          },
          'QBWEB ID': {
            type: 'string'
          },
          ESTIMATEID: {
            type: 'string'
          }
        }
      },
      type: {
        type: 'string',
        enum: ['Job']
      }
    },
    required: ['contractors', 'comission', 'marketsharp', 'type']
  },
  /**
   *
   */
  JobTemplate: {
    type: 'object',
    title: 'Job Template',
    description: 'Template to customize a Job record. ',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      type: {
        type: 'string',
        enum: ['JobTemplate']
      },
      name: {
        type: 'string'
      },
      producer: {
        type: 'string'
      },
      orderID: {
        type: 'string'
      },
      leadID: {
        type: 'string'
      },
      details: {
        type: 'object'
      }
    },
    required: ['type', 'name', 'producer', 'orderID', 'leadID']
  },
  /**
   *
   */
  Payment: {
    type: 'object',
    title: 'Payment Definition',
    description: 'Record to record if a client has made a payment or not. ',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      status: {
        type: 'string',
        enum: ['PAYMENT_PENDING', 'PAYMENT_APPROVED', 'PAYMENT_DENIED']
      },
      paymentType: {
        type: 'string',
        enum: ['Financing', 'Cash']
      },
      provider: {
        type: 'string',
        enum: ['All', 'The', 'Banks']
      },
      cost: {
        type: 'number',
        description: 'Cost to install product'
      },
      quote: {
        type: 'number',
        description:
          'The inverse of how much % they get returned from selling. '
      },
      commission: {
        type: 'array',
        description:
          'Commission payed to salesman/canvasser for finishing sale',
        items: {
          type: 'object',
          properties: {
            user: {
              type: 'string'
            },
            percentage: {
              type: 'number',
              minimum: 0,
              exclusiveMinimum: false,
              maximum: 1,
              exclusiveMaximum: false
            }
          }
        }
      },
      type: {
        type: 'string',
        enum: ['Payment']
      }
    },
    required: [
      'status',
      'paymentType',
      'provider',
      'cost',
      'quote',
      'commission',
      'type'
    ]
  },
  /**
   *
   */
  PhoneNumber: {
    type: 'object',
    title: 'Phone Number Definition',
    description:
      'All the marketing/legal information about a specific phone number. \n\n**Any edits to this schema should be recorded in the .MarketSharp schema to help me move the old data over.**',
    properties: {
      id: {
        type: 'string',
        description:
          'This is optional type, Do **NOT** use if inserting a new record.'
      },
      'PHONE TYPE NAME': {
        type: 'string'
      },
      'ACCESS COMPANY ID': {
        type: 'string'
      },
      'CONTACT ID': {
        type: 'string'
      },
      'PHONE TYPE ID': {
        type: 'string'
      },
      'PHONE CTY CODE': {
        type: 'string'
      },
      'PHONE AREA CODE': {
        type: 'string'
      },
      'PHONE NUMBER': {
        type: 'string'
      },
      'PRIMARY PHONE TYPE': {
        type: 'string'
      },
      'PHONE DNC': {
        type: 'string'
      },
      'PHONE FED DO NOT CALL': {
        type: 'string'
      },
      'PHONE STATE DO NOT CALL': {
        type: 'string'
      },
      'WRITTEN PERMISSION DNC': {
        type: 'string'
      },
      'PHONE DNC EXEMPT': {
        type: 'string'
      },
      'PHONE HOUSE DO NOT CALL': {
        type: 'string'
      },
      'PHONE DNC EXEMPT DATE': {
        type: 'string'
      },
      'PHONE DESCRIPTION': {
        type: 'string'
      },
      'PHONE EXT': {
        type: 'string'
      },
      'PHONE DO NOT FAX': {
        type: 'string'
      },
      'IS ACTIVE': {
        type: 'string'
      },
      'LAST UPDATEBY': {
        type: 'string'
      },
      'LAST UPDATE': {
        type: 'string'
      },
      PHONENUMBERSEARCH: {
        type: 'string'
      },
      PHONENUMBEREXCLUDINGAREACODESEARCH: {
        type: 'string'
      },
      'PHONE DNT': {
        type: 'string'
      },
      'PHONE DNT TEXTING OPT OUT': {
        type: 'string'
      }
    }
  },
  /**
   *
   */
  Location: {
    type: 'object',
    properties: {
      id: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      score: {
        type: 'number'
      },
      address: {
        type: 'object',
        properties: {
          streetNumber: {
            type: 'string'
          },
          streetName: {
            type: 'string'
          },
          municipalitySubdivision: {
            type: 'string'
          },
          municipality: {
            type: 'string'
          },
          countrySecondarySubdivision: {
            type: 'string'
          },
          countryTertiarySubdivision: {
            type: 'string'
          },
          countrySubdivision: {
            type: 'string'
          },
          postalCode: {
            type: 'string'
          },
          extendedPostalCode: {
            type: 'string'
          },
          countryCode: {
            type: 'string'
          },
          country: {
            type: 'string'
          },
          countryCodeISO3: {
            type: 'string'
          },
          freeformAddress: {
            type: 'string'
          },
          localName: {
            type: 'string'
          },
          countrySubdivisionName: {
            type: 'string'
          }
        }
      },
      position: {
        type: 'object',
        properties: {
          lat: {
            type: 'number'
          },
          lon: {
            type: 'number'
          }
        }
      },
      viewport: {
        type: 'object',
        properties: {
          topLeftPoint: {
            type: 'object',
            properties: {
              lat: {
                type: 'number'
              },
              lon: {
                type: 'number'
              }
            }
          },
          btmRightPoint: {
            type: 'object',
            properties: {
              lat: {
                type: 'number'
              },
              lon: {
                type: 'number'
              }
            }
          }
        }
      },
      entryPoints: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            type: {
              type: 'string'
            },
            position: {
              type: 'object',
              properties: {
                lat: {
                  type: 'number'
                },
                lon: {
                  type: 'number'
                }
              }
            }
          }
        }
      }
    }
  }
}
