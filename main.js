const { app, BrowserWindow} = require('electron')
const { ipcMain } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'src/preload.js')
    },
    icon: __dirname + '/src/icon.ico',
    resizable: false
  })
  win.setMenu(null)
  win.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

ipcMain.on('hotspot-event', (event, url) => {
  event.returnValue = 'Message received!'
  require('electron').shell.openExternal(url);
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})