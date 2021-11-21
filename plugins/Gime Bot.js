let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Gime Bot.mp3', '', 'xd', m)
}
handler.command = /^(bot_gemime)$/i
handler.fail = null
handler.exp = 100
module.exports = handler 
