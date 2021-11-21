const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `*_Ya estás registrado en mi base de datos_*`
  if (!Reg.test(text)) throw `*_Formato incorrecto*_\n*_${usedPrefix}daftar nombre.edad_*\n*_Ejemplo:_*\n*_#daftar Shadow.18_*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*_El nombre no puede estar vacío_*'
  if (!age) throw '*_La edad no puede estar vacía_*'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Registrado con éxito!

╭─「 Info 」
│ Nombre: ${name}
│ Edad: ${age}
╰────
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

