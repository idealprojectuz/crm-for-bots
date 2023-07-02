const { fetchMy } = require("../../utils/pgsql");

module.exports = async (ctx, next) => {
  try {
    const userid =
      ctx.update?.message?.from.id ||
      ctx.update?.callback_query?.from.id ||
      ctx.message.from.id;
    const user = await fetchMy(
      "select id, tg_id from students where tg_id= $1",
      [Number(userid)]
    );
    if (user?.length) {
      ctx.session.userId = user[0].id;
      ctx.session.isregister = true;
      next();
      return;
    }
    ctx.session.isregister = false;
    next();
  } catch (error) {
    console.log(error.message);
  }
};
