(() => {
  var ret = ipc.sendSync(ipcKeys.PARK_LIST)
  console.log(ret)

})()
