function readCharacter(name) {
  const data = ipc.sendSync(ipcKeys.loadChar, name)

  document.querySelector("#name").innerHTML = data.name
  document.querySelector("#level").innerHTML = data.level
  var special = querySelectorAll(".special-name")
  console.log(data)
  console.log(special)

}
