const ext = require('./ext')

class Typings {
  /**
   * Creates an array definition of partial records
   * @param {any} partial Partial Records
   */
  list = partial => {
    return ext.array.items(partial)
  }

  constructor () {
    /**
     * Definitions Response
     */
    this.Definition = {}

    /**
     * Schema Response
     */
    this.Schema = {}

    /**
     * Schema Response
     */
    this.Bodies = {}

    /**
     * Schema Response
     */
    this.Responses = {}

    this.setupDefinitions()
    this.setupSchema()
  }

  /**
   * Creates a CosmosDB Definition of Typing
   * @param {*} partial Partial Definition of Typing
   */

  record ({ partial, permissions = false, notes = false }) {
    return {
      id: ext.str.uuid.optional,
      user: ext.str.uuid.optional,
      ...partial,
      ...(permissions
        ? {
            owner: {
              users: ext.array.items(ext.str.uuid).optional,
              groups: ext.array.items(ext.str.uuid).optional
            }
          }
        : {}),
      ...(notes
        ? {
            noteIds: ext.array.items(ext.str.uuid).optional
          }
        : {}),
      createdOn: ext.int.min(946684800).max(2147483646).optional, // <Min> 01/01/2000 00:00:00 <Max> 01/19/2038 3:14:07
      createdBy: ext.str.uuid.optional.optional,
      updatedOn: ext.int.min(946684800).max(2147483646).optional, // <Min> 01/01/2000 00:00:00 <Max> 01/19/2038 3:14:07
      updatedBy: ext.str.uuid.optional
    }
  }

  setupDefinitions () {
    /**
     * UUID Shortcut
     */
    const id = ext.str.uuid
    const PhoneNumber = ext.str.match(new RegExp(/\d\(\d{3}\)\d{3}-\d{4}/))
    const Timedate = ext.int.min(946684800).max(2147483646)
    const Score = this.record({
      type: ext.object.schema({}),
      status: ext.object.schema({}),
      weight: ext.number.max(1.0).min(0.0),
      minimum: ext.number.optional,
      goal: ext.number.optional
    })

    const predefined = {
      PayrollTotals: this.record({
        partial: {
          type: ext.str.enum('PayrollTotal'),
          companyDebit: ext.str.maxlen(80),
          reimbursements: ext.str.maxlen(80),
          netPay: ext.str.maxlen(80),
          correction: ext.str.maxlen(80),
          employerTaxes: ext.str.maxlen(80),
          employeeTaxes: ext.str.maxlen(80),
          benefits: ext.str.maxlen(80),
          employeeBenefitsDeductions: ext.str.maxlen(80),
          employeeComponensations: ext.array.items({
            type: ext.str.enum('EmployeeCompensations'),
            grossPay: ext.array.items(ext.str),
            netPay: ext.array.items(ext.str),
            paymentMethod: ext.array.items(ext.str),
            fixedCompensationid: ext.array.items(id),
            hourlyid: ext.array.items(id)
          }).optional,
          FixedCompensation: ext.array.items({
            type: ext.str.enum('FixedCompensation'),
            name: ext.str.maxlen(80),
            amount: ext.str.maxlen(80),
            jobId: ext.str.maxlen(80)
          }).optional,
          HourlyCompensations: ext.array.items({
            type: ext.str.enum('HourlyCompensations'),
            name: ext.str.maxlen(80), // Regular Hours | Overtime | Double Overtime
            hours: ext.str.maxlen(80),
            jobId: ext.str.maxlen(80),
            compensation_multiplier: ext.str.maxlen(80)
          }).optional,
          PayrollDeductions: ext.array.items({
            type: ext.str.enum('PayrollDeductions'),
            name: ext.str.maxlen(80),
            amount: ext.str.maxlen(80)
          }),
          Taxes: ext.array.items({
            type: ext.str.enum('Taxes'),
            status: ext.str.enum('OWED', 'PAYED'),
            name: ext.str.maxlen(80),
            employer: ext.bool,
            amount: ext.str.maxlen(80)
          }),
          Benefits: ext.array.items({
            type: ext.str.enum('Benefits'),
            name: ext.str.maxlen(80),
            employeeDeduction: ext.str.maxlen(80),
            companyContribution: ext.str.maxlen(80),
            imputed: ext.bool
          })
        }
      })
    }

    this.Definition = {
      User: this.record({
        partial: {
          type: ext.str.enum('User'),
          faceListId: id.optional,
          gender: ext.str.maxlen(80),
          companyId: id,
          verified: ext.bool,
          firstName: ext.str.maxlen(80),
          lastName: ext.str.maxlen(80),
          phoneNumber: PhoneNumber,
          dateOfBirth: ext.int.between(18, 100),
          ssn: ext.str.maxlen(80).optional,
          companyTitle: ext.str.maxlen(80).optional,
          ipAddress: ext.str.maxlen(80).optional,
          group: ext.str.maxlen(80),
          userType: ext.str.maxlen(80),
          email: ext.str.email,
          ssn: ext.str.maxlen(80).optional,
          // favoriteId: ext.array.items(id),
          // reviewId: ext.array.items(id),
          // groupId: ext.array.items(id),
          permissionId: id.optional,
          // noteId: ext.array.items(id),
          theming: {
            type: ext.str.enum('UserSettings').optional,
            productIDs: ext.array.items(id).optional,
            darkmode: ext.bool
          },
          twillioId: id.optional,
          intuitId: id.optional,
          payrollId: id.optional,
          contractId: id.optional
        },
        notes: true
      }),
      Residence: this.record({
        partial: {
          type: ext.str.enum('Address'),
          streetAddress: ext.str.maxlen(80),
          city: ext.str.maxlen(80),
          zip: ext.str.maxlen(80),
          state: ext.str.maxlen(80),
          address: {
            streetNumber: ext.str.maxlen(80),
            streetName: ext.str.maxlen(80),
            municipality: ext.str.maxlen(80),
            countrySecondarySubdivision: ext.str.maxlen(80),
            countryTertiarySubdivision: ext.str.maxlen(80),
            countrySubdivision: ext.str.maxlen(2),
            countrySubdivisionName: ext.str.maxlen(80),
            postalCode: ext.str.maxlen(5),
            extendedPostalCode: ext.str.maxlen(9),
            countryCode: ext.str.maxlen(4),
            country: ext.str.maxlen(80),
            countryCodeISO3: ext.str.maxlen(5),
            freeformAddress: ext.str.maxlen(100),
            localName: ext.str.maxlen(80)
          },
          location: {
            lat: ext.number,
            lon: ext.number
          }
        },
        permissions: true,
        notes: true
      }),
      Twillio: this.record({
        partial: {
          type: ext.str.enum('Twillio'),
          messageSid: ext.array.items(ext.str),
          recordingSid: ext.array.items(ext.str),
          ApplicationSid: ext.array.items(ext.str),
          TwillioURL: ext.array.items(ext.str),
          isoCountryCode: ext.array.items(ext.str),
          CallSid: ext.array.items(ext.str),
          ConferenceSid: ext.array.items(ext.str),
          IncomingPhoneNumberSid: ext.array.items(ext.str),
          OutgoingCallerIdSid: ext.array.items(ext.str)
        }
      }),
      Phonecall: this.record({
        partial: {
          type: ext.str.enum('Phonecall'),
          status: ext.str.enum(
            'REHASH',
            'REHASH_2',
            'MEDIA1',
            'CV_CALLBACK',
            'HOME_SHOWS',
            'CR1',
            'CR2',
            'PC1',
            'HS1',
            'NH1',
            'SURVEY1',
            'RS1',
            'PC2',
            'PC3',
            'PC4',
            'PC5',
            'HS2',
            'HS3',
            'HS4',
            'HS5',
            'HS6',
            'MEDIA2',
            'MEDIA3',
            'MEDIA4',
            'NH2',
            'NH3',
            'NH4',
            'SURVEY2',
            'SURVEY3',
            'SURVEY4',
            'SURVEY5',
            'SURVEY6',
            'RS2',
            'RS3',
            'RS4',
            'RH_CANCEL',
            'BLOWOUT',
            'COMPLETE',
            'RESURECTION1',
            'RESURECTION2',
            'CUSTOMER_SURVEY',
            'NOT_NET',
            'CONFIRM1'
          ),
          direction: ext.str.enum('OUTBOUND', 'INBOUND')
          // Lead
          // Residence
          // Subject
          // taskId,
          //
        }
      }),
      ...predefined,
      // TODO: Fix this record
      // Payroll: this.record({
      //   partial: {
      //     type: ext.str.enum('Payroll'),
      //     payrollDeadline: ext.str.maxlen(80),
      //     checkDate: ext.str.maxlen(80),
      //     processed: ext.str.maxlen(80),
      //     payRoleId: ext.str.maxlen(80),
      //     payrollTotals: ext.array.items(predefined.PayrollTotal),
      //     employeeCompensations: ext.array.items(
      //       predefined.EmployeeCompensations
      //     ),
      //     fixedCompensation: ext.array.items(predefined.FixedCompensation),
      //     hourlyCompensations: ext.array.items(predefined.HourlyCompensations),
      //     benefits: ext.array.items(predefined.Benefits),
      //     payrollDeductions: ext.array.items(predefined.PayrollDeductions),
      //     taxes: ext.array.items(predefined.Taxes)
      //   }
      // }),
      PaidTimeOff: this.record({
        partial: {
          type: ext.str.enum('PaidTimeOff'),
          name: ext.str.maxlen(80),
          hours: ext.str.maxlen(80)
        }
      }),
      Note: this.record({
        partial: {
          type: ext.str.enum('Note'),
          status: ext.str.enum('DRAFT', 'SAVED', 'REMOVED'),
          noteText: ext.str.maxlen(240).minlen(0).optional,
          imageURL: ext.str.optional
        }
      }),
      Message: this.record({
        partial: {
          type: ext.str.enum('Message'),
          status: ext.str.enum('New', 'Draft', 'Viewed', 'Archived'),
          to: ext.str,
          sendType: ext.str.enum('Group', 'User'),
          message: ext.str,
          sentAt: Timedate.optional,
          seenAt: Timedate.optional
        },
        permissions: true
      }),
      Scorecard: this.record({
        partial: {
          title: ext.str.maxlen(80),
          description: ext.str.maxlen(200),
          scores: ext.array.items(Score),
          scorecardType: ext.str.enum('GROUP', 'INDIVIDUAL'),
          series: ext.str.enum('SINGLE', 'TIME'),
          display: ext.str.enum(
            'AREA_CHART',
            'BAR_CHART',
            'COMPLEX_GAUGE',
            'GROUPED_BAR_CHART',
            'HEAT_MAP',
            'LINE_CHART',
            'NUMBER_CARD',
            'PIE_CHART',
            'POLAR_CHART'
          )
        }
      }),
      Lead: this.record({
        partial: {
          type: ext.str.enum('Lead'),
          status: ext.str.enum(
            'PROSPECT', // HALF LEAD
            'NEW', // LEAD
            'CUSTOMER', // PREVIOUS
            'RECYCLE', //  RECYCLED
            'PITCHING', // APPOINTMENT
            'ORDER', // PRODUCTION (before work has started)
            'JOB' // CONTRACTOR (job in progress)
          ),
          ownerType: ext.str.enum('Single', 'Dual'),
          title: ext.str.enum('Mr.', 'Mrs.'),
          firstName: ext.str.maxlen(80),
          lastName: ext.str.maxlen(80),
          title_2: ext.str.enum('Mr.', 'Mrs.').optional,
          firstName_2: ext.str.maxlen(80).minlen(0).optional,
          lastName_2: ext.str.optional,
          emailAddress: ext.str.email,
          primaryPhone: PhoneNumber,
          primaryPhoneType: ext.str.enum('Cell', 'Work', 'Home', 'Fax'),
          secondaryPhone: PhoneNumber.optional,
          secondaryPhoneType: ext.str.enum('Cell', 'Work', 'Home', 'Fax')
            .optional,
          residence: id,
          leadSource: ext.array.items(ext.str) // Primary, Secondary N-ary, source of leads
        },
        permissions: true,
        notes: true
      }),
      Timeclock: this.record({
        partial: {
          type: ext.str.enum('Timeclock'),
          status: ext.str.enum(
            'OFF_CLOCK',
            'LATE',
            'ON_CLOCK',
            'OVERTIME',
            'VACATION',
            'SICK_LEAVE'
          ),
          scheduledStartTime: Timedate,
          scheduledEndTime: Timedate,
          actualStartTime: Timedate,
          actualEndTime: Timedate,
          date: ext.int
            .min(946684800 / 86400)
            .max(Number.parseInt(2147483646 / 86400 + '')),
          timestamps: ext.array.items({
            status: ext.str.enum(
              'ClockIn',
              'ClockOut',
              'StartBreak',
              'EndBreak'
            ),
            currentTime: Timedate
          })
        },
        notes: true
      }),
      UserLocation: this.record({
        partial: {
          type: ext.str.enum('Timeclock'),
          locations: ext.array.items({
            position: {
              lat: ext.number,
              lon: ext.number
            },
            ts: Timedate,
            clocked: ext.str.enum('IN', 'OUT')
          }),
          currentArea: id.optional,
          date: ext.int
            .min(946684800 / 86400)
            .max(Number.parseInt(2147483646 / 86400 + ''))
        },
        permissions: true
      }),
      Invoice: this.record({
        partial: {
          type: ext.str.enum('Sales'),
          salesID: id,
          Description: ext.str.maxlen(80),
          Amount: ext.str.maxlen(80),
          DetailType: ext.str.maxlen(80),
          UnitPrice: ext.str.maxlen(80),
          Qty: ext.str.maxlen(80),
          TaxCodeRef: ext.str.maxlen(80),
          salesItemLineDetail: ext.str.maxlen(80)
        }
      }),
      Corporation: this.record({
        partial: {
          type: ext.str.enum('Corporation'),
          corporationID: id,
          businessClassification: ext.str.maxlen(80),
          businessType: ext.str.maxlen(80),
          businessName: ext.str.maxlen(80),
          ein: ext.str.maxlen(80),
          businessAddress: ext.array.items(id)
        }
      }),
      Role: this.record({
        partial: {
          roleId: ext.array.items(id),
          roleName: ext.array.items(id),
          detailID: id,
          vendorID: id
        }
      }),
      Payment: this.record({
        partial: {
          type: ext.str.enum('ContractStatus'),
          contractId: ext.str.maxlen(80),
          contractStatus: ext.str.maxlen(80)
        },
        permissions: true,
        notes: true
      }),
      Appointment: this.record({
        partial: {
          appointmentTime: ext.str.maxlen(15),
          type: ext.str.enum('Appointment'),
          appointmentType: ext.str.enum(
            'Windows/Door',
            'Siding/Soffit-Fascia',
            'Roof',
            'Fence',
            'Deck',
            'Bath',
            'Basement',
            'Kitchen'
          ),
          date: ext.number.max(50),
          status: ext.str.enum(
            'NEW',
            'TO_CONFIRM',
            'COULD_NOT_REACH',
            'CONFIRMED',
            'UNASSIGNED',
            'CALL_CANCEL',
            'EXTRA',
            'ASSIGNED',
            'ONE_LEG',
            'NO_SHOW',
            'SALE',
            'REP_TIE',
            'PITCH_MISS',
            'BLOWOUT',
            'RESCHEDULE',
            'REHASH'
          ),
          lead: id,
          stepNumber: ext.int.optional,
          notes: ext.array.items(id).optional
        }
      }),
      Contract: this.record({
        partial: {
          type: ext.str.enum('Contract'),
          status: ext.str.enum(
            'SIGNED',
            'APPROVED',
            'PENDING',
            'SENT',
            'DRAFT'
          ),
          contract: id,
          user: id,
          lead: id,
          order: id,
          datetime: Timedate,
          name: ext.str.maxlen(50),
          lastRequested: Timedate.optional
        }
      }),
      Order: this.record({
        partial: {
          type: ext.str.enum('Order'),
          status: ext.str.enum(
            'CONTRACT',
            'CONTRACT_APPROVE',
            'SALE_CONFIRMED',
            'SIGNED_CONTRACT',
            'ADD_PRODUCTION',
            'ORDER_CANCEL',
            'MEASURE_PRODUCT',
            'ADD_QUICKBOOKS',
            'FINANCE_REJECTED',
            'DEAD_LEAD',
            'PERMIT',
            'LIEN_WAVER',
            'DIGRIGHT',
            'EXECUTE_ORDER',
            'INTUIT_BOOK_CONFIRMATION',
            'DELIVER_MATERIAL',
            'ORDER_PROGRESS',
            'PROBLEM_ORDER',
            'ORDER_COMPLETED',
            'CUSTOMER_SURVEY',
            'RECYCLE',
            'DEAD'
          ),
          lead: ext.str.uuid,
          documents: ext.array.items({
            document: ext.str.uuid,
            name: ext.str.maxlen(80)
          }),
          contract: ext.str.uuid,
          sales: {
            commissionPercentage: ext.number.min(0).max(1),
            commission: ext.number,
            users: {
              user: ext.str.uuid,
              commissionPercentage: ext.number.min(0).max(1),
              commission: ext.number
            }
          },
          measurements: ext.array.items({
            material: ext.str.uuid,
            units: ext.number,
            addons: ext.any,
            user: ext.array.items(id)
          }),
          financial: {
            credit: ext.str.enum('ACCEPTED', 'REJECTED'),
            total: ext.array.items({
              units: ext.number,
              perSection: ext.number,
              addons: ext.array.items(ext.number),
              sectionItem: ext.number,
              total: ext.number
            })
          }
        },
        notes: true,
        permissions: true
      }),
      Document: this.record({
        partial: {
          link: ext.str.uri.optional,
          body: ext.str.maxlen(800)
        },
        notes: true,
        permissions: true
      }),
      Material: this.record({
        unit: ext.number,
        costPerUnit: ext.number,
        addons: ext.array.items({
          unit: ext.number,
          costPerUnit: ext.number,
          addons: ext.number
        }),
        vendor: {
          name: ext.str,
          id
        },
        product: ext.str.uuid
      }),
      Product: this.record({
        partial: {
          type: ext.str.enum('Product'),
          materials: ext.str.uuid,
          category: ext.str
        }
      }),
      Timeoff: this.record({
        partial: {
          type: ext.str.enum('Timeoff'),
          status: ext.str.enum('PENDING', 'ACCEPTED', 'REJECTED'),
          department: ext.str.enum(
            'Finance',
            'Marketing',
            'Production',
            'Sales'
          ),
          user: id,
          requestType: ext.str.enum('oneTimeRequest', 'recurringRequest'),
          reason: ext.str.enum(
            'Vacation',
            'Personal Leave',
            'Funeral/Bereavement',
            'Jury Duty',
            'Family Reasons',
            'Medical Leave',
            'To Vote',
            'Sales (90 days)',
            'custom'
          ),
          customReason: ext.str.maxlen(80),
          oneTimeRequest: Timedate,
          workDays: ext.str.enum(
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ),
          recurringRequest: Timedate,
          repeatFor: ext.str.maxlen(80),
          halfDayTime: ext.str.maxlen(80),
          halfDayTime_2: ext.str.maxlen(80),
          fullDay: ext.str.maxlen(80)
        }
      }),
      Permission: this.record({
        partial: {
          type: ext.str.enum('Permission'),
          user: ext.str.uuid.optional,
          group: ext.str.uuid.optional,
          scopes: ext.array.items(ext.str.maxlen(80)),
          records: ext.array.items(ext.str.uuid),
          tabs: ext.array.items(ext.str.maxlen(80))
        }
      }),
      Task: this.record({
        partial: {
          type: ext.str.enum('Task'),
          subType: ext.str.enum('Appointment', 'Area', 'Phone Call', 'Meeting'),
          ...{
            appointment: ext.str.uuid,
            startTime: ext.int.min(946684800).max(2147483646).optional,
            endTime: ext.int.min(946684800).max(2147483646).optional,
            assigned: ext.array.items(ext.str.uuid),
            notes: ext.array.items(ext.str.uuid).optional
          },
          ...{
            GeoJSON: {
              type: ext.str.enum('Polygon'),
              coordinates: ext.array
                .items(ext.array.items(ext.number).minlen(2))
                .minlen(4),
              bbox: ext.array.items(ext.number).minlen(4).optional
            },
            startTime: ext.int.min(946684800).max(2147483646).optional,
            endTime: ext.int.min(946684800).max(2147483646).optional,
            assigned: ext.array.items(ext.str.uuid),
            notes: ext.array.items(ext.str.uuid).optional
          },
          ...{
            callType: ext.str.enum(
              'New Lead',
              'Reschedule',
              'Rehash',
              'Survey'
            ),
            assigned: ext.array.items(ext.str.uuid),
            startTime: ext.int.min(946684800).max(2147483646).optional,
            endTime: ext.int.min(946684800).max(2147483646).optional,
            notes: ext.array.items(ext.str.uuid).optional,
            appointment: ext.str.uuid.optional
          },
          ...{
            title: ext.str.maxlen(50),
            description: ext.str.maxlen(200),
            startTime: ext.int.min(946684800).max(2147483646).optional,
            endTime: ext.int.min(946684800).max(2147483646).optional,
            assigned: ext.array.items(ext.str.uuid),
            notes: ext.array.items(ext.str.uuid).optional
          }
        }
      })
    }
  }

  precompiled = {}

  /**
   * Loop through definitions from above and output JSON Schema
   */
  setupSchema () {
    for (const type in this.Definition) {
      if (this.Definition.hasOwnProperty(type)) {
        // console.log(type);
        const typeDef = this.Definition[type]
        this.Schema[type] = ext.compile(typeDef)
      }
    }
    for (const type in this.precompiled) {
      if (this.precompiled.hasOwnProperty(type)) {
        // console.log(type);
        const typeDef = this.precompiled[type]
        this.Schema[type] = typeDef
      }
    }
  }

  /**
   * Output as a formated JSON string
   */
  toString () {
    return JSON.stringify(this.Schema, undefined, 2)
  }
}

/**
 * Autorunning schema generation function
 * (Start)
 */
if (display) {
  ;(() => {
    const type = new Typings()
    console.log(type.toString())
  })()
}

module.exports = {
  Typings
}
