export interface Order {
	user?: string;
	createdOn: number;
	createdBy: string;
	financialTotals?: FinancialTotal[];
	updatedBy?: string;
	alive?: string;
	materialTotals?: MaterialTotal[];
	financial?: string;
	updatedOn?: number;
	type: Type;
	sales?: Sales;
	measurementTotals?: MeasurementTotal[];
	legal?: Legal;
	status?: string;
	id: string;
	success?: string;
	response?: Response;
	lead?: string;
}

export interface FinancialTotal {
	total: number;
	extraPrice: number;
	sectionItem: number;
	perSection: number;
}

export interface Legal {
	digright: string;
	signature: string;
	contract: string;
	permit: string;
	lienWaver: string;
}

export interface MaterialTotal {
	unit: number;
	total: number;
	unitsPerSection: number;
	costPerUnit: number;
}

export interface MeasurementTotal {
	unit: number;
	unitsPerSection: number;
	extras: string;
}

export interface Response {
	user: string;
	createdOn: number;
	createdBy: string;
	type: Type;
	id: string;
}

export enum Type {
	Order = 'Order'
}

export interface Sales {
	commission: number;
	users: string[];
}
