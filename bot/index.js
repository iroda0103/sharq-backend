const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('8492751692:AAHUAo6V27GRaCatJ38T4rxLG2e9xyyWJVs');

bot.catch((err, ctx) => {
  console.error(`Error for user ${ctx.from?.id}:`, err);
});
console.log("Bot is starting...");

//start komandasi
bot.start(async (ctx) => {
  const telegramUser = ctx.from;
  console.log(telegramUser.id);

  ctx.reply(
    `👋 Assalomu alaykum, hurmatli mijoz!

🍽 Bizning xizmat orqali shahar va tumanlardagi eng yaxshi restoranlardan tez va qulay tarzda ovqat buyurtma qilishingiz mumkin.

📲 Davom etish uchun, iltimos telefon raqamingizni yuboring:`,
    Markup.keyboard([
      Markup.button.contactRequest('📱 Telefon raqamni yuborish')
    ])
      .oneTime()
      .resize()
  );
});

// Foydalanuvchi yuborgan xabarlarni qayta ishlash
async function startBot() {
  try { 
    await bot.launch();
    console.log("🤖 Bot ishga tushdi");

    // Setup graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
  } catch (error) {
    console.error("❌ Bot ishga tushirishda xatolik:", error);
    process.exit(1);
  }
}

// Botni ishga tushirish
startBot().catch(console.error);

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});