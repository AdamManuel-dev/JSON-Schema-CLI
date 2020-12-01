curl --location --request POST 'https://midtown-ts.azurewebsites.net//api/hellosign' --header 'Content-Type: application/json' --data-raw '{
    "action": "template-list",
    "options": {
    "page": 1,
    "page_size": 15
    }
}' | fx 'x => x.response.templates' | fx 'x => x.map(y => ({ title: y.title, fields: y.custom_fields.map(t => ({name: t.name, type: t.type})) }))'