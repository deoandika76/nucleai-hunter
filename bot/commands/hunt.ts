import { Context } from 'telegraf';

const huntCommand = async (ctx: Context) => {
  // cek jika message adalah teks (text message)
  if ('text' in ctx.message!) {
    const messageText = ctx.message.text;
    const args = messageText.split(' ');
    const target = args[1];

    if (!target) {
      return ctx.reply('❌ Format salah. Contoh: /hunt https://target.com');
    }

    ctx.reply(`🔍 Scanning ${target}...`);

    // sementara dummy reply
    ctx.reply(`✅ Scan selesai (dummy).`);
  } else {
    ctx.reply('❌ Perintah hanya berlaku pada pesan teks.');
  }
};

export default huntCommand;