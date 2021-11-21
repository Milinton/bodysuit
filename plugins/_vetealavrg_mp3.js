let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/vete a la verga.mp3', '', 'xd', m)
}
handler.command = /^(vetealavrg)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
