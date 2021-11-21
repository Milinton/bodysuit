let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
*PRIMER PASO CREAR UN NUMERO VIRTUAL*

👑💎Como hacer números virtuales💎👑

Los números virtuales son ideal para ocultar tu identidad... también son prácticos para usos de Bots ya que si te desactivan ese numero no perderás tu número oficial....

+1
TextNow(Canada🇨🇦 y Eeuu🇺🇸)

Hay varias para sacar +1 pero esta es sin duda la vieja confiable...
Create varias cuentas gmail (puedes usar temp mail) y abre la app da clic en "sign up" con email...
Códigos 
Eeuu: 420,303,580
Canada : 450
-Dale en todos los permisos... menos en el de ubicación...
 -Copia el numero obtenido y verifica si sirve para whatsapp...
La posibilidad es de un 50% 

Si no sirve le das en mi cuenta y luego en liberar número y elige otro....
-Si tampoco ese número nuevo funciona deberás cerrar sesión y crearte otra cuenta y así sucesivamente hasta que te salga uno que sirva para whatsapp

-En texnow se puede liberar el número sólo una vez cada 15 días..

-registra el numero y dale en llamada.. contesta la llamada y anota el codigo...

Link de descarga TextNow: https://play.google.com/store/apps/details?id=com.enflick.android.TextNow&hl=es_MX&gl=US
Link de descarga de temp mail: https://tempmail-email-temporal.uptodown.com/android/descargar
Link de un WhatsApp secundario (no es necesario desinstalar el WhatsApp de playstore: https://www.mediafire.com/file/uqua0uhfq6xrvqk/1%C3%84%C2%90%C3%8F%C2%B4%C3%8F%C2%B4%C3%A2%C2%B1%C2%AE_%C3%A2%C2%A9%C2%945_TERCIARIO.apk/file
- Si no esta disponible en tu pais contáctame y a la brevedad posible te proporciono un numero virtual 

*PRIMER PASO LISTO.. AHORA SIGUE INSTALACION DE APPS PARA PODER EJECUTAR EL BOT*

- Termux de F-Droid: https://f-droid.org/en/packages/com.termux/
° Dar clic en *Download APK* 81 MiB PGP Signature | Build Log

Instalar termux en PC
Instala bluetacks: https://www.bluestacks.com/es/bluestacks-5.html
Tutorial: https://youtu.be/Jq0LnZvhbnE
- Nota: No descargue el de la play store, descarga el de este enlace: https://f-droid.org/en/packages/com.termux/

*SEGUNDO PASO LISTO.. AHORA EL TERCER PASO.. ENCUENTRA EL BOT QUE MAS TE GUSTE*

En YouTube buscas: Bot WhatsApp termux 
- https://www.youtube.com/results?search_query=bot+whatsapp+termux

Debes saber que existen 2 tipos de bots los que son via archivo ZIP y los que son via GitHub. 
Para los que son via ZIP necesitar descomprimir el archivo en tu teléfono para eso te recomiendo esta app: https://es-file-explorer.uptodown.com/android/descargar

Tutorial de instalación del Bot via Zip:  https://www.youtube.com/watch?v=-hrwDIV4Bdo&t=171s
- Nota: El bot utilizado en el video ya no funciona, venció el servidor donde se alojaba, por lo que al momento de buscar tu bots debes corroborar que sean recientes para evitar esos problemas /// menos de 1 mes tiene que tener el video 

Instalación de bot GitHub: https://www.youtube.com/watch?v=uaxQCpzVXOo

Quieres instalar mi Bot? los comandos son:

pkg update && pkg upgrade

pkg install bash && pkg install wget

wget -O - https://raw.githubusercontent.com/TheShadowBrokers1/Games-wabot/main/install2.sh | bash

EN CUALQUIER BOT QUE DESEES INSTALAR DEBERAS ESCANEAR UN CODIGO QR EN LA APLICACION DE WHATSAPP SECUNDARIO QUE INSTALAMOS ANTERIRORMENTE 

EN LA PARTE SUPERIROR DERECHA EN LOS TRES PUNTOS IR A DISPOSITIVOS VINCULADOS Y WHATSAPP WEB Y ESCENAR EL CODIGO

SI TODO EL PROCESO LO DESEAS HACER EN UN SOLO CEL DEBERAS TOMAR CAPTURA RAPIDAMENTE Y ENVIARTE LA IMAGEN A UNA CONVERSACION QUE TENGAS ABIERTO EN LA COMPUTADORA CON WHATSAPP WEB PARA PODER ESCANEAR EL CODIGO DESDE TU CEL

*NOTAS EXTRAS*
- Si realizas todos los pasos y te da algún error o no se activa, pásame captura y/o contacta con el creador del Bot comúnmente dejan su numero en la descripción del Video

Editar el Bot desde PC o Laptop: https://youtu.be/rOPBe6O-k3M?t=417

Te tienes que crear una cuanta aquí: https://github.com/signup?source=login 

Si ese enlace no te va usa este: https://github.com

Para editar el Bot desde android en archivos ZIP: https://youtu.be/U12188A2tpA

*QUEDO A TUS ORDENES A MI NUMERO PERSONAL*
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['General']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

