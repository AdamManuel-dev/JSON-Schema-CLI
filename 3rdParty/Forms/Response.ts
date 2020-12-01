/**
 * API Response
 */
export interface Response {
  success: string
  response: FormDefinition[]
}

/**
 * DB Form Record
 */
export interface FormDefinition {
  name: string
  category: 'HelloSign' | 'Measure' | 'custom' | string
  callback: string
  template_id?: string
  message?: string
  roles?: Role[]
  definition: Field[]
  type: 'Form'
  id: string
}

/**
 * | ONLY FOR HELLOSIGN
 */
export interface Role {
  name: string
  order: number
}

/**
 * Generalization of a FormFieldConfig
 */
export interface Field {
  key: string
  type: 'checkbox' | 'input' | 'select' | string
  templateOptions: Options
}

/**
 * Generalization of the TemplateOptions
 */
export interface Options {
  label: string
  placeholder?: string
  description: string
  pattern?: string
  required?: boolean
}

/**
 * Options for Select Fields
 */
export interface SelectOptions extends Options {
  options: Option[]
  multiple?: boolean
  selectAllOption?: string
}

/**
 * Select Field specific definition
 */
export interface SelectField extends Field {
  type: 'select'
  templateOptions: SelectOptions
}

/**
 * Select Option. (Dropdown value)
 */
export interface Option {
  label: string
  value: string
}

export function createSelect (): SelectField {
  return {
    key: '',
    type: 'select',
    templateOptions: {
      description: '',
      label: '',
      options: [
        {
          label: '',
          value: ''
        }
      ]
    }
  }
}
