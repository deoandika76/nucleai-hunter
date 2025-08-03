import { Context } from 'telegraf';

const huntCommand = async (ctx: Context) => {
  const messageText = 'text' in ctx.message! ? ctx.message.text : '';
  const args = messageText.split(' ');
  const target = args[1];

  if (!target) {
    return ctx.reply('❌ Format salah. Contoh: /hunt https://target.com');
  }

  ctx.reply(`🔍 Scanning ${target}...`);

  // dummy reply dulu
  ctx.reply(`✅ Scan selesai (dummy).`);
};

export default huntCommand;