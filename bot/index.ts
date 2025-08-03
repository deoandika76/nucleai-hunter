import { Telegraf } from 'telegraf';
import { TELEGRAM_BOT_TOKEN } from '../config/env';
import huntCommand from './commands/hunt';

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

bot.command('hunt', huntCommand);

bot.launch().then(() => {
  console.log('🤖 NucleAI Bot is running...');
});

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));