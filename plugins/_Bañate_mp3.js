let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Bañate.mp3', '', 'xd', m)
}
handler.command = /^(bañate)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
