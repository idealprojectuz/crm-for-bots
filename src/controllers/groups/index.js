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
const get = async (req, res, next) => {
  const { page, limit, study_field } = req.query;

  let query = `SELECT g.id, g.teacher, u.firstname AS assist_name,   u.lastname AS assist_lastname, u.phone AS assist_phone, g.daysisjuft, g.time, g.tg_groups, g.room, s.name AS study_field_name, s.price AS study_field_price, g.created_at
  FROM Groups g
  JOIN users u ON g.assistant_teacher = u.id
  JOIN study_fields s ON g.study_field = s.id`;

  if (study_field) {
    query += ` WHERE g.study_field = $1`;
  }

  query += ` ORDER BY g.id OFFSET ${(page - 1) * limit || 0} LIMIT ${
    limit || 5
  }`;
  const result = await fetchMy(query, study_field ? [study_field] : null);
  const count = await getCount("groups");
  succesResponse(res, result, next, count);
};

const GetByMeAll = async (req, res, next) => {
  const { page, limit, study_field } = req.query;
  const { userid } = req.loggeduser; // Assuming `userid` is the property that contains the logged-in user's ID

  let query = `SELECT g.id, g.teacher, u.firstname AS assist_name, u.lastname AS assist_lastname, u.phone AS assist_phone, g.daysisjuft, g.time, g.room, s.name AS study_field_name, s.price AS study_field_price, g.created_at
  FROM Groups g
  JOIN users u ON g.assistant_teacher = u.id
  JOIN study_fields s ON g.study_field = s.id`;

  if (study_field) {
    query += ` WHERE g.study_field = $1::data_type AND g.assistant_teacher = $2`;
  } else {
    query += ` WHERE g.assistant_teacher = $1`;
  }
  query += ` ORDER BY g.id OFFSET ${(page - 1) * limit || 0} LIMIT ${
    limit || 5
  }`;

  const result = await fetchMy(
    query,
    study_field ? [study_field, userid] : [userid]
  );

  const count = await getCount("groups", {
    assistant_teacher: userid,
  });
  succesResponse(res, result, next, count);
};

const getById = async (req, res, next) => {
  const result = await fetchMy(
    `SELECT g.id, g.teacher, u.firstname AS assist_name,   u.lastname AS assist_lastname, u.phone AS assist_phone, g.daysisjuft, g.time, g.tg_groups, g.room, s.name AS study_field_name, s.price AS study_field_price, g.created_at
  FROM Groups g
  JOIN users u ON g.assistant_teacher = u.id
  JOIN study_fields s ON g.study_field = s.id 
   where g.id = $1`,
    [req.params.id]
  );
  if (result.length) {
    succesResponse(res, result[0], next);
    return;
  }
  next(new ErrorHandler("topilmadi", 404));
};

const destroy = async (req, res, next) => {
  const result = await destroyData("groups", {
    id: req.params.id,
  });

  if (result.length) {
    succesResponse(res, result[0], next);
    removeMedia(result[0].image);
    return;
  }
  next(new ErrorHandler("topilmadi", 404));
};

const create = async (req, res, next) => {
  const { error, value } = validate.post.validate(req.body);
  if (error) {
    validationError(res, error, next);
    removeMedia(req.file.filename);
    return;
  }
  value.image = req.file.filename;
  const result = await createData("groups", value);
  if (result.ok && result.data) {
    succesResponse(res, result.data[0], next);
    return;
  }
  removeMedia(req.file.filename);
  next(new ErrorHandler(result.msg, 500));
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
  const result = await updateData("groups", value, { id: req.params.id });
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
  getByme: async (req, res, next) => {
    getCustomParams(req, res, next, GetByMeAll);
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
