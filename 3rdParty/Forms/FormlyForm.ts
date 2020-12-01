import {
	FormGroup,
	Form,
	DropdownGroup,
	DropdownOption,
	Field,
	TextField,
	RadioOption,
	RadioChoice,
	CheckboxField,
	Label
} from './FlutterForm';
import { camelCase } from 'lodash';
const Fields = [
	{
		key: 'Input',
		type: 'input',
		templateOptions:
			{
				label: 'Input',
				placeholder: 'Placeholder',
				description: 'Description',
				required: true
			}
	},
	{
		key: 'Textarea',
		type: 'textarea',
		templateOptions:
			{
				label: 'Textarea',
				placeholder: 'Placeholder',
				description: 'Description',
				required: true
			}
	},
	{
		key: 'Checkbox',
		type: 'checkbox',
		templateOptions:
			{
				label: 'Accept terms',
				description: 'In order to proceed, please accept terms',
				pattern: 'true',
				required: true
			},
		validation:
			{
				messages:
					{
						pattern: 'Please accept the terms'
					}
			}
	},
	{
		key: 'Radio',
		type: 'radio',
		templateOptions:
			{
				label: 'Radio',
				placeholder: 'Placeholder',
				description: 'Description',
				required: true,
				options:
					[
						{
							value: 1,
							label: 'Option 1'
						},
						{
							value: 2,
							label: 'Option 2'
						},
						{
							value: 3,
							label: 'Option 3'
						},
						{
							value: 4,
							label: 'Option 4'
						}
					]
			}
	},
	{
		key: 'Select',
		type: 'select',
		templateOptions:
			{
				label: 'Select',
				placeholder: 'Placeholder',
				description: 'Description',
				required: true,
				options:
					[
						{
							value: 1,
							label: 'Option 1'
						},
						{
							value: 2,
							label: 'Option 2'
						},
						{
							value: 3,
							label: 'Option 3'
						},
						{
							value: 4,
							label: 'Option 4'
						}
					]
			}
	},
	{
		key: 'select_multi',
		type: 'select',
		templateOptions:
			{
				label: 'Select Multiple',
				placeholder: 'Placeholder',
				description: 'Description',
				required: true,
				multiple: true,
				selectAllOption: 'Select All',
				options:
					[
						{
							value: 1,
							label: 'Option 1'
						},
						{
							value: 2,
							label: 'Option 2'
						},
						{
							value: 3,
							label: 'Option 3'
						},
						{
							value: 4,
							label: 'Option 4'
						}
					]
			}
	},
	// {
	// 	key: 'investments',
	// 	type: 'repeat',
	// 	templateOptions:
	// 		{
	// 			addText: 'Add another investment'
	// 		},
	// 	fieldArray:
	// 		{
	// 			fieldGroup:
	// 				[
	// 					{
	// 						className: 'col-sm-4',
	// 						type: 'input',
	// 						key: 'investmentName',
	// 						templateOptions:
	// 							{
	// 								label: 'Name of Investment:',
	// 								required: true
	// 							}
	// 					},
	// 					{
	// 						type: 'input',
	// 						key: 'investmentDate',
	// 						className: 'col-sm-4',
	// 						templateOptions:
	// 							{
	// 								type: 'date',
	// 								label: 'Date of Investment:'
	// 							}
	// 					},
	// 					{
	// 						type: 'input',
	// 						key: 'stockIdentifier',
	// 						className: 'col-sm-4',
	// 						templateOptions:
	// 							{
	// 								label: 'Stock Identifier:',
	// 								addonRight:
	// 									{
	// 										class: 'fa fa-code'
	// 									}
	// 							}
	// 					}
	// 				]
	// 		}
	// },
	{
		template: '<hr /><div><strong>Address:</strong></div>'
	}
];

// const DrowdownGroups = Fields.map((dropdownGroup) => {
//   const options = dropdownGroup.templateOptions.options.map((opt) => {
//     return new DropdownOption({
//       label: opt.label,
//       id: camelCase(opt.label),
//       value: camelCase(opt.value)
//     }).output();
//   });
//   return new DropdownGroup({
//     id: camelCase(dropdownGroup.key),
//     choices: options
//   });
// });
// const form = new Form({
//   id: camelCase('Window Form'),
//   children: DrowdownGroups
// });
// console.log(JSON.stringify(form.output(), undefined, 2));
