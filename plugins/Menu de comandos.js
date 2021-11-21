let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let tags = {
  'general': 'General',
  'rpg': 'Epic RPG',
  'game': 'Game',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'admin': 'Admin',
  'group': 'Group',
  'premium': 'Premium',
  'internet': 'Internet',
  'anonymous': 'Anonymous Chat',
  'nulis': 'MagerNulis & Logo',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'fun': 'Fun',
  'database': 'Database',
  'vote': 'Voting',
  'absen': 'Absen',
  'quran': 'Al Qur\'an',
  'jadibot': 'Jadi Bot',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
}
const defaultMenu = {
  before: `
*_Hola ✨%name✨ gracias por usar The Shadow Brokers - Bot 🤖, esperamos que te encuentres bien :)_*

*_Grupo oficial del Bot: https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ_*
*_- Entérate de las novedades del Bot_* 

*<ESTADO DEL BOT/>*
- Checa si el Bot esta activo, si no te responde a este comando significa que no esta activo 

° ඬ⃟☠️ _%pestado_ 

<REGISTRO/>*

° ඬ⃟📓 _%pdaftar nombre.edad_

*<UNE EL BOT A TU GRUPO/>*

° ඬ⃟👽 _%pautojoin *link del grupo*_

*<TOP/>*

° ඬ⃟🎖️ _%ptop10gays_
° ඬ⃟🎖️ _%ptoplind@s_
° ඬ⃟🎖️ _%ptopput@s_

*<NUMERO DEL CREADOR Y DE LA MODERADORA/>*

° ඬ⃟👻 _%pcontacto_

*<OTROS MENUS/>*

° ඬ⃟ℹ️ _%pcodigosparaaudios_
° ඬ⃟ℹ️ _%pinstalarbot_

*<REPORTA FALLOS EN ALGÚN COMANDO/>*
- Reporta cualquier comando que falle para poder solucionarlo y/o quitarlo

° ඬ⃟🔰 _%pbug *texto*_
° ඬ⃟🔰 _%preport *texto*_

*<JUEGOS/>*
- Nota: El simsimi solo responde algunas veces en español, la mayor parte del tiempo responde en indonesio o ingles

° ඬ⃟🕹 _%pgay *@tag / nombre*_
° ඬ⃟🕹 _%plesbi *@tag / nombre*_
° ඬ⃟🕹 _%pputa *@tag / nombre*_
° ඬ⃟🕹 _%pputo *@tag / nombre*_
° ඬ⃟🕹 _%prata *@tag / nombre*_
° ඬ⃟🕹 _%pmanco *@tag / nombre*_
° ඬ⃟🕹 _%pmanca *@tag / nombre*_
° ඬ⃟🕹 _%pformarpareja_
° ඬ⃟🕹 _%pdado_
° ඬ⃟🕹 _%psimsimi *texto*_
° ඬ⃟🕹 _%pformartrio_
° ඬ⃟🕹 _%pdisparaalninja_
° ඬ⃟🕹 _%psubirestado *texto / responder video, imagen o gif*_

*<DESCARGAS/>*

° ඬ⃟📥 _%pimage *texto*_
° ඬ⃟📥 _%pgimage *texto*_
° ඬ⃟📥 _%pytsearch *texto*_
° ඬ⃟📥 _%pytmp4 *link yt*_
° ඬ⃟📥 _%pytmp3 *link yt*_
° ඬ⃟📥 _%pplay *titulo de la música*_
° ඬ⃟📥 _%pplay2 *titulo del video*_
° ඬ⃟📥 _%plirik *nombredelacanción*_
° ඬ⃟📥 _%pgoogle *texto*_
° ඬ⃟📥 _%pgooglef *texto*_
° ඬ⃟📥 _%pmediafire *link de mediafire*_
° ඬ⃟📥 _%ppinterestvideo *link de pinterest*_
° ඬ⃟📥 _%ptiktokaudio *link del tiktok*_
° ඬ⃟📥 _%ppinterest2 *texto*_
° ඬ⃟📥 _%pSpotify *Artista, nombre de la canción*_
° ඬ⃟📥 _%pxnxx *link de xnxx*_

*<GESTION DE GRUPOS/>* 

° ඬ⃟💎 _%ppromote *@tag*_
° ඬ⃟💎 _%pkick *@tag*_
° ඬ⃟💎 _%padd  *número*_
° ඬ⃟💎 _%pgroup *open/close*_
° ඬ⃟💎 _%penable welcome_
° ඬ⃟💎 _%pdisable welcome_
° ඬ⃟💎 _%plistonline_
° ඬ⃟💎 _%penable antilink_
° ඬ⃟💎 _%pdisable antilink_ 
° ඬ⃟💎 _%plink_
° ඬ⃟💎 _%plinkgroup_
° ඬ⃟💎 _%phidetag *texto*_
° ඬ⃟💎 _%psetname *Nuevo nombre del grupo*_
° ඬ⃟💎 _%pinfogroup_
° ඬ⃟💎 _%pinvocar *texto*_
° ඬ⃟💎 _%pdel *responder a un mensaje del bot*_

*<CREADORES/>*

° ඬ⃟🧧 _%pstyle *texto*_
° ඬ⃟🧧 _%phitler *responde a una imagen*_
° ඬ⃟🧧 _%pblur *responde a una imagen*_
° ඬ⃟🧧 _%ps_
° ඬ⃟🧧 _%psticker_
° ඬ⃟🧧 _%psemoji *emoji*_
° ඬ⃟🧧 _%pswm *link de imagen de google*_
° ඬ⃟🧧 _%pattp *texto*_
° ඬ⃟🧧 _%pattp2 *texto*_
° ඬ⃟🧧 _%pttp2 *texto*_
° ඬ⃟🧧 _%pttp4 *texto*_
° ඬ⃟🧧 _%pttp6 *texto*_
° ඬ⃟🧧 _%pttpdark *texto*_
° ඬ⃟🧧 _%pwasted_
° ඬ⃟🧧 _%ptrash_
° ඬ⃟🧧 _%prainbow_
° ඬ⃟🧧 _%pcircle_
° ඬ⃟🧧 _%ptomp3 *responde a un video*_
° ඬ⃟🧧 _%ptoimg *responde a un sticker*_
° ඬ⃟🧧 _%ptovideo *responde a una nota de voz*_

*<FUTBOL RANDOM/>*

° ඬ⃟⚽ _%pfutbol_
° ඬ⃟⚽ _%pMessi_
° ඬ⃟⚽ _%pCristianoRonaldo_
° ඬ⃟⚽ _%psiiuuuu_

*<RANDOM/>*

° ඬ⃟👾 _%pmeme_
° ඬ⃟👾 _%pmeme2_
° ඬ⃟👾 _%pmeme3_
° ඬ⃟👾 _%pcat_
° ඬ⃟👾 _%pdog_
° ඬ⃟👾 _%ppikachu_
° ඬ⃟👾 _%pwaifu_
° ඬ⃟👾 _%papakah *pregunta*_
° ඬ⃟👾 _%pblackpink_
° ඬ⃟👾 _%preto_
° ඬ⃟👾 _%pverdad_
° ඬ⃟👾 _%pimagenrandom_
° ඬ⃟👾 _%prandomkpop_
° ඬ⃟👾 _%pneko_
° ඬ⃟👾 _%piqtest_
° ඬ⃟👾 _%pkpopitzy_
° ඬ⃟👾 _%pnavidad_
° ඬ⃟👾 _%panime *random / waifu / husbu /neko*_
° ඬ⃟👾 _%ploli_


*<EXPRESIONES EN STICKERS/>*

° ඬ⃟😜 _%pnyan_
° ඬ⃟😜 _%pslap_

*<COMANDOS +18/>*

~HETERO~
° ඬ⃟🔞 _%pvideo1_
° ඬ⃟🔞 _%pvideo2_
° ඬ⃟🔞 _%pvideo3_
° ඬ⃟🔞 _%pvideo4_

~LESBIAN~
° ඬ⃟🔞 _%pvideolesbian1_
° ඬ⃟🔞 _%pvideolesbian2_

~GAY~
° ඬ⃟🔞 _%pvideogay1_
° ඬ⃟🔞 _%pvideogay2_

~ANIME HENTAI~
° ඬ⃟🔞 _%pvideoh1_
° ඬ⃟🔞 _%plolivid_

~IMAGENES RANDOM~
° ඬ⃟🔞 _%plesbian_
° ඬ⃟🔞 _%pporno_
° ඬ⃟🔞 _%prandomnsfw_
° ඬ⃟🔞 _%ppornogif_
° ඬ⃟🔞 _%phentai_
° ඬ⃟🔞 _%ppene_
° ඬ⃟🔞 _%pecchi_
° ඬ⃟🔞 _%ppussy_
° ඬ⃟🔞 _%pboobs_
° ඬ⃟🔞 _%ppanties_
° ඬ⃟🔞 _%pschool_

~OTROS~
° ඬ⃟🔞 _%pindohot_

*<EFECTOS PARA NOTAS DE VOZ O AUDIOS/>*
​​​
° ඬ⃟🎤 _%pbass_
° ඬ⃟🎤 _%pdeep_
° ඬ⃟🎤 _%pearrape_
° ඬ⃟🎤 _%pfast_
° ඬ⃟🎤 _%pfat_
° ඬ⃟🎤 _%pnightcore_
° ඬ⃟🎤 _%preverse_
° ඬ⃟🎤 _%probot_
° ඬ⃟🎤 _%pslow_
° ඬ⃟🎤 _%psmooth_
° ඬ⃟🎤 _%pvibracion *cantidad*_

*<EXTRAS/>*

° ඬ⃟🐺 _%pspamchat *texto*_
° ඬ⃟🐺 _%pprofile_
° ඬ⃟🐺 _%pafk *motivo*_
° ඬ⃟🐺 _%preadmore *texto1| texto2*_
° ඬ⃟🐺 _%pqr *texto*_
° ඬ⃟🐺 _%preadqr *responde a un código QR*_
° ඬ⃟🐺 _%pcalc *expresión matemática*_ 
° ඬ⃟🐺 _%pzodiac *AAAA MM DD*_
° ඬ⃟🐺 _%pscan  *Numero \ Ejemplo: 5219996125657*_
° ඬ⃟🐺 _%pkpop_
° ඬ⃟🐺 _%ptranslate es *texto*_

*<AUDIOS/>* 

° ඬ⃟🎧 _%pbuenosdias_
° ඬ⃟🎧 _%pbuenosdias2_
° ඬ⃟🎧 _%pfiestadeladmin_
° ඬ⃟🎧 _%pfiestadeladmin2_
° ඬ⃟🎧 _%pviernes_
° ඬ⃟🎧 _%pchicalgante_
° ඬ⃟🎧 _%pbaneado_
° ඬ⃟🎧 _%panadieleimporta_
° ඬ⃟🎧 _%phoradesexo_
° ඬ⃟🎧 _%pvetealavrg_
° ඬ⃟🎧 _%phola_
° ඬ⃟🎧 _%pteamo_
° ඬ⃟🎧 _%pyamete_
° ඬ⃟🎧 _%pdiagnosticadocongay_
° ඬ⃟🎧 _%pbañate_
° ඬ⃟🎧 _%pfelizjueves_
° ඬ⃟🎧 _%pbot_gemime_
° ඬ⃟🎧 _%pvivanlosnovios_
° ඬ⃟🎧 _%pcancion_
° ඬ⃟🎧 _%p:v_
° ඬ⃟🎧 _%pesputoo_

*<CHAT ANONIMO/>*

° ඬ⃟📳 _%pstart_
° ඬ⃟📳 _%pnext_
° ඬ⃟📳 _%pleave_

*<MUSICA CORTESIA DEL ADMIN/>*
- Puede demorar 2 minuto aproximadamente en enviar el archivo mp3

° ඬ⃟🎵 _%pcortesiadeladmin1_

*<VIDEOS DE MUSICAS SAD/>*
- Puede demorar 1 minuto en enviar el archivo mp4

° ඬ⃟⏯️ _%pedmaverickdondeestas_
° ඬ⃟⏯️ _%pdevuelvemeamichicahombresg_
° ඬ⃟⏯️ _%pberetlosiento_

*<CONVIERTETE EN BOT/>*

° ඬ⃟🏷 _%pstop_
° ඬ⃟🏷 _%pjadibot_

*<AVISOS/>*

° ඬ⃟📢 _Si en algún momento les sale que se acabo su limite usar el siguiente comando:
° ඬ⃟📢  _%presetlimit_

*<LOGOS PERSONALIZADOS/>*
- Si llega a fallar y/o manda el archivo en lugar de la imagen intenta nuevamente, pero con menos letras hasta conseguir la imagen 

° ඬ⃟🖍️ _%ptahta *texto*_
° ඬ⃟🖍️ _%pnulis *texto*_
° ඬ⃟🖍️ _%pnulis2 *texto*_
° ඬ⃟🖍️ _%pfflogo *texto*_
° ඬ⃟🖍️ _%pcrismeslogo *texto*_
° ඬ⃟🖍️ _%pcup1 *texto*_
° ඬ⃟🖍️ _%pphlogo *texto1|texto2*_
° ඬ⃟🖍️ _%pflamming *texto*_
° ඬ⃟🖍️ _%pgoldtext *texto*_
° ඬ⃟🖍️ _%pwolflogo *texto1|texto2*_
° ඬ⃟🖍️ _%pgaminglogo *texto*_
° ඬ⃟🖍️ _%pytcomment *texto*_
° ඬ⃟🖍️ _%pbreakwall *texto*_
° ඬ⃟🖍️ _%ppokemon *texto*_
° ඬ⃟🖍️ _%phornycard_ 
° ඬ⃟🖍️ _%plolice *me / @tag*_
° ඬ⃟🖍️ _%psimpcard *me / @tag*_

*<CREA TU NUMERO VIRTUAL E INSTALA UN BOT EN EL/>*

° ඬ⃟🔥 _%ptutorial_

*_「 𝙏͚͜͝͠𝙝͚͜͝͠𝙚͚͜͝͠ ͚͜͝͠𝙎͚͜͝͠𝙝͚͜͝͠𝙖͚͜͝͠𝙙͚͜͝͠𝙤͚͜͝͠𝙬͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙧͚͜͝͠𝙤͚͜͝͠𝙠͚͜͝͠𝙚͚͜͝͠𝙧͚͜͝͠𝙨͚͜͝͠ ͚͜͝͠-͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙤͚͜͝͠𝙩͚͜͝͠ ͚͜͝͠  」_*
%readmore
%readmore
%readmore
_No seguir bajando, comandos siguientes uso exclusivo propietario del Bot y moderadores_
%readmore
%readmore
%readmore
*<PROPIETARIO Y MODERADORES/>*

° ඬ⃟🤖 _%pbanuser *@tag*_
° ඬ⃟🤖 _%pbanchat_
° ඬ⃟🤖 _%psetmenu_
° ඬ⃟🤖 _%penable *restrict*_
° ඬ⃟🤖 _%penable *autoread*_
° ඬ⃟🤖 _%pdisable *autoread_
° ඬ⃟🤖 _%penable *autoread_
° ඬ⃟🤖 _%pbanlist_
° ඬ⃟🤖 _%pbcgc *texto*_
° ඬ⃟🤖 _%pbc *texto*_
° ඬ⃟🤖 _%prestart_
° ඬ⃟🤖 _%pbackup_
° ඬ⃟🤖 _%punbanchat_
° ඬ⃟🤖 _%punban *@tag*_
° ඬ⃟🤖 _%psetwelcome *@tag*_
° ඬ⃟🤖 _%psetbye *@tag*_
° ඬ⃟🤖 _%plistgroup *@tag*_
° ඬ⃟🤖 _%pconfigurarbot_

*_「 𝙏͚͜͝͠𝙝͚͜͝͠𝙚͚͜͝͠ ͚͜͝͠𝙎͚͜͝͠𝙝͚͜͝͠𝙖͚͜͝͠𝙙͚͜͝͠𝙤͚͜͝͠𝙬͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙧͚͜͝͠𝙤͚͜͝͠𝙠͚͜͝͠𝙚͚͜͝͠𝙧͚͜͝͠𝙨͚͜͝͠ ͚͜͝͠-͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙤͚͜͝͠𝙩͚͜͝͠ ͚͜͝͠  」_*

*_IGNORAR LO SIGUIENTE_*

*_IGNORAR LO SIGUIENTE_*

*_IGNORAR LO SIGUIENTE_*

*_IGNORAR LO SIGUIENTE_*

*_IGNORAR LO SIGUIENTE_*
`.trimStart(),
  header: '╭─「 %category 」',
  body: '│ • %cmd %islimit %isPremium',
  footer: '╰────\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let pp = await conn.getProfilePicture(conn.user.jid).catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
    conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m).catch(_ => conn.reply(m.chat, text.trim(), m))
  } catch (e) {
    conn.reply(m.chat, 'LO SENTIMOS, PARECE QUE MI MENU TIENE UN ERROR, POR LO QUE NO ES POSIBLE ENVIARLO, REPORTELO CON MI CREADOR CON EL COMANDO #bug el menu da error PARA PODER SOLUCIONARLO', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['General']
handler.command = /^(menu|help|info|menú|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 50

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "Woi. Pagi"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 12) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 19) {
    res = "Selamat Malam"
  }
  return res
}
