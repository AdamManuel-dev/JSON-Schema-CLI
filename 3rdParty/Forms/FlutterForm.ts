import { camelCase } from 'lodash';

interface BaseGroupDefinition {
	'@name': string;
	id: string;
	children: any[];
}

interface FormDefinition extends BaseGroupDefinition {
	'@name': 'form';
}

interface FormGroupDefinition extends BaseGroupDefinition {
	'@name': 'formGroup';
	name: string;
}

interface ValidationDefinition {
	'@name': 'validation' | 'requiredValidation';
	message: string;
	isValid?: {
		expression: string;
	};
}

interface FieldDefinition {
	'@name': string;
	id: string;
}

interface TextFieldDefinition extends FieldDefinition {
	'@name': 'textField';
	label: string;
}

interface CheckboxFieldDefinition extends FieldDefinition {
	'@name': 'checkbox';
	value: string;
	label: string;
}

interface SliderFieldDefinition extends FieldDefinition {
	'@name': 'slider';
	value: string;
	minValue: string;
	maxValue: string;
}

interface DateFieldDefinition extends FieldDefinition {
	'@name': 'date';
	firstDate: string;
	lastDate: string;
	format: string;
	initialDate: string;
}

interface DateRangeFieldDefinition extends FieldDefinition {
	'@name': 'dateRange';
	minDate: string;
	maxDate: string;
	format: string;
	initialDate: string;
}

interface OptionDefinition {
	'@name': string;
	id?: string;
	label: string;
	value: string;
}

interface RadioOptionDefinition extends OptionDefinition {
	'@name': 'radioButton';
}

interface ChipOptionDefinition extends OptionDefinition {
	'@name': 'singleSelectChipChoice';
}

interface MultiChipOptionDefinition extends OptionDefinition {
	'@name': 'multiSelectChipChoice';
}

interface DropdownOptionDefinition extends OptionDefinition {
	'@name': 'dropdownOption';
}

interface ChoiceGroupDefinition extends FieldDefinition {
	choices: OptionDefinition[];
}

interface RadioChoiceGroupDefinition extends ChoiceGroupDefinition {
	'@name': 'radioButtonGroup';
	choices: RadioOptionDefinition[];
}

interface ChipGroupDefinition extends ChoiceGroupDefinition {
	'@name': 'singleSelectChipGroup';
	choices: ChipOptionDefinition[];
}

interface MultiChipGroupDefinition extends ChoiceGroupDefinition {
	'@name': 'multiSelectChipGroup';
	choices: MultiChipOptionDefinition[];
}

interface DropdownGroupDefinition extends ChoiceGroupDefinition {
	'@name': 'dropdownButton';
	choices: DropdownOptionDefinition[];
}

interface LabelDefinition {
	'@name': 'label';
	value: {
		expression: string;
	};
	isVisible: {
		expression: string;
	};
}

export class Base {
	public definition: BaseGroupDefinition;
	constructor({ id, children }: { id: string; children: any[] }) {
		this.definition = {
			['@name']: 'form',
			id,
			children: children.map((child) => child)
		};
	}

	public output(): any {
		if (Array.isArray(this.definition.children) && this.definition.children.length > 0) {
			this.definition.children = this.definition.children.map((child) => (child.output ? child.output() : child));
			return this.definition;
		}
		else {
			return this.definition;
		}
	}
}

export class Field {
	public definition: FieldDefinition;
	constructor(id: string) {
		this.definition = {
			['@name']: 'TODO',
			id
		};
	}

	public output(): any {
		return this.definition;
	}
}

export class Form extends Base {
	public definition: FormDefinition;
	constructor({ id, children }: { id: string; children: any[] }) {
		super({ id, children });
		this.definition = {
			['@name']: 'form',
			id,
			children: children.map((child) => child)
		};
	}
}

export class FormGroup extends Base {
	public definition: FormGroupDefinition;
	constructor({ name, id, children }: { name: string; id: string; children: any[] }) {
		super({ id, children });
		this.definition = {
			['@name']: 'formGroup',
			id,
			name,
			children
		};
	}
}

export class TextField extends Field {
	public definition: TextFieldDefinition;
	constructor({ id, label }: { id: string; label: string }) {
		super(id);
		this.definition = {
			'@name': 'textField',
			id,
			label
		};
	}
}

export class SliderField extends Field {
	public definition: SliderFieldDefinition;
	constructor({
		id,
		defaultValue,
		minValue,
		maxValue
	}: {
		id: string;
		defaultValue: string;
		minValue: string;
		maxValue: string;
	}) {
		super(id);
		this.definition = {
			'@name': 'slider',
			id,
			value: defaultValue,
			minValue: minValue || '0.0',
			maxValue: maxValue || '100.0'
		};
	}
}

export class CheckboxField extends Field {
	public definition: CheckboxFieldDefinition;
	constructor({ id, defaultValue, label }: { id: string; defaultValue: string; label: string }) {
		super(id);
		this.definition = {
			'@name': 'checkbox',
			id,
			value: defaultValue,
			label: label
		};
	}
}

export class DateField extends Field {
	public definition: DateFieldDefinition;
	constructor({
		id,
		defaultValue,
		firstDate,
		lastDate,
		format = 'yyyy-MM-dd'
	}: {
		id: string;
		defaultValue: string;
		firstDate: string;
		lastDate: string;
		format?: string;
	}) {
		super(id);
		this.definition = {
			'@name': 'date',
			id,
			firstDate,
			lastDate,
			initialDate: defaultValue,
			format
		};
	}
}

export class DateRangeField extends Field {
	public definition: DateRangeFieldDefinition;
	constructor({
		id,
		defaultValue,
		minDate,
		maxDate,
		format = 'yyyy-MM-dd'
	}: {
		id: string;
		defaultValue: string;
		minDate: string;
		maxDate: string;
		format?: string;
	}) {
		super(id);
		this.definition = {
			'@name': 'dateRange',
			id,
			minDate,
			maxDate,
			initialDate: defaultValue,
			format
		};
	}
}

export class BaseChoiceField {
	public definition: OptionDefinition;
	constructor({ id, label, value }: { id?: string; label: string; value: string }) {
		this.definition = {
			'@name': 'textField',
			...!id ? {} : { id },
			value,
			label
		};
	}
	public output(): any {
		return this.definition;
	}
}

export class BaseChoiceGroup {
	public definition: ChoiceGroupDefinition;
	constructor({ id, choices }: { id?: string; choices: OptionDefinition[] }) {
		this.definition = {
			'@name': 'INCOMPLETE',
			id,
			choices
		};
	}

	public output(): any {
		if (Array.isArray(this.definition.choices) && this.definition.choices.length > 0) {
			this.definition.choices = this.definition.choices.map(
				(child: any) => (child.output ? child.output() : child)
			);
			return this.definition;
		}
		else {
			return this.definition;
		}
	}
}

export class Label {
	public definition: LabelDefinition;
	constructor({ value, isVisible }: { value: string; isVisible: string }) {
		this.definition = {
			'@name': 'label',
			isVisible:
				{
					expression: isVisible
				},
			value:
				{
					expression: value
				}
		};
	}

	public output(): any {
		return this.definition;
	}
}

export class RadioOption extends BaseChoiceField {
	public definition: RadioOptionDefinition;
	constructor(options: { id?: string; label: string; value: string }) {
		super(options);
		this.definition = {
			'@name': 'radioButton',
			...!!options.id ? { id: options.id } : { id: options.label },
			value: options.value,
			label: options.label
		};
	}
}

export class RadioChoice extends BaseChoiceGroup {
	public definition: RadioChoiceGroupDefinition;
	constructor({ id, choices }: { id?: string; choices: RadioOptionDefinition[] }) {
		super({ id, choices });
		this.definition = {
			'@name': 'radioButtonGroup',
			id,
			choices
		};
	}
}

export class ChipOption extends BaseChoiceField {
	public definition: ChipOptionDefinition;
	constructor(options: { id?: string; label: string; value: string }) {
		super(options);
		this.definition = {
			'@name': 'singleSelectChipChoice',
			...!!options.id ? { id: options.id } : { id: options.label },
			value: options.value,
			label: options.label
		};
	}
}

export class ChipGroup extends BaseChoiceGroup {
	public definition: ChipGroupDefinition;
	constructor({ id, choices }: { id?: string; choices: ChipOptionDefinition[] }) {
		super({ id, choices });
		this.definition = {
			'@name': 'singleSelectChipGroup',
			id,
			choices
		};
	}
}

export class MultiChipOption extends BaseChoiceField {
	public definition: MultiChipOptionDefinition;
	constructor(options: { id?: string; label: string; value: string }) {
		super(options);
		this.definition = {
			'@name': 'multiSelectChipChoice',
			...!!options.id ? { id: options.id } : { id: options.label },
			value: options.value,
			label: options.label
		};
	}
}

export class MultiChipGroup extends BaseChoiceGroup {
	public definition: MultiChipGroupDefinition;
	constructor({ id, choices }: { id?: string; choices: MultiChipOptionDefinition[] }) {
		super({ id, choices });
		this.definition = {
			'@name': 'multiSelectChipGroup',
			id,
			choices
		};
	}
}

export class DropdownOption extends BaseChoiceField {
	public definition: DropdownOptionDefinition;
	constructor(options: { id?: string; label: string; value: string }) {
		super(options);
		this.definition = {
			'@name': 'dropdownOption',
			...!!options.id ? { id: options.id } : { id: options.label },
			value: options.value,
			label: options.label
		};
	}
}

export class DropdownGroup extends BaseChoiceGroup {
	public definition: DropdownGroupDefinition;
	constructor({ id, choices }: { id?: string; choices: DropdownOptionDefinition[] }) {
		super({ id, choices });
		this.definition = {
			'@name': 'dropdownButton',
			id,
			choices
		};
	}
}

export function parse(Fields) {
	const formItems = Fields.map((field) => {
		if (field.type === 'input' || field.type === 'textarea') {
			return new TextField({
				id: camelCase(field.key),
				label: field.templateOptions.label
			});
		}
		if (field.type === 'checkbox') {
			return new CheckboxField({
				id: camelCase(field.key),
				label: field.templateOptions.label,
				defaultValue: 'false'
			});
		}
		if (field.type === 'radio') {
			const options = field.templateOptions.options.map((opt) => {
				return new RadioOption({
					id: camelCase(opt.label),
					label: opt.label,
					value: camelCase(opt.value + '')
				}).output();
			});
			return new RadioChoice({
				id: camelCase(field.key),
				choices: options
			});
		}
		if (field.type === 'select') {
			const options = field.templateOptions.options.map((opt) => {
				return new DropdownOption({
					label: opt.label,
					id: camelCase(opt.label),
					value: camelCase(opt.value)
				}).output();
			});
			return new DropdownGroup({
				id: camelCase(field.key),
				choices: options
			});
		}
		if (field.template) {
			return new Label({
				value: field.template,
				isVisible: 'true'
			});
		}
		throw new Error(field.type);
	});
	const form = new Form({
		id: camelCase('Test Form'),
		children: formItems
	});
	return form.output();
}
