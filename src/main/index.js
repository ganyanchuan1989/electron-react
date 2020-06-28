'use strict'

import {
  app,
  BrowserWindow,
  ipcMain,
  session,
  dialog,
  crashReporter,
} from 'electron'

import './app-global'
import { cfgObj } from './cfg'
import logger from './logger'
import './db/index'
import './plugins/index'

// 修复 dev 模式版本号从Electron读取问题
import { version } from '../../package.json'
if (process.env.NODE_ENV === 'development') {
  app.getVersion = () => version
}
// eslint-disable-next-line import/first
import { autoUpdater } from 'electron-updater'

autoUpdater.logger = logger // 接管更新日志

logger.debug(`start main ${JSON.stringify(cfgObj)}`)

const { WebServer, AppServer } = cfgObj

crashReporter.start({
  productName: 'JUMP-Electron',
  companyName: 'bankcomm',
  submitURL: `${AppServer}/crash.json`,
  uploadToServer: true,
  ignoreSystemCrashHandler: true,
})

/**
 * Set `__static` path to static files in production
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\')
}

let mainWindow
const winURL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:9090`
    : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 740,
    useContentSize: true,
    width: 1220,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

/**
 * 注册请求拦截
 *   追加请求头：SSO
 */
function requestInspector () {
  // Modify the user agent for all requests to the following urls.
  const filter = {
    urls: ['*://*/*'],
  }

  session.defaultSession.webRequest.onBeforeSendHeaders(
    filter,
    (details, callback) => {
      details.requestHeaders['User-Agent'] = 'Gxz'
      const resHeaders = { requestHeaders: details.requestHeaders }
      callback(resHeaders)
    }
  )
}

// 自定义协议
// function registerProtocol () {
//   protocol.registerStringProtocol(
//     'custom',
//     (request, callback) => {
//       // const url = request.url.substr(7)
//       callback({ mimeType: 'text/plain', charset: 'utf8', data: '' })
//       if (mainWindow) {
//         mainWindow.loadURL(winURL)
//       }
//     },
//     (error) => {
//       if (error) console.error('Failed to register protocol')
//     }
//   )
// }

let downloaded = false
// 本地服务器地址
const feedURL = WebServer
function checkForUpdate () {
  try {
    autoUpdater.autoInstallOnAppQuit = false // 关闭退出自动更新
    // 设置检查更新的 url，并且初始化自动更新
    autoUpdater.setFeedURL(feedURL)

    // 监听错误
    autoUpdater.on('error', (err) => {
      console.log('error', err)
      logger.error(`update error:${err}`)
    })
    // 当开始检查更新的时候触发
    // autoUpdater.on('checking-for-update', () => {
    // console.log('checking-for-update')
    // sendUpdateMessage({msg, downloaded: false, progress: 0})
    // })
    autoUpdater.on('update-available', (info) => {
      // updateAvailable = true
      logger.debug(`update-available, version:${JSON.stringify(info)}`)
    })
    autoUpdater.on('update-not-available', (info) => {
      logger.debug(`update-not-available, info:${JSON.stringify(info)}`)
    })
    autoUpdater.on('download-progress', (pInfo) => {
      logger.debug(`download-progress, info:${JSON.stringify(pInfo)}`)
    })
    // 更新下载完成事件
    autoUpdater.on('update-downloaded', (info) => {
      logger.debug(`update-downloaded: ${JSON.stringify(info)}`)
      if (downloaded) {
        return
      }
      downloaded = true
      upgradeReminder(info)
    })
    // 向服务端查询现在是否有可用的更新
    autoUpdater.checkForUpdates()
  } catch (error) {
    console.log('error', error)
  }
}
/**
 * 升级提醒
 */
function upgradeReminder (info) {
  const { version } = info
  dialog
    .showMessageBox(mainWindow, {
      title: '版本更新',
      message: `服务器发现新版本：${version}`,
      buttons: ['OK', 'CANCEL'],
    })
    .then((res) => {
      const { response } = res
      // btn index
      if (response === 0) {
        logger.debug('quitAndInstall')
        autoUpdater.quitAndInstall()
      }
    })
}

// 修复低配置电脑黑屏问题
app.disableHardwareAcceleration()
app.commandLine.appendSwitch('disable-software-rasterizer')

app.on('ready', () => {
  logger.debug('app ready')
  createWindow()
  checkForUpdate()
  requestInspector()
  // registerProtocol()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * 崩溃测试
 */
if (process.env.NODE_ENV === 'development') {
  ipcMain.on('testCrash', () => {
    process.crash()
  })

  ipcMain.on('testError', () => {
    throw new Error('报错测试')
  })
}
