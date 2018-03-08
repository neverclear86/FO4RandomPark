// IPCキーリストをフロントに流す
ipc.on(ipcKeys.ipcKeys, e => e.returnValue = ipcKeys)
