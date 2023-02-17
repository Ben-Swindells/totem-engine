import { app, BrowserWindow } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })
  if (isProd) {
    await win.loadURL('app://./index.html');
  } else {
    const port = process.argv[2];
    await win.loadURL(`http://localhost:${port}/`);
    //win.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});

process.on('uncaughtException', function (err) {
  console.log(err);
})