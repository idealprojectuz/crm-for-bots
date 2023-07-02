const { Telegraf, Scenes, session } = require("telegraf");
const idcheck = require("../validator/idcheck");
const passwordcheck = require("../validator/passcheck");
const start = require("../utils/start");
const { fetchMy } = require("../../utils/pgsql");
const updatedata = require("../../utils/updateData");
const register = new Scenes.WizardScene(
  "id",
  // ismni so'rash
  async (ctx) => {
    ctx.reply(
      "Tizimga kirish uchun id raqamingizni yozing \nbekor qilish uchun /start buyrug'ini yuboring"
    );
    ctx.session.userData = {};
    return ctx.wizard.next();
  },
  async (ctx) => {
    try {
      if (ctx.message.text == "/start") {
        start(ctx);
        return;
      }
      const { error, value } = idcheck.validate({
        id: ctx.message.text,
      });
      if (error) {
        ctx.reply(`id raqamlardan iborat bo'lishi kerak qayta urinib ko'ring`);
        return;
      }
      ctx.session.userData.userid = value.id;
      ctx.reply(
        `Parolingizni kiriting \nParolingiz sizga sms bo'lib borgan o'quvchi sifatida ro'yxatdan o'tganingizda`
      );
      return ctx.wizard.next();
    } catch (error) {
      console.log(error.message);
    }
  },
  async (ctx) => {
    try {
      if (ctx.message.text == "/start") {
        start(ctx);
        return;
      }
      const { error, value } = passwordcheck.validate({
        password: ctx.message.text,
      });
      if (error) {
        ctx.reply(
          "login yoki parol xato qaytadan urinib ko`ring bekor qilish uchun /start ni bosing yoki \nparolni tog`ri kiriting"
        );
        return;
      }
      const result = await updatedata(
        "students",
        {
          tg_id: ctx.message.from.id,
        },
        {
          id: ctx.session.userData.userid,
          phone: value.password,
        }
      );
      if (result.ok && result.data.length) {
        ctx.reply(
          `Tabriklaymiz siz tizimga kirdingiz endi siz ushbu bot orqali vazifalarni ustozingizga yuborishingiz mumkin bo'ladi`
        );
        return ctx.scene.leave();
      }
      ctx.reply(
        "login yoki parol xato qaytadan urinib ko`ring bekor qilish uchun /start ni bosing yoki \nparolni tog`ri kiriting"
      );
    } catch (error) {
      console.log(error.message);
    }
  }
  //telefon raqamni so'rash
);

module.exports = register;
