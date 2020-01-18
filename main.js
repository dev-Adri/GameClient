const electron = require('electron');
const url = require('url');
const path = require('path');
const jquery = require('jquery');

const {app, BrowserWindow} = electron;

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 1280, height: 720, frame: false, resizable: false, closable: true});


    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './js/main.html'),
        protocol: 'file',
        slashes: true,
    }));

    mainWindow.on('closed', function(){
        mainWindow = null;
    })
});
