let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/EdMaverickDondeestas.mp4', '', '😔😢', m)
}
handler.command = /^(edmaverickdondeestas)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
