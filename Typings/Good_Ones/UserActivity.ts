export interface UserActivityRecord {
	id: string;
	activity: UserActivity;
	record: Record;
}

export enum UserActivity {
	Assign = 'ASSIGN',
	Blowout = 'BLOWOUT',
	CallCenter = 'CALL_CENTER',
	Confirmed = 'CONFIRMED',
	CouldNotReach = 'COULD_NOT_REACH',
	Extra = 'EXTRA',
	NoShow = 'NO_SHOW',
	OneLeg = 'ONE_LEG',
	PitchMiss = 'PITCH_MISS',
	Recycle = 'RECYCLE',
	Rehash = 'REHASH',
	RepTie = 'REP_TIE',
	Reschedule = 'RESCHEDULE',
	Sale = 'SALE',
	TmSurvey = 'TM_SURVEY'
}

export interface Record {
	appointmentType: string;
	date: number;
	appointmentTime: string;
	type: string;
	status: string;
	lead: string;
	createdOn: number;
	id: string;
	explanation?: string;
	updatedOn: number;
	custom?: boolean;
	updatedBy?: string;
	assignee?: Assignee;
	assignee_2?: Assignee;
}

export interface Assignee {
	id: string;
	displayName: string;
}
