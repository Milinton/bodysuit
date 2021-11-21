let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://h4ck3rs404-api.herokuapp.com/api/nsfw/school?apikey=404Api', '', 'jadi pengen sekelas', m)
}
handler.help = ['school']
handler.tags = ['nsfw']
handler.command = /^(school)$/i

handler.limit = false
handler.group = false
handler.nsfw = false
handler.register = false

module.exports = handler