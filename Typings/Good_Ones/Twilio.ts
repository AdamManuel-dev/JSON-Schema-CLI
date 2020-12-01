export interface Twilio {
	user?: string;
	createdOn: number;
	createdBy: string;
	updatedBy?: string;
	isoCountryCode?: string[];
	TwillioURL?: string[];
	updatedOn?: number;
	type: string;
	ApplicationSid?: string[];
	recordingSid?: string[];
	IncomingPhoneNumberSid?: string[];
	OutgoingCallerIdSid?: string[];
	ConferenceSid?: string[];
	CallSid?: string[];
	messageSid?: string[];
	id: string;
}
