const getCustomParams = require("../../utils/getCustomParams");
const succesResponse = require("../../utils/succesResponse");
const createData = require("../../utils/createData");
const ErrorHandler = require("../../utils/errorHandle");
const { fetchMy } = require("../../utils/pgsql");
const validate = require("./validator");
const validationError = require("../../utils/validationError");
const destroyData = require("../../utils/destroyData");
const updateData = require("../../utils/updateData");
const getCount = require("../../utils/getCount");
const axios = require("axios");

const get = async (req, res, next) => {
  const { page, limit, group_id } = req.query;
  let query = `select * from homeworks`;
  if (group_id) {
    query += ` WHERE group_id = $1`;
  }

  const offset = (parseInt(page) - 1) * parseInt(limit) || 0;
  const queryLimit = parseInt(limit) || 5;

  query += ` OFFSET ${offset} LIMIT ${queryLimit}`;
  const result = await fetchMy(query, group_id ? [group_id] : null);
  const count = await getCount("homeworks");
  succesResponse(res, result, next, count);
};

const getById = async (req, res, next) => {
  const result = await fetchMy(
    `select * from homeworks
   where id = $1`,
    [req.params.id]
  );
  if (result.length) {
    succesResponse(res, result[0], next);
    return;
  }
  next(new ErrorHandler("topilmadi", 404));
};

const destroy = async (req, res, next) => {
  const result = await destroyData("homeworks", {
    id: req.params.id,
  });

  if (result.length) {
    succesResponse(res, result[0], next);
    return;
  }
  next(new ErrorHandler("topilmadi", 404));
};

const create = async (req, res, next) => {
  const { error, value } = validate.post.validate(req.body);
  if (error) {
    validationError(res, error, next);
    return;
  }
  const result = await createData("homeworks", value);
  if (result.ok && result.data) {
    succesResponse(res, result.data[0], next);
    const { id, group_id, title, description } = result.data[0];
    const users = await fetchMy(
      "SELECT * FROM students WHERE group_id = $1 AND tg_id IS NOT NULL",
      [group_id]
    );

    const replyMarkup = {
      inline_keyboard: [
        [
          {
            text: "Vazifani yuborish",
            callback_data: `homework_${id}`,
          },
        ],
      ],
    };

    const telegramBotUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;

    users.forEach(async (user) => {
      const chatId = user.tg_id;
      const messageText = `Sizga yangi vazifa: ${title}\n\n${description}`;

      // Homeworkni yuborish
      try {
        await axios.post(telegramBotUrl, {
          chat_id: chatId,
          text: messageText,
          reply_markup: JSON.stringify(replyMarkup),
        });
      } catch (error) {
        console.error(`Homework yuborishda xatolik foydalanuvchi: ${chatId}`);
        console.error(error);
      }
    });

    return;
  } else {
    next(new ErrorHandler(result.msg, 500));
  }
};
const update = async (req, res, next) => {
  const { error, value } = validate.put.validate(req.body);
  if (error) {
    validationError(res, error, next);
    return;
  }
  const result = await updateData("homeworks", value, { id: req.params.id });
  if (result.ok && result.data) {
    succesResponse(res, result.data[0], next);
    return;
  }
  next(new ErrorHandler(result.msg, 500));
};

module.exports = {
  get: async (req, res, next) => {
    getCustomParams(req, res, next, get);
  },
  getById: async (req, res, next) => {
    getCustomParams(req, res, next, getById);
  },
  create: async (req, res, next) => {
    getCustomParams(req, res, next, create);
  },
  destroy: async (req, res, next) => {
    getCustomParams(req, res, next, destroy);
  },
  update: async (req, res, next) => {
    getCustomParams(req, res, next, update);
  },
};
