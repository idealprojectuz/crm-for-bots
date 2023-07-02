const { Telegraf, Scenes, session } = require("telegraf");
const start = require("../utils/start");
const validator = require("../validator/link_validator");
const createdata = require("../../utils/createData");
const homework = new Scenes.WizardScene(
  "homework",
  // ismni so'rash
  async (ctx) => {
    try {
      //   console.log(ctx.session.userId);
      //   console.log(ctx.session.homeworkId);
      ctx.reply(
        "Vazifani githubga yuklang va havolani botga yuboring ortga qaytish uchun /start buyrug'ini yuboring"
      );
      return ctx.wizard.next();
    } catch (err) {
      console.log(err.message);
    }
  },
  async (ctx) => {
    try {
      if (ctx.message.text == "/start") {
        start(ctx);
        return;
      }
      const { error, value } = validator.validate({
        link: ctx.message.text,
      });
      if (error) {
        ctx.reply(
          "Siz faqat link yuborishingiz mumkin ortiqcha so`zlar qo`sha olmaysiz to'g'ri linkni kiriting yoki /start buyrug'i yordamida holatdan chiqishingiz mumkin"
        );
        return;
      }
      const result = await createdata("homework_answers", {
        homeworks_id: ctx.session.homeworkId,
        students_id: ctx.session.userId,
        github_link: value.link,
      });
      if (result.ok && result.data.length) {
        ctx.reply(
          `Uyga vazifa ko'rib chiqishga yuborildi Yordamchi o'qtuvchi ko'rib chiqgach sizga shart qoldiradi  `
        );
        ctx.scene.leave();
        return;
      }
      ctx.reply("nmadur xato ketdi iltimos qaytadan urinib ko`ring");
    } catch (err) {
      console.log(err.message);
    }
  }
);

module.exports = homework;
