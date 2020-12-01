const ext = require('./ext')
schema = ext.compile(
  ext.presets.record({
    partialSchema: {
      // Create schema here !
    },
    permissions: false,
    notes: false,
    user: false
  }),
  false
)
