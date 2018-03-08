/**
 * メインプロセスのMain
 */

const fs = require('fs')
const path = require('path')
const storage = require('electron-storage')
const yaml = require('node-yaml')

const strs = yaml.readSync('data/strings.yml')


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


// 前回の状態をロード
storage.get(strs.LAST)
.then(data => {
  console.log("データ読み込み")
})
.catch(err => {
  if (err.errno == -2) {
    console.log("初期設定")
  } else {
    console.error(err)
  }
})
