let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/dylan1.mp3', '', 'xd', m)
}
handler.command = /^(anadieleimporta)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
