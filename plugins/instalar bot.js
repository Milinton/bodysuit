let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  let old = Math.round(performance.now())
  await m.reply('*_CUALQUIER DUDA O AYUDA QUE NECESITES CONTACTEME CON EL SIGUIENTE LINK: wa.me/14509001764_*')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
*_GRACIAS POR INTERESARTE EN INSTALAR THE SHADOW BROKERS - BOT_*
*_video, repositorio y archivos del bot a continuación:_* 

_Video tutorial de instalacion: https://www.youtube.com/watch?v=dP8-aaHinBE&t=35s_

_Repositorio del Bot: https://github.com/TheShadowBrokers1/TheShadowBrokers-Bot_

_Descarga los archivos del Bot: https://github.com/TheShadowBrokers1/TheShadowBrokers-Bot/archive/refs/heads/master.zip_

*- Aconsejable cambiar el numero del propietario para modificar el Bot*
*- Usar el comando #configurarbot para obtener la configuración del menu, welcome y despedida* 
*- Leer al archivo README.md del repositorio*
`.trim(), m)
}
handler.help = ['instalarbot']
handler.tags = ['General']
handler.command = /^(instalarbot?)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
