let handler = async m => m.reply(`
*_Estado del Bot:_*\n\n*_Bot activo: ✅_*\n*_Bot uso público: ✅_*\n\n*_Puede solicitar el menu con #menu_*\n\n_©The Shadow Brokers - Bot_
`.trim()) // Tambah sendiri kalo mau
handler.help = ['Estado']
handler.tags = ['info']
handler.command = /^estado$/i

module.exports = handler