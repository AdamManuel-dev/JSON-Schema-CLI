export interface Formly {
    definitions: Definition[];
    stepper:     Stepper[];
}

export interface Definition {
    key?:                 string;
    type?:                string;
    templateOptions?:     DefinitionTemplateOptions;
    validation?:          Validation;
    fieldArray?:          FieldArray;
    template?:            string;
    fieldGroupClassName?: string;
    fieldGroup?:          DefinitionFieldGroup[];
}

export interface FieldArray {
    fieldGroup: FieldArrayFieldGroup[];
}

export interface FieldArrayFieldGroup {
    className:       string;
    type:            string;
    key:             string;
    templateOptions: FieldTemplateOptions;
}

export interface FieldTemplateOptions {
    label:       string;
    required?:   boolean;
    type?:       string;
    addonRight?: AddonRight;
}

export interface AddonRight {
    class: string;
}

export interface DefinitionFieldGroup {
    className:       string;
    type:            string;
    key:             string;
    templateOptions: PurpleTemplateOptions;
}

export interface PurpleTemplateOptions {
    label:    string;
    type?:    string;
    max?:     number;
    min?:     number;
    pattern?: string;
}

export interface DefinitionTemplateOptions {
    label?:           string;
    placeholder?:     string;
    description?:     string;
    required?:        boolean;
    pattern?:         string;
    options?:         Option[];
    multiple?:        boolean;
    selectAllOption?: string;
    addText?:         string;
}

export interface Option {
    value: number;
    label: string;
}

export interface Validation {
    messages: Messages;
}

export interface Messages {
    pattern: string;
}

export interface Stepper {
    label:  string;
    fields: Field[];
}

export interface Field {
    key:             string;
    type:            string;
    templateOptions: FieldTemplateOptions;
}
