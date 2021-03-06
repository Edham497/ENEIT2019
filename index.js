const {app, BrowserWindow, ipcMain} = require('electron')
const fs = require("fs");
let mainWindow

// require('electron-reload')(__dirname,{
//     electron: `${__dirname}/none_modules/.bin/electron`
// })

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        minWidth: 600,
        minHeight: 400,
        title: 'app1',
        frame: false,
        fullscreen: true,
        webPreferences:{
            nodeIntegration: true
        }
    })
    
    // mainWindow.webContents.openDevTools();

    mainWindow.loadURL(`file://${__dirname}/src/index.html`)

    mainWindow.on('close',()=>{
        app.quit();
    })

    //Lee el archivo html de simulacion y lo manda a la ventana
    ipcMain.on('show-simulacion', (evt, arg)=>{
        data = fs.readFileSync(`${__dirname}/src/views/simulacion.html`)
        evt.reply('data-simulacion', data)
    })

    //Lee el archivo de costos y lo envia
    ipcMain.on('show-costos', (evt, arg)=>{
        data = fs.readFileSync(`${__dirname}/src/views/costos.html`)
        evt.reply('data-costos', data)
    })

    ipcMain.on('show-about', (evt, arg)=>{
        data = fs.readFileSync(`${__dirname}/src/views/about.html`)
        evt.reply('data-about', data)
    })

    ipcMain.on('kitBasico', (evt, arg)=>{
        data = fs.readFileSync(`${__dirname}/src/views/kit_Basico.html`)
        evt.reply('get-kitBasico', data)
    })

    ipcMain.on('kitIndustrial', (evt, arg)=>{
        data = fs.readFileSync(`${__dirname}/src/views/kit_industrial.html`)
        evt.reply('get-kitIndustrial', data)
    })

    ipcMain.on('show-reactivos', (evt, arg)=>{
        data = fs.readFileSync(`${__dirname}/src/views/reactivos.html`)
        evt.reply('data-react', data)
    })
})
