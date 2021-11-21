let handler = async (m, { conn, args }) => { 
    if (!args || !args[0]) throw 'A quien quiere banear?'
    let mention = m.mentionedJid[0] || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Etiqueta a algun usuario'
    if (!(mention in global.DATABASE._data.users)) throw 'El usuario no está registrado en la BASE DE DATOS!!'
    let user = global.DATABASE._data.users[mention]
    if (user.Banneduser) throw 'El usuario ha sido baneado!!'
    let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || '' 
    user.Banneduser = true 
    user.BannedReason = txt 
    m.reply('Usuario baneado con éxito!')
    m.reply('*Ah sido BANEADO por el PROPIETARIO o algun MODERADOR!!*\n *CONTACTO* \n' + global.owner.map((v, i) => '*Owner ' + (i + 1) + ':* wa.me/' + v).join('\n') + '\n\n' + global.mods.map((v, i) => '*Moderador ' + (i + 1) + ':* wa.me/' + v).join('\n'), mention)
}

handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban(user)?$/i

handler.mods = true 

module.exports = handler
