const getCustomParams = require("../../utils/getCustomParams");
const succesResponse = require("../../utils/succesResponse");
const readData = require("../../utils/readData");
const createData = require("../../utils/createData");
const ErrorHandler = require("../../utils/errorHandle");
const { fetchMy } = require("../../utils/pgsql");
const validate = require("./validator");
const validationError = require("../../utils/validationError");
const destroyData = require("../../utils/destroyData");
const updateData = require("../../utils/updateData");
const getCount = require("../../utils/getCount");
const fs = require("fs");
const bcrypt = require("bcrypt");
const get = async (req, res, next) => {
  const { limit, step } = req.query;

  // To'g'ri qiymatlarni ta'minlash
  let steps = step || 0;
  let limits = limit || 10; // Agar limit belgilanmasa, default qiymat 10 bo'ladi

  const result = await fetchMy(
    `SELECT users.id, users.firstname, users.lastname, users.age, users.phone, users.role, users.image, users.t_username, users.field_id, users.jinsi, users.created_at, study_fields.name as job_title
    FROM users 
    RIGHT JOIN study_fields ON study_fields.id = users.field_id
    WHERE users.role = 'assistants' ORDER BY id ASC limit $1 offset $2`,
    [limits, Number(steps * limits)]
  );
  const count = await getCount("users", { role: "assistants" });
  succesResponse(res, result, next, count);
};

const getById = async (req, res, next) => {
  const result = await fetchMy(
    `
    SELECT users.id, users.firstname, users.lastname, users.age, users.phone, users.role, users.image, users.t_username, users.field_id, users.jinsi, users.created_at, study_fields.name as job_title
    FROM users 
    RIGHT JOIN study_fields ON study_fields.id = users.field_id
    WHERE users.role = 'assistants' AND users.id=$1`,
    [req.params.id]
  );
  if (result.length) {
    succesResponse(res, result[0], next);
    return;
  }
  next(new ErrorHandler("Yordamchi ustoz topilmadi", 404));
};

const destroy = async (req, res, next) => {
  const result = await destroyData("users", {
    id: req.params.id,
    role: "assistants",
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
  value.image = req.file.filename;
  value.password = await bcrypt.hash(value.password, 10);
  value.role = "assistants";
  value.phone = "998" + value.phone;
  // console.log(value);
  const result = await createData("users", value);
  if (result.ok && result.data) {
    result.data[0].password = "****************";
    succesResponse(res, result.data[0], next);
    return;
  }
  next(new ErrorHandler("Assistants already exists ", 500));
};

const update = async (req, res, next) => {
  const { error, value } = validate.put.validate(req.body);
  if (error) {
    validationError(res, error, next);
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
    return;
  }
  if (value.phone) {
    value.phone = "998" + value.phone;
  }
  if (value.password) {
    value.password = await bcrypt.hash(value.password, 10);
  }
  if (req.file) {
    value.image = req.file.filename;
  }
  const result = await updateData("users", value, {
    id: req.params.id,
    role: "assistants",
  });
  if (result.ok && result.data.length) {
    result.data[0].password = "****************";
    succesResponse(res, result.data[0], next);
    return;
  }
  if (req.file) {
    fs.unlinkSync(req.file.path);
  }
  next(
    new ErrorHandler(
      "malumotlar yangilanishda xatolik yuzberdi malumotlarni tekshirib qaytadan urinib ko`ring",
      500
    )
  );
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
