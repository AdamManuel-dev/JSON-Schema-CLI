export interface FormlyDB {
    success:  string;
    response: Response[];
}

export interface Response {
    name:         string;
    category:     Category;
    callback:     string;
    template_id?: string;
    message?:     Message;
    roles?:       Role[];
    definition:   Definition[];
    type:         ResponseType;
    id:           string;
}

export enum Category {
    HelloSign = "HelloSign",
    Measure = "Measure",
}

export interface Definition {
    key:             string;
    type:            DefinitionType;
    templateOptions: TemplateOptions;
}

export interface TemplateOptions {
    label:        string;
    placeholder?: Placeholder;
    description:  string;
    pattern?:     string;
    required?:    boolean;
}

export enum Placeholder {
    Bdl = "BDL",
    Box = "BOX",
    Each = "EACH",
    Empty = "",
    PC = "PC",
    Roll = "ROLL",
    Sht = "SHT",
    Sq = "SQ",
}

export enum DefinitionType {
    Checkbox = "checkbox",
    Input = "input",
}

export enum Message {
    Empty = "",
    ThankYouForChoosingUs = "Thank you for choosing us!",
}

export interface Role {
    name:  Name;
    order: number;
}

export enum Name {
    Agent = "Agent",
    Buyer = "Buyer",
    Extras = "Extras",
    FieldName = "FieldName",
}

export enum ResponseType {
    Form = "Form",
}
