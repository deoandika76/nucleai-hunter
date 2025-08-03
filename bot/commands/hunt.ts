import { Context } from 'telegraf';

const huntCommand = async (ctx: Context) => {
  const args = ctx.message?.text?.split(' ') || [];
  const target = args[1];

  if (!target) {
    return ctx.reply('❌ Format salah. Contoh: /hunt https://target.com');
  }

  ctx.reply(`🔍 Scanning ${target}...`);

  // TODO: jalankan nuclei + GPT nanti
  ctx.reply(`✅ Scan selesai (dummy).`);
};

export default huntCommand;