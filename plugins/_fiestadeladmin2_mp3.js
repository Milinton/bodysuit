let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/fiesta.mp3', '', 'xd', m)
}
handler.command = /^(fiestadeladmin2)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
