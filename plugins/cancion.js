let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/cancion.mp3', '', 'xd', m)
}
handler.command = /^(cancion)$/i
handler.fail = null
handler.exp = 100
module.exports = handler