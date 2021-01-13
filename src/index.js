const config = require('../config.json');
const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const url = require('url');
const path = require('path');
const SteamUser = require('steam-user');

var steamUser = new SteamUser();
steamUser.logOn({
    "accountName": config.steamUsername,
    "password": config.steamPassword
});


console.log(steamUser.steamID)

let mainWindow;

app.on('ready', async () => {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 1280,
        minHeight: 720,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views', 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    Menu.setApplicationMenu(null);

    mainWindow.on('closed', () => {
        app.quit()
    });

    ipcMain.on('buttonChange', (e, data) => {
        if(data.value) { // set to 'on duty'
        } else {

        }
    })
})