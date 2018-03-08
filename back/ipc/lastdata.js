const storage = require('electron-storage');


const file = "last"

ipc.on(ipcKeys.loadLast, e => {
  storage.get(file)
  .then(data => {
    return storage.get(data.name)
  })
  .then(data => {
    e.returnValue = data
  })
  .catch(err => {
    if (err.errcode == -2) {
      console.log("初期設定")
      e.returnValue = null
    } else {
      console.error(err)
    }
  })
})


ipc.on(ipcKeys.saveLast, e => {
  storage.set(file)
})
