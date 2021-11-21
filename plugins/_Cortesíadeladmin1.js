let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/Espere.mp3', '', 'xd', m)
       conn.sendFile(m.chat, 'Cortesiadeladmin/cortesiadeladmin1.mp3', '', 'xd', m)
}
handler.command = /^(cortesiadeladmin1)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
