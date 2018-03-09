const storage = require('electron-storage')
const path = require('path')


const dir = "characters"


ipc.on(ipcKeys.loadChar, (e, name) => {
  storage.get(path.join(dir, name))
  .then(data => {
    e.returnValue = data
  })
  .catch(err => {
    console.error(err)
  })
})


ipc.on(ipcKeys.saveChar, (e, name, data) => {
  storage.set(path.join(dir, name))
  .catch(err => {
    console.error(err)
  })
})
