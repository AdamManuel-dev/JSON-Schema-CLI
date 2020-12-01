export interface Appointment {
	appointmentType?: AppointmentType;
	date?: number | string;
	appointmentTime?: Date | AppointmentTimeEnum;
	type: Type;
	status?: Status;
	lead?: string;
	createdOn: number;
	id: string;
	updatedOn?: number;
	custom?: boolean;
	updatedBy?: string;
	assignee?: Assignee;
	customHour?: string;
	customMin?: string;
	customPeriod?: string;
	assignedTo?: string;
	appointmentDateType?: AppointmentDateType;
	user?: string;
	createdBy?: string;
}

export enum AppointmentDateType {
	QuarterHour = 'QuarterHour'
}

export enum AppointmentTimeEnum {
	Noon = 'Noon',
	The1000Am = '10:00am',
	The200Pm = '2:00pm',
	The330Pm = '3:30pm',
	The500Pm = '5:00pm',
	The600Pm = '6:00pm',
	The730Pm = '7:30pm'
}

export enum AppointmentType {
	Basement = 'Basement',
	Bath = 'Bath',
	Deck = 'Deck',
	Deeck = 'Deeck.',
	Fence = 'Fence',
	Kitchen = 'Kitchen',
	Roof = 'Roof',
	SidingSoffitFascia = 'Siding/Soffit-Fascia',
	WindowsDoor = 'Windows/Door'
}

export interface Assignee {
	id: string;
	displayName: string;
}

export enum Status {
	Assigned = 'ASSIGNED',
	Confirmed = 'CONFIRMED',
	CouldNotReach = 'COULD_NOT_REACH',
	New = 'NEW',
	Reschedule = 'RESCHEDULE',
	Sale = 'SALE',
	TmSurvey = 'TM_SURVEY',
	ToConfirm = 'TO_CONFIRM',
	Unassigned = 'UNASSIGNED'
}

export enum Type {
	Appointment = 'Appointment'
}
