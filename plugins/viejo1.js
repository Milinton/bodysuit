let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/viejo1.mp3', '', 'xd', m)
}
handler.command = /(:v)$/i
handler.fail = null
handler.exp = 100
module.exports = handler