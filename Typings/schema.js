const oas = require('kontur');
const ajv = require('ajv');
const ext = require('./ext');

class Typings {
	/**
   * Creates an array definition of partial records
   * @param {any} partial Partial Records
   */
	list = (partial) => {
		return oas.array.items(partial);
	};

	constructor() {
		/**
     * Definitions Response
     */
		this.Definition = {};

		/**
     * Schema Response
     */
		this.Schema = {};

		/**
     * Schema Response
     */
		this.Bodies = {};

		/**
     * Schema Response
     */
		this.Responses = {};

		this.setupDefinitions();
		this.setupSchema();
		this.setupBody();
		this.setupResponse();
	}

	/**
   * Creates a CosmosDB Definition of Typing
   * @param {*} partial Partial Definition of Typing
   */

	record({ partial, permissions = false, notes = false }) {
		return {
			id: oas.str.uuid.optional,
			user: oas.str.uuid.optional,
			...partial,
			// ...(permissions
			// 	? {
			// 			owner: {
			// 				users: oas.array.items(oas.str.uuid).optional,
			// 				groups: oas.array.items(oas.str.uuid).optional
			// 			}
			// 		}
			// 	: {}),
			// ...(notes
			// 	? {
			// 			noteIds: oas.array.items(oas.str.uuid).optional
			// 		}
			// 	: {}),
			createdOn: oas.int.min(946684800).max(2147483646).optional, // <Min> 01/01/2000 00:00:00 <Max> 01/19/2038 3:14:07
			createdBy: oas.str.uuid.optional.optional,
			updatedOn: oas.int.min(946684800).max(2147483646).optional, // <Min> 01/01/2000 00:00:00 <Max> 01/19/2038 3:14:07
			updatedBy: oas.str.uuid.optional
		};
	}

	listAndSingleSchema = (partial) => {
		const key = Object.keys(partial)[0];
		const record = partial[key];
		return {
			[key]: record,
			[`${key}-list`]: this.list(partial[key])
		};
	};

	addDescription(description, schema) {
		return {
			description,
			schema: oas.compile(schema)
		};
	}

	successAndError({
		partial,
		successDescription = 'Successful Response Description',
		errorDescription = 'Error Response Description'
	}) {
		return {
			SuccessResponse: this.addDescription(successDescription, {
				success: ext.str.enum('false'),
				response: partial
			}),
			ErrorResponse: this.addDescription(errorDescription, {
				success: ext.str.enum('false'),
				error: {}
			})
		};
	}

	setupDefinitions() {
		/**
     * UUID Shortcut
     */
		const id = oas.str.uuid;
		const PhoneNumber = oas.str.match(new RegExp(/\d\(\d{3}\)\d{3}-\d{4}/));
		const Timedate = oas.int.min(946684800).max(2147483646);
		// const Score = this.record({
		// 	type: oas.object.schema({}),
		// 	status: oas.object.schema({}),
		// 	weight: oas.number.max(1.0).min(0.0),
		// 	minimum: oas.number.optional,
		// 	goal: oas.number.optional
		// });

		this.Definition = {
			Action: this.record({
				partial: {
					action: ext.str,
					payload: {
						appointment: ext.str,
						lead: ext.str,
						explanation: ext.str.optional
					}
				}
			}),
			BotTask: this.record({
				partial: {
					id,
					botTaskId: ext.str,
					friendlyName: ext.str,
					uniqueName: ext.str,
					actions: {
						actions: ext.array.items({
							say: oas.str
						})
					},
					type: ext.str.enum('BotTask'),
					actionObject: {
						actions: ext.array.items({
							say: {
								speech: ext.str
							}
						})
					},
					botTaskPathAssistantSid: ext.str.optional
				}
			}),
			Twilio: this.record({
				partial: {
					isoCountryCode: ext.str,
					TwillioURL: ext.array.items(ext.str).optional,
					ApplicationSid: ext.array.items(ext.str),
					recordingSid: ext.array.items(ext.str).optional,
					IncomingPhoneNumberSid: ext.array.items(ext.str).optional,
					OutgoingCallerIdSid: ext.array.items(ext.str).optional,
					ConferenceSid: ext.array.items(ext.str).optional,
					CallSid: ext.array.items(ext.str),
					messageSid: ext.array.items(ext.str).optional
				}
			}),
			// PayrollTotals: this.record({
			// 	partial: {
			// 		type: ext.str.enum('PayrollTotal'),
			// 		companyDebit: oas.str.maxlen(80),
			// 		reimbursements: oas.str.maxlen(80),
			// 		netPay: oas.str.maxlen(80),
			// 		correction: oas.str.maxlen(80),
			// 		employerTaxes: oas.str.maxlen(80),
			// 		employeeTaxes: oas.str.maxlen(80),
			// 		benefits: oas.str.maxlen(80),
			// 		employeeBenefitsDeductions: oas.str.maxlen(80),
			// 		employeeComponensations: oas.array.items({
			// 			type: ext.str.enum('EmployeeCompensations'),
			// 			grossPay: oas.array.items(oas.str),
			// 			netPay: oas.array.items(oas.str),
			// 			paymentMethod: oas.array.items(oas.str),
			// 			fixedCompensationid: oas.array.items(id),
			// 			hourlyid: oas.array.items(id)
			// 		}).optional,
			// 		FixedCompensation: oas.array.items({
			// 			type: ext.str.enum('FixedCompensation'),
			// 			name: oas.str.maxlen(80),
			// 			amount: oas.str.maxlen(80),
			// 			jobId: oas.str.maxlen(80)
			// 		}).optional,
			// 		HourlyCompensations: oas.array.items({
			// 			type: ext.str.enum('HourlyCompensations'),
			// 			name: oas.str.maxlen(80), // Regular Hours | Overtime | Double Overtime
			// 			hours: oas.str.maxlen(80),
			// 			jobId: oas.str.maxlen(80),
			// 			compensation_multiplier: oas.str.maxlen(80)
			// 		}).optional,
			// 		PayrollDeductions: oas.array.items({
			// 			type: ext.str.enum('PayrollDeductions'),
			// 			name: oas.str.maxlen(80),
			// 			amount: oas.str.maxlen(80)
			// 		}),
			// 		Taxes: oas.array.items({
			// 			type: ext.str.enum('Taxes'),
			// 			status: ext.str.enum('OWED', 'PAYED'),
			// 			name: oas.str.maxlen(80),
			// 			employer: oas.bool,
			// 			amount: oas.str.maxlen(80)
			// 		}),
			// 		Benefits: oas.array.items({
			// 			type: ext.str.enum('Benefits'),
			// 			name: oas.str.maxlen(80),
			// 			employeeDeduction: oas.str.maxlen(80),
			// 			companyContribution: oas.str.maxlen(80),
			// 			imputed: oas.bool
			// 		})
			// 	}
			// }),
			User: this.record({
				partial: {
					type: ext.str.enum('User'),
					faceListId: id.optional,
					gender: oas.str.maxlen(80),
					companyId: id,
					verified: oas.bool,
					firstName: oas.str.maxlen(80),
					lastName: oas.str.maxlen(80),
					phoneNumber: PhoneNumber,
					dateOfBirth: oas.int.between(18, 100),
					companyTitle: oas.str.maxlen(80).optional,
					ipAddress: oas.str.maxlen(80).optional,
					group: oas.str.maxlen(80),
					userType: oas.str.maxlen(80),
					email: oas.str.email,
					ssn: oas.str.maxlen(80).optional,
					permissionId: id.optional,
					theming: {
						type: ext.str.enum('UserSettings').optional,
						productIDs: oas.array.items(id).optional,
						darkmode: oas.bool
					},
					twillioId: id.optional,
					intuitId: id.optional,
					payrollId: id.optional,
					contractId: id.optional
				}
			}),
			Residence: this.record({
				partial: {
					type: ext.str.enum('Address'),
					streetAddress: oas.str.maxlen(80),
					city: oas.str.maxlen(80),
					zip: oas.str.maxlen(80),
					state: oas.str.maxlen(80),
					address: {
						streetNumber: oas.str.maxlen(80),
						streetName: oas.str.maxlen(80),
						municipality: oas.str.maxlen(80),
						countrySecondarySubdivision: oas.str.maxlen(80),
						countryTertiarySubdivision: oas.str.maxlen(80),
						countrySubdivision: oas.str.maxlen(2),
						countrySubdivisionName: oas.str.maxlen(80),
						postalCode: oas.str.maxlen(5),
						extendedPostalCode: oas.str.maxlen(9),
						countryCode: oas.str.maxlen(4),
						country: oas.str.maxlen(80),
						countryCodeISO3: oas.str.maxlen(5),
						freeformAddress: oas.str.maxlen(100),
						localName: oas.str.maxlen(80)
					},
					location: {
						lat: oas.number,
						lon: oas.number
					}
				}
			}),
			Twillio: this.record({
				partial: {
					type: ext.str.enum('Twillio'),
					messageSid: oas.array.items(oas.str),
					recordingSid: oas.array.items(oas.str),
					ApplicationSid: oas.array.items(oas.str),
					TwillioURL: oas.array.items(oas.str),
					isoCountryCode: oas.array.items(oas.str),
					CallSid: oas.array.items(oas.str),
					ConferenceSid: oas.array.items(oas.str),
					IncomingPhoneNumberSid: oas.array.items(oas.str),
					OutgoingCallerIdSid: oas.array.items(oas.str)
				}
			}),
			Phonecall: this.record({
				partial: {
					id,
					type: ext.str.enum('Phonecall'),
					direction: ext.str.enum('OUTBOUND', 'INBOUND')
					// Lead
					// Residence
					// Subject
					// taskId,
					//
				}
			}),
			// ...predefined,
			// TODO: Fix this record
			// Payroll: this.record({
			//   partial: {
			//     type: ext.str.enum('Payroll'),
			//     payrollDeadline: oas.str.maxlen(80),
			//     checkDate: oas.str.maxlen(80),
			//     processed: oas.str.maxlen(80),
			//     payRoleId: oas.str.maxlen(80),
			//     payrollTotals: oas.array.items(predefined.PayrollTotal),
			//     employeeCompensations: oas.array.items(
			//       predefined.EmployeeCompensations
			//     ),
			//     fixedCompensation: oas.array.items(predefined.FixedCompensation),
			//     hourlyCompensations: oas.array.items(predefined.HourlyCompensations),
			//     benefits: oas.array.items(predefined.Benefits),
			//     payrollDeductions: oas.array.items(predefined.PayrollDeductions),
			//     taxes: oas.array.items(predefined.Taxes)
			//   }
			// }),
			PaidTimeOff: this.record({
				partial: {
					type: ext.str.enum('PaidTimeOff'),
					name: oas.str.maxlen(80),
					hours: oas.str.maxlen(80),
					user: ext.presets.id
				}
			}),
			Note: this.record({
				partial: {
					type: ext.str.enum('Note'),
					status: ext.str.enum('DRAFT', 'SAVED', 'REMOVED'),
					noteText: oas.str.maxlen(240).minlen(0).optional
				}
			}),
			Message: this.record({
				partial: {
					type: ext.str.enum('Message'),
					status: ext.str.enum('New', 'Draft', 'Viewed', 'Archived'),
					to: oas.str,
					sendType: ext.str.enum('Group', 'User'),
					message: oas.str,
					sentAt: Timedate.optional,
					seenAt: Timedate.optional
				}
			}),
			Scorecard: this.record({
				partial: {
					title: oas.str.maxlen(80),
					description: oas.str.maxlen(200),
					scores: oas.array.items(ext.number),
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
						'AVOID', // DO NOT DISTERB LIST
						'INTEREST', // NO APPOINTMENT, "BLOWOUT", GOES TO RECYCLE
						'NEW', // NO APPOINTMENT, NOT AVOID, NOT CUSTOMER, GOES TO RECYCLE AFTER X ATTEMPTS
						'CUSTOMER', // PREVIOUS
						'RECYCLE', //  RECYCLED
						'PITCHING', // HAS APPOINTMENT
						'ORDER', // IN PRODUCTION (before job)
						'JOB' // IN PRODUCTION (job in progress)
					),
					ownerType: ext.str.enum('Single', 'Dual'),
					title: ext.str.enum('Mr.', 'Mrs.'),
					firstName: oas.str.maxlen(80),
					lastName: oas.str.maxlen(80),
					title_2: ext.str.enum('Mr.', 'Mrs.').optional,
					firstName_2: oas.str.maxlen(80).minlen(0).optional,
					lastName_2: oas.str.optional,
					emailAddress: oas.str.email,
					primaryPhone: PhoneNumber,
					primaryPhoneType: ext.str.enum('Cell', 'Work', 'Home', 'Fax'),
					secondaryPhone: PhoneNumber.optional,
					secondaryPhoneType: ext.str.enum('Cell', 'Work', 'Home', 'Fax').optional,
					residence: id,
					additionalEmails: oas.array.items(oas.str.email),
					additionalPhones: oas.array.items(PhoneNumber),
					leadSource: oas.array.items(oas.str) // Primary, Secondary N-ary, source of leads
				}
			}),
			Timeclock: this.record({
				partial: {
					type: ext.str.enum('Timeclock'),
					status: ext.str.enum('OFF_CLOCK', 'ON_CLOCK', 'VACATION', 'SICK_LEAVE', 'START_BREAK', 'END_BREAK'),
					date: oas.int.min(946684800 / 86400).max(Number.parseInt(2147483646 / 86400 + ''))
				}
			}),
			UserLocation: this.record({
				partial: {
					type: ext.str.enum('UserLocation'),
					locations: {
						lat: oas.number,
						lon: oas.number
					},
					currentArea: id.optional,
					date: oas.int.min(946684800 / 86400).max(Number.parseInt(2147483646 / 86400 + ''))
				}
			}),
			Invoice: this.record({
				partial: {
					type: ext.str.enum('Sales'),
					salesID: id,
					Description: oas.str.maxlen(80),
					Amount: oas.str.maxlen(80),
					DetailType: oas.str.maxlen(80),
					UnitPrice: oas.str.maxlen(80),
					Qty: oas.str.maxlen(80),
					TaxCodeRef: oas.str.maxlen(80),
					salesItemLineDetail: oas.str.maxlen(80)
				}
			}),
			Corporation: this.record({
				partial: {
					type: ext.str.enum('Corporation'),
					corporationID: id,
					businessClassification: oas.str.maxlen(80),
					businessType: oas.str.maxlen(80),
					businessName: oas.str.maxlen(80),
					ein: oas.str.maxlen(80),
					businessAddress: oas.array.items(id)
				}
			}),
			Role: this.record({
				partial: {
					roleId: oas.array.items(id),
					roleName: oas.array.items(id),
					detailID: id,
					vendorID: id
				}
			}),
			Payment: this.record({
				partial: {
					type: ext.str.enum('ContractStatus'),
					contractId: oas.str.maxlen(80),
					contractStatus: oas.str.maxlen(80)
				}
			}),
			Appointment: this.record({
				partial: {
					appointmentTime: oas.str.maxlen(15),
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
					date: oas.number.max(50),
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
					stepNumber: oas.int.optional,
					notes: oas.array.items(id).optional
				}
			}),
			Contract: this.record({
				partial: {
					type: ext.str.enum('Contract'),
					status: ext.str.enum(
						'SIGNED', // CONTRACT SIGNED, AWAITING APPROVAL
						'APPROVED', // CONTRACT APPROVED, NOW PRODUCTION
						'PENDING', // CONTRACT INCOMPLETE
						'SENT', // EMAIL BASED CONTRACT ??
						'DRAFT' // BLANK CONTRACT
					),
					contract: id,
					user: id,
					lead: id,
					order: id,
					datetime: Timedate,
					name: oas.str.maxlen(50),
					lastRequested: Timedate.optional
				}
			}),
			Order: this.record({
				partial: {
					type: ext.str.enum('Order'),
					status: ext.str.enum(
						'saleConfirmed',
						'signedContract',
						'contractApprove',
						'addProduction',
						'orderCancel',
						'measureProduct',
						'addQuickbooks',
						'financeRejected',
						'deadLead',
						'permit',
						'lienWaver',
						'digright',
						'executeOrder',
						'intuitBookCondfirmation',
						'deliverMaterial',
						'orderProgress',
						'problemOrder',
						'orderCompleted',
						'customerSurver',
						'recycle'
					),
					legal: {
						permit: {
							exists: oas.bool,
							path: oas.str.optional
						},
						signature: {
							exists: oas.bool,
							path: oas.str.optional
						},
						contract: {
							exists: oas.bool,
							path: oas.str.optional
						},
						lienWaver: {
							exists: oas.bool,
							path: oas.str.optional
						},
						digright: {
							exists: oas.bool,
							path: oas.str.optional
						}
					},
					sales: {
						commission: oas.number,
						users: oas.array.items(id)
					},
					measurementTotals: oas.array.items({
						unitsPerSection: oas.number,
						unit: oas.number,
						extras: oas.any
					}),
					materialTotals: oas.array.items({
						unitsPerSection: oas.number,
						unit: oas.number,
						costPerUnit: oas.number,
						total: oas.number
					}),
					financialTotals: oas.array.items({
						perSection: oas.number,
						extraPrice: oas.number,
						sectionItem: oas.number,
						total: oas.number
					}),
					financial: ext.str.enum('ACCEPTED', 'REJECTED'),
					alive: ext.str.enum('DEAD', 'RECYCLE', 'ACTIVE')
				}
			}),
			Product: this.record({
				partial: {
					type: ext.str.enum('Product'),
					status: ext.str.enum(
						'NEW_PRODUCT',
						'PRODUCT_MEASURED',
						'PURCHASED_PRODUCT',
						'PRODUCT_COMPLETE',
						'PRODUCT_CANCELED'
					),
					orderId: id,
					vendor: {
						name: oas.str,
						id
					},
					productType: ext.str,
					category: ext.str,
					// TODO: HAVE THIS BE THE CORRECT TYPINGS
					// measurements: oas.array.items(oas.any),
					// materials: oas.array.items(oas.any),
					totals: oas.array.items(oas.number)
				}
			}),
			Timeoff: this.record({
				partial: {
					type: ext.str.enum('Timeoff'),
					status: ext.str.enum('PENDING', 'ACCEPTED', 'REJECTED'),
					department: ext.str.enum('Finance', 'Marketing', 'Production', 'Sales'),
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
					customReason: oas.str.maxlen(80),
					oneTimeRequest: Timedate,
					workDays: ext.str.enum('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
					recurringRequest: Timedate,
					repeatFor: oas.str.maxlen(80),
					halfDayTime: oas.str.maxlen(80),
					halfDayTime_2: oas.str.maxlen(80),
					fullDay: oas.str.maxlen(80)
				}
			}),
			Permission: this.record({
				partial: {
					type: ext.str.enum('Permission'),
					user: oas.str.uuid.optional,
					group: oas.str.uuid.optional,
					scopes: oas.array.items(oas.str.maxlen(80)),
					records: oas.array.items(oas.str.uuid),
					tabs: oas.array.items(oas.str.maxlen(80))
				}
			}),
			Note: this.record({
				partial: {
					type: ext.str.enum('Permission'),
					user: oas.str.uuid.optional,
					group: oas.str.uuid.optional,
					scopes: oas.array.items(oas.str.maxlen(80)),
					records: oas.array.items(oas.str.uuid),
					tabs: oas.array.items(oas.str.maxlen(80))
				}
			})
		};
	}

	precompiled = {};

	setupBody() {
		this.Bodies = {
			['/leadManagement/fullLead']: oas.compile({})
		};
	}

	setupResponse() {
		this.Responses = {
			['/leadManagement/fullLead']: this.successAndError({
				successDescription: 'Returns the Full Lead Sub-Records',
				partial: {}
			})
		};
	}

	/**
   * Loop through definitions from above and output JSON Schema
   */
	setupSchema() {
		for (const type in this.Definition) {
			if (this.Definition.hasOwnProperty(type)) {
				// console.log(type);
				const typeDef = this.Definition[type];
				this.Schema[type] = oas.compile(typeDef);
			}
		}
		for (const type in this.precompiled) {
			if (this.precompiled.hasOwnProperty(type)) {
				// console.log(type);
				const typeDef = this.precompiled[type];
				this.Schema[type] = typeDef;
			}
		}
	}

	/**
   * Output as a formated JSON string
   */
	toString() {
		const output = {
			definitions: this.Schema
			// bodies: this.Bodies,
			// responses: this.Responses
		};
		return JSON.stringify(output, undefined, 2);
	}
}

/**
 * Autorunning schema generation function
 * (Start)
 */
(() => {
	const type = new Typings();
	console.log(type.toString());
})();

module.exports = {
	Typings
};
