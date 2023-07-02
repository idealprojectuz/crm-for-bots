const { Markup } = require("telegraf");

module.exports = {
  inline_keyboard: [[Markup.button.callback("Tizimga kirish", "login")]],
};
