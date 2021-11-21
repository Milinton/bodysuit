let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/devuelvemeamichicahombresg.mp4', '', '😔😢', m)
}
handler.command = /^(devuelvemeamichicahombresg)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
