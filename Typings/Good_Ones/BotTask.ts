export interface BotTask {
	id: string;
	botTaskId: string;
	friendlyName: string;
	uniqueName: string;
	actions?: {
		actions: {
			say: string;
		}[];
	};
	type: string;
	partitionKey: string;
	actionObject?: {
		actions: {
			say: {
				speech: string;
			};
		}[];
	};
	botTaskPathAssistantSid?: string;
}
