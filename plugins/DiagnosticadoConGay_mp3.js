let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/DiagnosticadoConGay.mp3', '', 'xd', m)
}
handler.command = /^(diagnosticadocongay)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
