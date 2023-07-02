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
const removeMedia = require("../../utils/removeMedia");
const Sms = require("../../utils/Sms");

const sms = new Sms(process.env.ESKIZ_EMAIL, process.env.ESKIZ_PASSWORD);
const get = async (req, res, next) => {
  const { page, limit, group_id } = req.query;
  let query = `select * from  students`;
  if (group_id) {
    query += ` WHERE group_id = $1`;
  }

  const offset = (parseInt(page) - 1) * parseInt(limit) || 0;
  const queryLimit = parseInt(limit) || 5;

  query += ` OFFSET ${offset} LIMIT ${queryLimit}`;
  const result = await fetchMy(query, group_id ? [group_id] : null);
  const count = await getCount("students");
  succesResponse(res, result, next, count);
};

const getById = async (req, res, next) => {
  const result = await fetchMy(
    `select * from students
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
  const result = await destroyData("students", {
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
    if (req.file) {
      removeMedia(req.file.filename);
    }
    return;
  }
  if (req.file) {
    value.image = req.file.filename;
  }
  value.phone = `998${value.phone}`;
  const result = await createData("students", value);

  if (result.ok && result.data) {
    succesResponse(res, result.data[0], next);
    const groupid = result.data[0].group_id;
    const [{ tg_groups, daysisjuft, time, room }] = await fetchMy(
      `SELECT * FROM groups WHERE id = $1`,
      [groupid]
    );
    let kunlar = null;
    if (daysisjuft == "true") {
      kunlar = "DUshanba, Chorshanba, Juma";
    } else if (daysisjuft == "false") {
      kunlar = "Seshanba, Payshanba, Shanba";
    } else {
      kunlar = "Dushanbadan shanbagacha";
    }
    await sms
      .send(
        result.data[0].phone,
        `Assalomu alaykum siz ${String(
          process.env.LEARNING_CENTER_NAME
        )} o'quv markaziga o'quvchi sifatida ro'yxatdan o'tdingiz darslaringiz ${kunlar} soat ${time} da ${
          process.env.LEARNING_CENTER_NAME
        } ning chilonzor filialida ${room} xonasida bo'ladi sizning talabalik id raqamingiz ${
          result.data[0].id
        } To'lov qilishda va wifiga ulanishda shu login dan foydalanasiz parolingiz ${
          result.data[0].phone
        } telegram gruhga qo'shilib oling ${tg_groups}
    `
      )
      .catch((e) => e);
    return;
  } else {
    if (req.file) {
      removeMedia(req.file.filename);
    }
    next(new ErrorHandler(result.msg, 500));
  }
};

const update = async (req, res, next) => {
  const { error, value } = validate.put.validate(req.body);
  if (error) {
    validationError(res, error, next);
    if (req.file) {
      removeMedia(req.file.filename);
    }
    return;
  }
  if (req.file) {
    value.image = req.file.filename;
  }
  if (value.phone) {
    value.phone = `998${value.phone}`;
  }

  const result = await updateData("students", value, { id: req.params.id });
  if (result.ok && result.data) {
    succesResponse(res, result.data[0], next);
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
};
