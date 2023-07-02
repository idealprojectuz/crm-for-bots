const {
  session,
  Scenes: { Stage },
} = require("telegraf");
const register = require("./register");
const homework = require("./homework");
const stage = new Stage();

const MyScane = async (bot) => {
  stage.register(register);
  stage.register(homework);
  bot.use(session());
  bot.use(stage.middleware());
};
module.exports = MyScane;
