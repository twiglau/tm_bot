import TelegramBot from "node-telegram-bot-api";
const TOKEN = "6858819608:AAE7wOfSKieVOBxhY3E8bXkrASgBeuOO3_A";

const BOT = new TelegramBot(TOKEN, {
  polling: true,
});

// 监听接受到消息
BOT.on("message", async (msg) => {
  console.log("msg: ", msg);
});
