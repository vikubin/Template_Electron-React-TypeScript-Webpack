const {app, BrowserWindow} = require('electron');

function createWindow() {

  // Make the electron window
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // The react app will be packed to ./dist/index.html this file will be in ./dist/electron.js
  window.loadFile('index.html');
}

app.on('ready', createWindow);