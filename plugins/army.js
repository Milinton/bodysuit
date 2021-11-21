const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
  await conn.sendFile(m.chat, global.API('xteam', '/videomaker/army', { text: teks }, 'APIKEY'), 'army.mp4', teks, m)
}
handler.help = ['videoletras'].map((v) => v + " <text>")
handler.tags = ['videomaker']

handler.command = /^videoletras$/i

module.exports = handler