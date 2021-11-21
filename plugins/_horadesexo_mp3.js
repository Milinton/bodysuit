let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/maau1.mp3', '', 'xd', m)
}
handler.command = /^(horadesexo)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
