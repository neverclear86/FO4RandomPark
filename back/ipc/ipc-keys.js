const ipc = require('electron').ipcMain
const yaml = require('node-yaml')


// IPCキーリストをフロントに流す
const ipcKeys = yaml.readSync("../data/ipckeys.yml")
ipc.on("ipcKeys", e => e.returnValue = ipcKeys)
