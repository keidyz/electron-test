const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const window = new BrowserWindow({ width: 500, height: 500 });
  window.loadURL(`file://${__dirname}/../website/index.html`);
});