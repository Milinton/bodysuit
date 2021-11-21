let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Hola-amor.mp3', '', 'xd', m)
}
handler.command = /^(hola)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
