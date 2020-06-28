import winston from 'winston'

const {logLevel} = global.cfgObj
const CATEGORY = 'main'
const logCfg = {
  'transports': [
    new winston.transports.Console({
      level: logLevel,
    }),
    new winston.transports.File({
      level: logLevel,
      filename: './logs/main.log',
      maxsize: '10000',

    }),
  ],
  format: winston.format.combine(
    winston.format.label({
      label: CATEGORY, // 方式一
    }),
    winston.format.timestamp(),
    winston.format.printf((info) => {
      return `${info.timestamp} - ${info.label}:[${info.level}]: ${info.message}`
    })
  ),
}
const logger = winston.createLogger(logCfg)
export default logger
