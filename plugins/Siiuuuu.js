let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/siiuuuu.mp4', '', '⚽ siiuuuu ⚽', m)
}
handler.command = /^(siiuuuu)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
