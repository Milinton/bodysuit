let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*_「 ANTI LINK 」_*\n\n*_Detectado_* *_${await this.getName(m.sender)}_* *_has enviado un enlace al grupo!*\n\n*Lo siento, serás expulsado de este grupo, adiós!_*`)
    if (isAdmin) return m.reply('*Lo siento, eres administrador, no te expulsare..*')
    if (!isBotAdmin) return m.reply('*_El bot no es administrador, ¿cómo puede sacar a la gente?_*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*_Lol enviaste el propio enlace de tu grupo :v_*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler