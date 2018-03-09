const ipc = require('electron').ipcRenderer
const ipcKeys = ipc.sendSync("ipcKeys")

function querySelectorAll(selector) {
  return [].map.call(document.querySelectorAll(selector), e => e)
}
