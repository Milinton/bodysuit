let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/video1.mp4', '', '😏🔥', m)
}
handler.command = /^(video1)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
