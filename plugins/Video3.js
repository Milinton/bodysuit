let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Video3.mp4', '', '😏🔥', m)
}
handler.command = /^(video3)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
