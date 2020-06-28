import winston from 'winston'
import {remote} from 'electron'

const {logLevel} = remote.getGlobal('cfgObj') // 来自主进程
const CATEGORY = 'renderer'
const logCfg = {
  'transports': [
    new winston.transports.Console({
      level: logLevel,
    }),
    new winston.transports.File({
      level: logLevel,
      filename: './logs/renderer.log',
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
