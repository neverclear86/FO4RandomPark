const yaml = require('node-yaml')

ipc.on(ipcKeys.parkList, e => e.returnValue = yaml.readSync("../data/park_list.yml"))
