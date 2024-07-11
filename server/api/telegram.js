const TelegramBot = require('node-telegram-bot-api');

// 初始化bot
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { body } = req;
    
    // 处理Telegram更新
    bot.processUpdate(body);
    
    // 响应Telegram的webhook请求
    res.status(200).json({ ok: true });
  } else {
    // 处理其他HTTP方法
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
