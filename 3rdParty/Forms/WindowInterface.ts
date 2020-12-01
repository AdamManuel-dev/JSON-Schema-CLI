export interface WindowInterface {
    key:             string;
    type:            Type;
    defaultValue:    string;
    templateOptions: TemplateOptions;
}

export interface TemplateOptions {
    label:   string;
    options: Option[];
}

export interface Option {
    label: string;
    value: string;
}

export enum Type {
    Select = "select",
}
