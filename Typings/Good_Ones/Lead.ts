export interface Lead {
	emailAddress?: string;
	title?: Title;
	firstName?: string;
	lastName?: string;
	primaryPhone?: number | string;
	primaryPhoneType?: AryPhoneType;
	secondaryPhone?: number | null | string;
	secondaryPhoneType?: AryPhoneType | null;
	leadSources?: LeadSources;
	id: string;
	residence?: string;
	type: Type;
	createdOn: number;
	updatedOn?: number;
	updatedBy?: number | string;
	ownerType?: OwnerType;
	status?: Status;
	createdBy?: string;
	test?: Test;
	user?: string;
	ownerStatus?: OwnerStatus;
	leadSource?: Title[] | LeadSourceEnum;
	owner?: Owner;
	noteIds?: Title[];
	additionalPhones?: string[];
	additionalEmails?: string[];
}

export enum Title {
	BothOwnHome = 'BOTH OWN HOME',
	BrotherSister = 'BROTHER & SISTER',
	Brothers = 'BROTHERS',
	DR = 'DR.',
	DRMrs = 'DR. & MRS.',
	Empty = '',
	FatherDaughter = 'FATHER & DAUGHTER',
	FluffyMRS = 'MRS.  ',
	Fr = 'FR.',
	MS = 'MS.',
	MSMS = 'MS. & MS.',
	MSMr = 'MS. & MR',
	Miss = 'MISS',
	MotherDaughter = 'MOTHER & DAUGHTER',
	MotherSon = 'MOTHER & SON',
	Mr = 'Mr.',
	MrMS = 'MR. & MS.',
	MrMr = 'MR. & MR.',
	MrMrs = 'MR. & MRS.',
	Mrs = 'Mrs.',
	MrsMS = 'MRS. & MS',
	MrsMrs = 'MRS. & MRS.',
	PurpleMR = 'MR.  ',
	PurpleMRS = 'MRS. .',
	Sisters = 'SISTERS',
	String = 'string',
	TitleMR = 'MR.',
	TitleMRMRS = 'MR. & MRS',
	TitleMRS = 'MRS.',
	TitleMS = 'MS.  '
}

export enum LeadSourceEnum {
	CompanySiteLeadCapture = 'Company Site Lead Capture',
	CustomWebsiteLeadSourceLeadCapture = 'Custom Website Lead Source Lead Capture',
	FacebookLeadsLeadCapture = 'Facebook Leads Lead Capture',
	HomeAdvisorLeadCapture = 'HomeAdvisor Lead Capture',
	HomeImprovementLeadsCOMLeadCapture = 'HomeImprovementLeads.com Lead Capture',
	Huhomes901016 = 'Huhomes901016',
	ICapture078476Ef64294Fef90Bb24Ae3B8A9F0B = 'iCapture 078476ef-6429-4fef-90bb-24ae3b8a9f0b',
	ICapture07D203ACDe364975B75564Fecd66239F = 'iCapture 07d203ac-de36-4975-b755-64fecd66239f',
	ICapture5Aefe1E8915D4De193D20A4089Cea623 = 'iCapture 5aefe1e8-915d-4de1-93d2-0a4089cea623',
	ICapture6Ed2992589364Ab9849774F2B2F2072D = 'iCapture 6ed29925-8936-4ab9-8497-74f2b2f2072d',
	ICaptureA9A5C943Ecda4Fc08D98E8482Fb7Acf5 = 'iCapture a9a5c943-ecda-4fc0-8d98-e8482fb7acf5',
	ICaptureAd63Cf1027Cb44259B3BAa604Efa3125 = 'iCapture ad63cf10-27cb-4425-9b3b-aa604efa3125',
	ICaptureF2E32Fc225Fb4Ca3890ED2Ebbb3A3997 = 'iCapture f2e32fc2-25fb-4ca3-890e-d2ebbb3a3997',
	ICaptureF975364F667B452AB110Ac7Ffd1B0963 = 'iCapture f975364f-667b-452a-b110-ac7ffd1b0963',
	Infousa101316 = 'Infousa10-13-16',
	LeadForceLeadCapture = 'Lead-Force Lead Capture',
	MarketSharp = 'MarketSharp',
	Modernize = 'Modernize',
	Networx = 'Networx',
	Nh1 = 'NH1',
	Nuhomes3 = 'Nuhomes3',
	Nuhomes4 = 'Nuhomes4',
	Nuhomes6 = 'Nuhomes6',
	Nuhomes8 = 'Nuhomes8',
	Nuhomes91016 = 'Nuhomes9-10-16',
	Nuhomey = 'Nuhomey',
	PorchLeadCapture = 'Porch Lead Capture',
	QuinstreetLeadCapture = 'Quinstreet Lead Capture',
	RemodelingCOM974F4A4659A24E7E9Fd2E4Ac73940Ee5 = 'Remodeling.com 974f4a46-59a2-4e7e-9fd2-e4ac73940ee5',
	SurefireLocal7 = 'Surefire Local 7',
	SurefireSocial7 = 'Surefire Social 7',
	Test = 'TEST',
	The314425 = '314 4-25',
	The636Export = '636 export',
	TopLeadsLeadCapture = 'Top Leads Lead Capture',
	WebsiteChatLeadCapture = 'Website Chat Lead Capture'
}

export enum LeadSources {
	Canvas = 'Canvas',
	Empty = '',
	MarketSharpSource = 'marketSharpSource',
	Telemarketing = 'Telemarketing'
}

export interface Owner {
	users: Title[];
	groups: Title[];
}

export enum OwnerStatus {
	Sole = 'sole'
}

export enum OwnerType {
	Dual = 'Dual',
	Empty = '',
	Single = 'Single',
	String = 'string'
}

export enum AryPhoneType {
	AryPhoneTypeHOME = 'HOME',
	Cell = 'Cell',
	Empty = '',
	Home = 'Home',
	String = 'string',
	Unknown = 'UNKNOWN',
	Work = 'Work'
}

export enum Status {
	ClockIn = 'ClockIn',
	Customer = 'CUSTOMER',
	New = 'NEW',
	String = 'string'
}

export enum Test {
	Record = 'record'
}

export enum Type {
	Lead = 'Lead'
}
