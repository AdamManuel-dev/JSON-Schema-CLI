const deck = require('./deck_form.js')
const roof = require('./roof_form.js')
const bath = require('./bath_form.js')
const fencing = require('./fencing_form.js')
const kitchen = require('./kitchen_form.js')
const window = require('./window_door_form.js')
const fields = require('./fields.js')

async function run () {
  const Fields = fields.map(template => {
    return {
      ...template,
      fields: template.fields.filter(field => {
        if (template.name === 'Deck Contract') {
          return !deck.includes(field)
        }
        if (template.name === 'Roof Contract') {
          return !roof.includes(field)
        }
        if (template.name === 'Bathroom Contract') {
          return !bath.includes(field)
        }
        if (template.name === 'Fence Contract') {
          return !fencing.includes(field)
        }
        if (template.name === 'Kitchen Contract') {
          return !kitchen.includes(field)
        }
        if (template.name === 'Windows / Doors Contract') {
          return !window.includes(field)
        }
      })
    }
  })

  console.log(JSON.stringify(Fields))
}

run()
