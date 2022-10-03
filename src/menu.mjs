const { app, BrowserWindow , Menu } = require('electron');
const isMac = process.platform === "darwin"


Menu.setApplicationMenu(null)
export const template = (isMac? [
  {
    label: app.name,
    submenu: [
       {
          role: 'undo'
       },
       {
          role: 'redo'
       },
       {
          type: 'separator'
       },
       {
          role: 'cut'
       },
       {
          role: 'copy'
       },
       {
          role: 'paste'
       }
    ]
 },
  {
     label: 'Edit',
     submenu: [
        {
           role: 'undo'
        },
        {
           role: 'redo'
        },
        {
           type: 'separator'
        },
        {
           role: 'cut'
        },
        {
           role: 'copy'
        },
        {
           role: 'paste'
        }
     ]
  },
  
  {
     role: 'help',
     submenu: [
        {
           label: 'Learn More'
        }
     ]
  }
] : [])