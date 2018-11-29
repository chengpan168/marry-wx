/**
 * Created by chengpanwang on 2017/3/23.
 */
var logger = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  logLevel: 0,
  debug (msg, ...args) {
    if (this.logLevel > 0) {
      return
    }
    
    console.debug('DEBUG: ', msg, ...args)
  },
  info (msg, ...args) {
    if (this.logLevel > 1) {
      return
    }
    console.info('INFO: ', msg, ...args)
  },
  warn (msg, ...args) {
    if (this.logLevel > 2) {
      return
    }
    console.info('WARN: ', msg, ...args)
  },
  error (msg, ...args) {
    if (this.logLevel > 3) {
      return
    }
    console.info('ERROR: ', msg, ...args)
  }
}

module.exports = logger
