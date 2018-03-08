const storage = require('electron-storage')
const path = require('path');


module.exports = dirname => {
  var characterFile = {}

  characterFile.get = (file) => {
    return storage.get(path.join(dirname, file))
    .catch(err => {
      console.error(err)
    })
  }


  characterFile.set = (file, data) => {
    return storage.set(path.join(dirname, file), data)
    .catch(err => {
      console.log(err)
    })
  }
}
