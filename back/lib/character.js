/**
 * キャラクターデータの読み込み、書き込み
 */

// const storage = require('electron-storage')
// const path = require('path');
//
//
// const dirname = "characters"
// var characterFile = {}
//
// characterFile.get = (file) => {
//   return storage.get(path.join(dirname, file))
//   .catch(err => {
//     console.error(err)
//   })
// }
//
//
// characterFile.set = (file, data) => {
//   return storage.set(path.join(dirname, file), data)
//   .catch(err => {
//     console.log(err)
//   })
// }
//
// module.exports = characterFile

module.exports = require('./storage')("characters")
