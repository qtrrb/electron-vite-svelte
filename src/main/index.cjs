const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '/../preload/index.cjs'),
    },
  })
  if (process.env.NODE_ENV == "development") {
    win.loadURL("http://localhost:5173/")
    win.webContents.openDevTools()
  } else {
    win.loadFile(path.join(__dirname, '/../renderer/dist/index.html'))
  }
}

app.whenReady()
  .then(() => {
    createWindow()

    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})