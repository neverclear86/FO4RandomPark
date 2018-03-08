(() => {
  var ret = ipc.sendSync(ipcKeys.parkList)
  console.log(ret)

})()
