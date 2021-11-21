let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Es putoo.mp3', '', 'xd', m)
}
handler.command = /^(esputoo)$/i
handler.fail = null
handler.exp = 100
module.exports = handler