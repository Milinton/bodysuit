let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Lesbiana1.mp4', '', '😏🔥', m)
}
handler.command = /^(videolesbian1)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
