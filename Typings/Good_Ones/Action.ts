export interface Action {
	user: string;
	createdOn: number;
	createdBy: string;
	action: string;
	payload: Payload;
	type: string;
	id: string;
}

export interface Payload {
	appointment: string;
	lead: null;
	explanation?: string;
}
