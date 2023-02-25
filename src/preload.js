const electron = require('electron')
const ipc = electron.ipcRenderer

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#devlink').addEventListener("click", function () {
        const reply = ipc.sendSync('hotspot-event', "https://akoru.works")
    });

    document.querySelector('#valueslink').addEventListener("click", function () {
        const reply = ipc.sendSync('hotspot-event', "https://clck.ru/33dFmP")
    });
})
