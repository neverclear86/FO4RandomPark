/**
 * メインプロセスのMain
 */

const fs = require('fs')
const path = require('path')
const storage = require('electron-storage')
const yaml = require('node-yaml')

const strs = yaml.readSync('data/strings.yml')

const ipc = require('electron').ipcMain
const ipcKeys = yaml.readSync("data/ipckeys.yml")


global.ipc = ipc
global.ipcKeys = ipcKeys
global.strs = strs


// IPCイベント系読み込み
/**
 * ディレクトリ以下のjsファイルを再起読み込み
 * @param  {string} dir Directory
 * @return {array[string]} File list
 */
function ls(dir) {
  var files = fs.readdirSync(dir).map((f) => "./" + path.join(dir, f))
  var fileList = files.filter((f) =>
      fs.statSync(f).isFile() && f.match(/^.*\.js$/))

  files.filter((f) => fs.statSync(f).isDirectory())
    .forEach((d) => {
      ls(d).forEach((f) => fileList.push(f))
    })

  return fileList
}

ls("./back/ipc/")
  .map((f) => "." + f.substr(0, f.length - 3))
  .forEach((f) => require(f))
