require("dotenv").config();
const { Telegraf } = require("telegraf");
const path = require("path");
const bot = new Telegraf(process.env.BOT_TOKEN);
const registerstart = require("./keyboards/register");
const MyScane = require("./scenes/index");
const { log } = require("console");
const isregister = require("./middleware/isregister");
const startcommand = require("./utils/start");
//islogin check
MyScane(bot);

bot.use(isregister);

bot.telegram.setMyCommands([
  {
    name: "start",
    command: "start",
    description: "Botni qayta ishga tushurish",
  },
]);

bot.start(startcommand);

bot.action("login", async (ctx) => {
  ctx.scene.enter("id");
});

bot.action(/^homework_[-/0-9]+$/, (ctx) => {
  ctx.session.homeworkId = ctx.update.callback_query.data.split("_")[1];

  ctx.scene.enter("homework");
  ctx.answerCbQuery(
    "Vazifani qilib bo'lganingizdan so'ng github havolani botga yuborishingiz kerak bo'ladi vazifalarni keyingi darsingiz boshlangunga qadar topshirishingiz kerak bo'ladi ",
    {
      show_alert: true,
      cache_time: 60,
    }
  );
});

bot.launch();
