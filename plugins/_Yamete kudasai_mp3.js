let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Yamete-kudasai.mp3', '', 'xd', m)
}
handler.command = /^(yamete)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
