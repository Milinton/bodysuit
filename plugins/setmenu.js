let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, '*_Menú configurado correctamente_*\n\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'Menu direset', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' berhasil diatur\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'Menu ' + type + ' direset', m)
    }
  }
}
handler.help = ['', 'before','header','body','footer','after'].map(v => 'setmenu' + v + ' <teks>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.prems = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
*_Comandos universales para la configuración de su menu:_*
%p (Prefijo)
%name (Nombre)
%date (Fecha)
%time (Hora)
%uptime (Tiempo que lleva el Bot activo)

*_Para configurar el Bot con el menu por defecto usar solo #setmenu_*
`.trim()
