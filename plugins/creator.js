function handler(m) {
  this.sendContact(m.chat, global.owner1[0], this.getName(global.owner1[0] + '@s.whatsapp.net'), m), 
 conn.reply(m.chat, `
*_INGRESA AL GRUPO OFICIAL PARA ESTAR ENTERADO DE LAS NOVEDADES DEL BOT, TAMBIEN PARA RECIBIR AYUDA CASI INMEDIATA Y/O PROBAR COMANDOS ANTES DE USARLO EN TU GRUPO_*

*_PD: TAMBIEN SE REGALAN NUMEROS VIRTUALES CADA X TIEMPO_*

*_LINK: https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ_*


_®The Shadow Brokers - Bot_
_©Shadow - Creator_
_©Bruno Sobrino - Creator_

*▌│█║▌║▌║║▌║▌║█*
`.trim(), m)
}
handler.help = ['contacto']
handler.tags = ['info']

handler.command = /^(contacto)$/i

module.exports = handler
