module.exports = {
	definitions: {
		User: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'User' ],
					type: 'string'
				},
				faceListId: {
					format: 'uuid',
					type: 'string'
				},
				gender: {
					maxLength: 80,
					type: 'string'
				},
				companyId: {
					format: 'uuid',
					type: 'string'
				},
				verified: {
					type: 'boolean'
				},
				firstName: {
					maxLength: 80,
					type: 'string'
				},
				lastName: {
					maxLength: 80,
					type: 'string'
				},
				phoneNumber: {
					pattern: '\\d\\(\\d{3}\\)\\d{3}-\\d{4}',
					type: 'string'
				},
				dateOfBirth: {
					minimum: 18,
					maximum: 100,
					type: 'integer'
				},
				ssn: {
					maxLength: 80,
					type: 'string'
				},
				companyTitle: {
					maxLength: 80,
					type: 'string'
				},
				ipAddress: {
					maxLength: 80,
					type: 'string'
				},
				group: {
					maxLength: 80,
					type: 'string'
				},
				userType: {
					maxLength: 80,
					type: 'string'
				},
				email: {
					format: 'email',
					type: 'string'
				},
				permissionId: {
					format: 'uuid',
					type: 'string'
				},
				theming: {
					properties: {
						type: {
							enum: [ 'UserSettings' ],
							type: 'string'
						},
						productIDs: {
							items: {
								format: 'uuid',
								type: 'string'
							},
							type: 'array'
						},
						darkmode: {
							type: 'boolean'
						}
					},
					type: 'object',
					required: [ 'darkmode' ]
				},
				twillioId: {
					format: 'uuid',
					type: 'string'
				},
				intuitId: {
					format: 'uuid',
					type: 'string'
				},
				payrollId: {
					format: 'uuid',
					type: 'string'
				},
				contractId: {
					format: 'uuid',
					type: 'string'
				},
				noteIds: {
					items: {
						format: 'uuid',
						type: 'string'
					},
					type: 'array'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [
				'type',
				'gender',
				'verified',
				'firstName',
				'lastName',
				'dateOfBirth',
				'group',
				'userType',
				'email',
				'theming'
			]
		},
		Residence: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'Address' ],
					type: 'string'
				},
				streetAddress: {
					maxLength: 80,
					type: 'string'
				},
				city: {
					maxLength: 80,
					type: 'string'
				},
				zip: {
					maxLength: 80,
					type: 'string'
				},
				state: {
					maxLength: 80,
					type: 'string'
				},
				address: {
					properties: {
						streetNumber: {
							maxLength: 80,
							type: 'string'
						},
						streetName: {
							maxLength: 80,
							type: 'string'
						},
						municipality: {
							maxLength: 80,
							type: 'string'
						},
						countrySecondarySubdivision: {
							maxLength: 80,
							type: 'string'
						},
						countryTertiarySubdivision: {
							maxLength: 80,
							type: 'string'
						},
						countrySubdivision: {
							maxLength: 2,
							type: 'string'
						},
						countrySubdivisionName: {
							maxLength: 80,
							type: 'string'
						},
						postalCode: {
							maxLength: 5,
							type: 'string'
						},
						extendedPostalCode: {
							maxLength: 9,
							type: 'string'
						},
						countryCode: {
							maxLength: 4,
							type: 'string'
						},
						country: {
							maxLength: 80,
							type: 'string'
						},
						countryCodeISO3: {
							maxLength: 5,
							type: 'string'
						},
						freeformAddress: {
							maxLength: 100,
							type: 'string'
						},
						localName: {
							maxLength: 80,
							type: 'string'
						}
					},
					type: 'object',
					required: [
						'streetNumber',
						'streetName',
						'municipality',
						'countrySecondarySubdivision',
						'countryTertiarySubdivision',
						'countrySubdivision',
						'countrySubdivisionName',
						'postalCode',
						'extendedPostalCode',
						'countryCode',
						'country',
						'countryCodeISO3',
						'freeformAddress',
						'localName'
					]
				},
				location: {
					properties: {
						lat: {
							type: 'number'
						},
						lon: {
							type: 'number'
						}
					},
					type: 'object',
					required: [ 'lat', 'lon' ]
				},
				owner: {
					properties: {
						users: {
							items: {
								format: 'uuid',
								type: 'string'
							},
							type: 'array'
						},
						groups: {
							items: {
								format: 'uuid',
								type: 'string'
							},
							type: 'array'
						}
					},
					type: 'object'
				},
				noteIds: {
					items: {
						format: 'uuid',
						type: 'string'
					},
					type: 'array'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'type', 'streetAddress', 'city', 'zip', 'state', 'address', 'location', 'owner' ]
		},
		Twillio: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'Twillio' ],
					type: 'string'
				},
				messageSid: {
					items: {
						type: 'string'
					},
					type: 'array'
				},
				recordingSid: {
					items: {
						type: 'string'
					},
					type: 'array'
				},
				ApplicationSid: {
					items: {
						type: 'string'
					},
					type: 'array'
				},
				TwillioURL: {
					items: {
						type: 'string'
					},
					type: 'array'
				},
				isoCountryCode: {
					items: {
						type: 'string'
					},
					type: 'array'
				},
				CallSid: {
					items: {
						type: 'string'
					},
					type: 'array'
				},
				ConferenceSid: {
					items: {
						type: 'string'
					},
					type: 'array'
				},
				IncomingPhoneNumberSid: {
					items: {
						type: 'string'
					},
					type: 'array'
				},
				OutgoingCallerIdSid: {
					items: {
						type: 'string'
					},
					type: 'array'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [
				'type',
				'messageSid',
				'recordingSid',
				'ApplicationSid',
				'TwillioURL',
				'isoCountryCode',
				'CallSid',
				'ConferenceSid',
				'IncomingPhoneNumberSid',
				'OutgoingCallerIdSid'
			]
		},
		Phonecall: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'Phonecall' ],
					type: 'string'
				},
				status: {
					enum: [
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
					],
					type: 'string'
				},
				direction: {
					enum: [ 'OUTBOUND', 'INBOUND' ],
					type: 'string'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'type', 'status', 'direction' ]
		},
		PaidTimeOff: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'PaidTimeOff' ],
					type: 'string'
				},
				name: {
					maxLength: 80,
					type: 'string'
				},
				hours: {
					maxLength: 80,
					type: 'string'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'type', 'name', 'hours' ]
		},
		Note: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'Note' ],
					type: 'string'
				},
				status: {
					enum: [ 'DRAFT', 'SAVED', 'REMOVED' ],
					type: 'string'
				},
				noteText: {
					maxLength: 240,
					minLength: 0,
					type: 'string'
				},
				imageURL: {
					type: 'string'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'type', 'status' ]
		},
		Message: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'Message' ],
					type: 'string'
				},
				status: {
					enum: [ 'New', 'Draft', 'Viewed', 'Archived' ],
					type: 'string'
				},
				to: {
					type: 'string'
				},
				sendType: {
					enum: [ 'Group', 'User' ],
					type: 'string'
				},
				message: {
					type: 'string'
				},
				sentAt: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				seenAt: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				owner: {
					properties: {
						users: {
							items: {
								format: 'uuid',
								type: 'string'
							},
							type: 'array'
						},
						groups: {
							items: {
								format: 'uuid',
								type: 'string'
							},
							type: 'array'
						}
					},
					type: 'object'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'type', 'status', 'to', 'sendType', 'message', 'owner' ]
		},
		Scorecard: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				title: {
					maxLength: 80,
					type: 'string'
				},
				description: {
					maxLength: 200,
					type: 'string'
				},
				scores: {
					items: {
						properties: {
							id: {
								format: 'uuid',
								type: 'string'
							},
							user: {
								format: 'uuid',
								type: 'string'
							},
							createdOn: {
								minimum: 946684800,
								maximum: 2147483646,
								type: 'integer'
							},
							createdBy: {
								format: 'uuid',
								type: 'string'
							},
							updatedOn: {
								minimum: 946684800,
								maximum: 2147483646,
								type: 'integer'
							},
							updatedBy: {
								format: 'uuid',
								type: 'string'
							}
						},
						type: 'object'
					},
					type: 'array'
				},
				scorecardType: {
					enum: [ 'GROUP', 'INDIVIDUAL' ],
					type: 'string'
				},
				series: {
					enum: [ 'SINGLE', 'TIME' ],
					type: 'string'
				},
				display: {
					enum: [
						'AREA_CHART',
						'BAR_CHART',
						'COMPLEX_GAUGE',
						'GROUPED_BAR_CHART',
						'HEAT_MAP',
						'LINE_CHART',
						'NUMBER_CARD',
						'PIE_CHART',
						'POLAR_CHART'
					],
					type: 'string'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'title', 'description', 'scores', 'scorecardType', 'series', 'display' ]
		},
		Lead: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'Lead' ],
					type: 'string'
				},
				status: {
					enum: [ 'AVOID', 'INTEREST', 'NEW', 'CUSTOMER', 'RECYCLE', 'PITCHING', 'ORDER', 'JOB' ],
					type: 'string'
				},
				ownerType: {
					enum: [ 'Single', 'Dual' ],
					type: 'string'
				},
				title: {
					enum: [ 'Mr.', 'Mrs.' ],
					type: 'string'
				},
				firstName: {
					maxLength: 80,
					type: 'string'
				},
				lastName: {
					maxLength: 80,
					type: 'string'
				},
				title_2: {
					enum: [ 'Mr.', 'Mrs.' ],
					type: 'string'
				},
				firstName_2: {
					maxLength: 80,
					minLength: 0,
					type: 'string'
				},
				lastName_2: {
					type: 'string'
				},
				emailAddress: {
					format: 'email',
					type: 'string'
				},
				primaryPhone: {
					pattern: '\\d\\(\\d{3}\\)\\d{3}-\\d{4}',
					type: 'string'
				},
				primaryPhoneType: {
					enum: [ 'Cell', 'Work', 'Home', 'Fax' ],
					type: 'string'
				},
				secondaryPhone: {
					pattern: '\\d\\(\\d{3}\\)\\d{3}-\\d{4}',
					type: 'string'
				},
				secondaryPhoneType: {
					enum: [ 'Cell', 'Work', 'Home', 'Fax' ],
					type: 'string'
				},
				residence: {
					format: 'uuid',
					type: 'string'
				},
				additionalEmails: {
					items: {
						format: 'email',
						type: 'string'
					},
					type: 'array'
				},
				additionalPhones: {
					items: {
						pattern: '\\d\\(\\d{3}\\)\\d{3}-\\d{4}',
						type: 'string'
					},
					type: 'array'
				},
				leadSource: {
					items: {
						type: 'string'
					},
					type: 'array'
				},
				owner: {
					properties: {
						users: {
							items: {
								format: 'uuid',
								type: 'string'
							},
							type: 'array'
						},
						groups: {
							items: {
								format: 'uuid',
								type: 'string'
							},
							type: 'array'
						}
					},
					type: 'object'
				},
				noteIds: {
					items: {
						format: 'uuid',
						type: 'string'
					},
					type: 'array'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [
				'type',
				'status',
				'ownerType',
				'title',
				'firstName',
				'lastName',
				'emailAddress',
				'primaryPhoneType',
				'additionalEmails',
				'additionalPhones',
				'leadSource',
				'owner'
			]
		},
		Timeclock: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'Timeclock' ],
					type: 'string'
				},
				status: {
					enum: [ 'OFF_CLOCK', 'ON_CLOCK', 'VACATION', 'SICK_LEAVE', 'START_BREAK', 'END_BREAK' ],
					type: 'string'
				},
				date: {
					minimum: 10957,
					maximum: 24855,
					type: 'integer'
				},
				noteIds: {
					items: {
						format: 'uuid',
						type: 'string'
					},
					type: 'array'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'type', 'status', 'date' ]
		},
		UserLocation: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'UserLocation' ],
					type: 'string'
				},
				locations: {
					properties: {
						lat: {
							type: 'number'
						},
						lon: {
							type: 'number'
						}
					},
					type: 'object',
					required: [ 'lat', 'lon' ]
				},
				currentArea: {
					format: 'uuid',
					type: 'string'
				},
				date: {
					minimum: 10957,
					maximum: 24855,
					type: 'integer'
				},
				owner: {
					properties: {
						users: {
							items: {
								format: 'uuid',
								type: 'string'
							},
							type: 'array'
						},
						groups: {
							items: {
								format: 'uuid',
								type: 'string'
							},
							type: 'array'
						}
					},
					type: 'object'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'type', 'locations', 'date', 'owner' ]
		},
		Invoice: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'Sales' ],
					type: 'string'
				},
				salesID: {
					format: 'uuid',
					type: 'string'
				},
				Description: {
					maxLength: 80,
					type: 'string'
				},
				Amount: {
					maxLength: 80,
					type: 'string'
				},
				DetailType: {
					maxLength: 80,
					type: 'string'
				},
				UnitPrice: {
					maxLength: 80,
					type: 'string'
				},
				Qty: {
					maxLength: 80,
					type: 'string'
				},
				TaxCodeRef: {
					maxLength: 80,
					type: 'string'
				},
				salesItemLineDetail: {
					maxLength: 80,
					type: 'string'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [
				'type',
				'Description',
				'Amount',
				'DetailType',
				'UnitPrice',
				'Qty',
				'TaxCodeRef',
				'salesItemLineDetail'
			]
		},
		Corporation: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'Corporation' ],
					type: 'string'
				},
				corporationID: {
					format: 'uuid',
					type: 'string'
				},
				businessClassification: {
					maxLength: 80,
					type: 'string'
				},
				businessType: {
					maxLength: 80,
					type: 'string'
				},
				businessName: {
					maxLength: 80,
					type: 'string'
				},
				ein: {
					maxLength: 80,
					type: 'string'
				},
				businessAddress: {
					items: {
						format: 'uuid',
						type: 'string'
					},
					type: 'array'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'type', 'businessClassification', 'businessType', 'businessName', 'ein', 'businessAddress' ]
		},
		Role: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				roleId: {
					items: {
						format: 'uuid',
						type: 'string'
					},
					type: 'array'
				},
				roleName: {
					items: {
						format: 'uuid',
						type: 'string'
					},
					type: 'array'
				},
				detailID: {
					format: 'uuid',
					type: 'string'
				},
				vendorID: {
					format: 'uuid',
					type: 'string'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'roleId', 'roleName' ]
		},
		Payment: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'ContractStatus' ],
					type: 'string'
				},
				contractId: {
					maxLength: 80,
					type: 'string'
				},
				contractStatus: {
					maxLength: 80,
					type: 'string'
				},
				owner: {
					properties: {
						users: {
							items: {
								format: 'uuid',
								type: 'string'
							},
							type: 'array'
						},
						groups: {
							items: {
								format: 'uuid',
								type: 'string'
							},
							type: 'array'
						}
					},
					type: 'object'
				},
				noteIds: {
					items: {
						format: 'uuid',
						type: 'string'
					},
					type: 'array'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'type', 'contractId', 'contractStatus', 'owner' ]
		},
		Appointment: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				appointmentTime: {
					maxLength: 15,
					type: 'string'
				},
				type: {
					enum: [ 'Appointment' ],
					type: 'string'
				},
				appointmentType: {
					enum: [
						'Windows/Door',
						'Siding/Soffit-Fascia',
						'Roof',
						'Fence',
						'Deck',
						'Bath',
						'Basement',
						'Kitchen'
					],
					type: 'string'
				},
				date: {
					maximum: 50,
					type: 'number'
				},
				status: {
					enum: [
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
					],
					type: 'string'
				},
				lead: {
					format: 'uuid',
					type: 'string'
				},
				stepNumber: {
					type: 'integer'
				},
				notes: {
					items: {
						format: 'uuid',
						type: 'string'
					},
					type: 'array'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'appointmentTime', 'type', 'appointmentType', 'date', 'status' ]
		},
		Contract: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'Contract' ],
					type: 'string'
				},
				status: {
					enum: [ 'SIGNED', 'APPROVED', 'PENDING', 'SENT', 'DRAFT' ],
					type: 'string'
				},
				contract: {
					format: 'uuid',
					type: 'string'
				},
				lead: {
					format: 'uuid',
					type: 'string'
				},
				order: {
					format: 'uuid',
					type: 'string'
				},
				datetime: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				name: {
					maxLength: 50,
					type: 'string'
				},
				lastRequested: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'type', 'status', 'name' ]
		},
		Product: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'Product' ],
					type: 'string'
				},
				status: {
					enum: [
						'NEW_PRODUCT',
						'PRODUCT_MEASURED',
						'PURCHASED_PRODUCT',
						'PRODUCT_COMPLETE',
						'PRODUCT_CANCELED'
					],
					type: 'string'
				},
				orderId: {
					format: 'uuid',
					type: 'string'
				},
				vendor: {
					properties: {
						name: {
							type: 'string'
						},
						id: {
							format: 'uuid',
							type: 'string'
						}
					},
					type: 'object',
					required: [ 'name' ]
				},
				productType: {
					type: 'string'
				},
				category: {
					type: 'string'
				},
				totals: {
					items: {
						type: 'number'
					},
					type: 'array'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'type', 'status', 'vendor', 'productType', 'category', 'totals' ]
		},
		Permission: {
			properties: {
				id: {
					format: 'uuid',
					type: 'string'
				},
				user: {
					format: 'uuid',
					type: 'string'
				},
				type: {
					enum: [ 'Permission' ],
					type: 'string'
				},
				group: {
					format: 'uuid',
					type: 'string'
				},
				scopes: {
					items: {
						maxLength: 80,
						type: 'string'
					},
					type: 'array'
				},
				records: {
					items: {
						format: 'uuid',
						type: 'string'
					},
					type: 'array'
				},
				tabs: {
					items: {
						maxLength: 80,
						type: 'string'
					},
					type: 'array'
				},
				createdOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				createdBy: {
					format: 'uuid',
					type: 'string'
				},
				updatedOn: {
					minimum: 946684800,
					maximum: 2147483646,
					type: 'integer'
				},
				updatedBy: {
					format: 'uuid',
					type: 'string'
				}
			},
			type: 'object',
			required: [ 'type', 'scopes', 'records', 'tabs' ]
		}
	}
};
