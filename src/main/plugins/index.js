import { spawn } from 'child_process'
import {ipcMain} from 'electron'
import path from 'path'

function runExec (path, args, error, stdout, stderr) {
  console.log('>>>>>>>>>>>', path, args)
  const exeFile = spawn(path, args)
  exeFile.stdout.on('data', (data) => {
    console.log('stdout data', data)
  })
  exeFile.stderr.on('data', (data) => {
    console.log('stderr data', data)
  })
  exeFile.on('close', (code) => {
    console.log('exit Code', code)
  })
}

const customAppWorkDir = global.customAppWorkDir
console.log('customAppWorkDir', customAppWorkDir)
const PLUGINT_PRINT_PATH = path.join(
  customAppWorkDir,
  '/plugins/pdfp/pdfprint.exe'
)

function print (funcParams) {
  const { pdfpath, param } = funcParams
  runExec(PLUGINT_PRINT_PATH, [pdfpath, param])
}

ipcMain.on('plugins', (event, args) => {
  console.log('args', args)
  const { type, funcParams } = args
  if (type === 'print') {
    print(funcParams)
  }
})
