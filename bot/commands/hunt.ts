import { Context, NarrowedContext } from 'telegraf';
import { Message, Update } from 'telegraf/typings/core/types/typegram';

const huntCommand = async (
  ctx: NarrowedContext<Context<Update>, Update.MessageUpdate<Message.TextMessage>>
) => {
  const messageText = ctx.message.text;
  const args = messageText.split(' ');
  const target = args[1];

  if (!target) {
    return ctx.reply('❌ Format salah. Contoh: /hunt https://target.com');
  }

  ctx.reply(`🔍 Scanning ${target}...`);

  // dummy reply
  ctx.reply(`✅ Scan selesai (dummy).`);
};

export default huntCommand;