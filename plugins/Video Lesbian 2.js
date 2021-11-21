let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Lesbiana2.mp4', '', '😏🔥', m)
}
handler.command = /^(videolesbian2)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
