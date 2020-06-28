/**
 * 全局对象
 */
import { app } from 'electron'
import path from 'path'

/**
 * 全局注入工作目录, 开发环境当前项目根目录，生产环境electron执行文件所在目录
 */
if (process.env.NODE_ENV === 'development') {
  global.customAppWorkDir = process.cwd()
} else {
  // 上次目录
  global.customAppWorkDir = path.resolve(app.getPath('exe'), '..')
}
