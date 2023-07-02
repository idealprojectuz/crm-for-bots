const registerstart = require("../keyboards/register");
const path = require("path");
module.exports = async (ctx) => {
  const message = `Assalomu alaykum ${ctx.from.first_name} \n${String(
    process.env.LEARNING_CENTER_NAME
  )} ning o'quvchilari tomonidan qilingan botga xush kelibsiz ushbu bot musoboqa uchun yaratildi botdan foydalanish o'quvchi id raqamingiz va parolingiz orqali kirishingiz mumkin `;
  const registered_user_msg = `Assalomu alaykum ${ctx.from.first_name} botga xush kelibsiz uyga vazifa o'qtuvchingiz bersa sizga xabar beramiz kuningiz xayrli o'tsin`;

  ctx.replyWithAnimation(
    {
      source: path.join(
        __dirname,
        "..",
        "..",
        "..",
        "uploads",
        "videos",
        "bot_production.mp4"
      ),
    },
    {
      caption: ctx.session.isregister ? registered_user_msg : message,
      reply_markup: ctx.session.isregister ? undefined : registerstart,
    }
  );
  ctx.session.userData = {};
  ctx.scene.leave();
};
