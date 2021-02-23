var log4js = require('log4js');

log4js.configure({
  appenders: {
    access: { type: 'dateFile', filename: 'log/access.log', pattern: '-yyyy-MM-dd' },
    app: { type: 'file', filename: 'log/app.log', maxLogSize: 10485760, numBackups: 3 },
    errorFile: { type: 'file', filename: 'log/errors.log' },
    errors: { type: 'logLevelFilter', level: 'error', appender: 'errorFile' }
  },
  categories: {
    default: { appenders: ['app', 'errors'], level: 'info' },
    http: { appenders: ['access'], level: 'info' }
  }
});

levels = {
  'trace': log4js.levels.TRACE,
  'debug': log4js.levels.DEBUG,
  'info': log4js.levels.INFO,
  'warn': log4js.levels.WARN,
  'error': log4js.levels.ERROR,
  'fatal': log4js.levels.FATAL
};

exports.logger = function (name, level) {
  var logger = log4js.getLogger(name);
  logger.level = levels[level] || levels['debug']
  return logger;
};
