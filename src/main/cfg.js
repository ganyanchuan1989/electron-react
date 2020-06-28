import fs from 'fs'
import path from 'path'

const cfgDir = path.join(process.cwd(), '/config')
const cfgPath = path.join(cfgDir, '/cfg.json')
let cfgObj = {
  'AppServer': 'http://localhost:9090/api/',
  'WebServer': 'http://localhost:9090/',
  'logLevel': 'error',
}
if (!fs.existsSync(cfgPath)) {
  if (!fs.existsSync(cfgDir)) {
    fs.mkdirSync(cfgDir)
  }
  fs.writeFileSync(cfgPath, JSON.stringify(cfgObj))
} else {
  const cfgStr = fs.readFileSync(cfgPath)
  cfgObj = JSON.parse(cfgStr)
}

// 全局注入
global.cfgObj = cfgObj

export {
  cfgObj,
}
