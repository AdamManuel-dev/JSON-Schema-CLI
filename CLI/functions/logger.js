const chalk = require('chalk')
const json = require('@buzuli/json')
const { promise } = require('ora')

/**
 * CLI Logger for Vorpal using Chalk
 */
class Log {
  constructor (logLevel) {
    if (this.logLevel > 0 && this.logLevel <= 5) {
      this.logLevel = logLevel
    } else {
      this.logLevel = 5
    }
    this.traceSinceLastError = Object.freeze([])
    this.traceSinceLastWarning = Object.freeze([])
  }

  SuccessLog (message, custom_emoji = '✅') {
    const parsed =
      typeof message === 'object' ? colorPrint(message) : chalk.green(message)
    console.log(custom_emoji + ' ' + parsed)
  }

  InfoLog (message, custom_emoji = '🔍') {
    const parsed =
      typeof message === 'object' ? colorPrint(message) : chalk.white(message)
    console.log(custom_emoji + ' ' + parsed)
  }

  WarnLog (message, custom_emoji = '🚨') {
    const parsed =
      typeof message === 'object'
        ? colorPrint(message)
        : chalk.red(message).italics()
    console.log(custom_emoji + ' ' + parsed)
  }

  TraceLog (message, custom_emoji = '🔰') {
    const parsed =
      typeof message === 'object' ? colorPrint(message) : chalk.gray(message)
    console.log(custom_emoji + ' ' + parsed)
  }

  DebugLog (message, custom_emoji = '👁‍🗨') {
    const parsed =
      typeof message === 'object'
        ? colorPrint(message)
        : chalk.yellow.bold(message)
    console.log(custom_emoji + ' ' + parsed)
  }

  ErrorLog (message, custom_emoji = '⛔') {
    const parsed =
      typeof message === 'object'
        ? colorPrint(message)
        : chalk.bgRedBright.white.bold(message)
    console.log(custom_emoji + ' ' + parsed)
  }

  AsyncLog ({ request, message, contextName }, cb) {
    const instance = promise(request, {
      spinner: 'clock',
      prefixText: contextName || '⌚',
      text: message,
      color: 'white'
    })
    cb(instance)
  }
}
const colorPrint = (data, indent = true) => {
  console.log(
    json(data, {
      indent,
      color: true
    })
  )
}

module.exports = {
  Log,
  colorPrint
}
