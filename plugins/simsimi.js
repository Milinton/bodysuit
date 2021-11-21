let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw '*_Hola HDTPM, para que me invocas?_*\n\n*_~Ingresa un texto para hablar con simi~_*\n\n_©The shadow Brokers - Bot_'
  let res = await fetch(global.API('bg', '/simi', { pesan: text }))
  let json = await res.json()
  if (json.status !== true) throw json
  m.reply(json.result.jawab)
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' [teks]')
handler.tags = ['General']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler

