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
  const { page, limit, homeworks_id } = req.query;
  let query = `select * from homework_answers`;

  if (homeworks_id) {
    query += ` WHERE homeworks_id = $1`;
  }

  const offset = (parseInt(page) - 1) * parseInt(limit) || 0;
  const queryLimit = parseInt(limit) || 5;

  query += ` OFFSET ${offset} LIMIT ${queryLimit}`;
  const result = await fetchMy(query, homeworks_id ? [homeworks_id] : null);
  const count = await getCount("homework_answers");
  succesResponse(res, result, next, count);
};

const getById = async (req, res, next) => {
  const result = await fetchMy(
    `select * from homework_answers
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
  const result = await destroyData("homework_answers", {
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
  const result = await createData("homework_answers", value);
  if (result.ok && result.data) {
    succesResponse(res, result.data[0], next);
    return;
  }
  next(new ErrorHandler(result.msg, 500));
};

const update = async (req, res, next) => {
  const { error, value } = validate.put.validate(req.body);
  if (error) {
    validationError(res, error, next);
    return;
  }
  const result = await updateData("homework_answers", value, {
    id: req.params.id,
  });
  if (result.ok && result.data) {
    succesResponse(res, result.data[0], next);
    return;
  }
  next(new ErrorHandler(result.msg, 500));
};

const check = async (req, res, next) => {
  const { error, value } = validate.check.validate(req.body);
  if (error) {
    validationError(res, error, next);
    return;
  }
  const result = await updateData("homework_answers", value, {
    id: req.params.id,
  });
  if (result.ok && result.data) {
    succesResponse(res, result.data[0], next);
    const telegramBotUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;
    const { id, note, ball } = result.data[0];
    const response = await fetchMy(
      " SELECT h_ans.id, st.firstname, st.tg_id, hmw.title FROM homework_answers h_ans JOIN students st ON h_ans.students_id=st.id JOIN homeworks hmw ON h_ans.homeworks_id=hmw.id  where h_ans.id=$1",
      [id]
    );
    if (response) {
      const messageText = `Salom ${response[0].firstname} sizni quyidagi "${response[0].title}" uyga vazifanngiz bo'yicha yordamchi o'qtuvchingiz \nSharh: ${note}\n ball: ${ball}\nkuningiz hayrli o'tsin
      `;

      try {
        await axios.post(telegramBotUrl, {
          chat_id: response[0].tg_id,
          text: messageText,
        });
      } catch (err) {
        console.error(err.message);
      }
    }
    return;
  } else {
    next(new ErrorHandler(result.msg, 500));
  }
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
  check: async (req, res, next) => {
    getCustomParams(req, res, next, check);
  },
};
