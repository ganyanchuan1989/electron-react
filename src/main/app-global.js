/**
 * 全局对象
 */
import { app } from 'electron'
import path from 'path'

/**
 * 全局注入工作目录, 开发环境当前项目根目录，生产环境electron执行文件所在目录
 * 对于外部插件，不建议打包到asar，建议直接放到electron.exe 同层目录。
 */
if (process.env.NODE_ENV === 'development') {
  global.customAppWorkDir = process.cwd()
} else {
  global.customAppWorkDir = path.resolve(app.getPath('exe'), '..')
}
