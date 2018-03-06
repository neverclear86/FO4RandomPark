const ipc = require('electron').ipcMain
const yaml = require('node-yaml')
const ipcKeys = require('../ipckeys')

ipc.on(ipcKeys.PARK_LIST, (e) => e.returnValue = yaml.readSync("../data/park_list.yml"))
