let handler = async (m, { conn, usedPrefix }) => {
  let pp = './undefined.jpeg'
  try {
    pp = await conn.getProfilePicture(m.sender)
  } catch (e) {

  } finally {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let str = `
*_Hola ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])} a continuación tus datos de registro en el bot:_*
    
*_Nombre: ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])} (@${m.sender.replace(/@.+/, '')})_*
*_Numero: +${m.sender.split`@`[0]}_*
*_Link de WhatsApp: wa.me/${m.sender.split`@`[0]}_*

*_Ese es tu perfil. Gracias por preferir The Shadow Brokers - Bot :D_*
`.trim()
    let mentionedJid = [m.sender]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile']
handler.tags = ['rpg']
handler.command = /^(profile|profil|pp|propile|propil)$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
