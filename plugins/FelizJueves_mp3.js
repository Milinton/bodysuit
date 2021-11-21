let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/FelizJueves.mp3', '', 'xd', m)
}
handler.command = /^(felizjueves)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
