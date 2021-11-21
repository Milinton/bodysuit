let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i



let handler = async (m, { conn, text }) => {

    let [_, code] = text.match(linkRegex) || []

    if (!code) throw 'Link Invalido, Ingrese Una Enlace De Union A Un Grupo'

    let res = await conn.acceptInvite(code)

    m.reply(`*_Unido al grupo con ID de regitro ${res.gid}_*\n\n*_✅Unido correctamente✅_*`)

}

handler.help = ['autojoin <link gc>']

handler.tags = ['premium']



handler.command = /^autojoin|join$/i



handler.register = false
handler.owner = false
handler.private = false
handler.premium = false



module.exports = handler

