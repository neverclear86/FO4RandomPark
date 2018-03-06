const fs = require('fs')
const path = require('path')
const ipc = require('electron').ipcMain


function ls(dir) {
  var files = fs.readdirSync(dir).map((f) => "./" + path.join(dir, f))
  var fileList = files.filter((f) =>
      fs.statSync(f).isFile() && f.match(/^(?!\.\/back\/main\.js).*\.js$/))

  files.filter((f) => fs.statSync(f).isDirectory())
    .forEach((d) => {
      ls(d).forEach((f) => fileList.push(f))
    })

  return fileList
}


ls("./back/ipc/")
  .map((f) => "." + f.substr(0, f.length - 3))
  .forEach((f) => require(f))


const ipcKeys = require('./ipckeys')
ipc.on("ipcKeys", (e) => e.returnValue = ipcKeys)
