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

const get = async (req, res, next) => {
  const { page, limit } = req.query;
  let query = `select * from study_fields`;
  const offset = (parseInt(page) - 1) * parseInt(limit) || 0;
  const queryLimit = parseInt(limit) || 5;

  query += ` OFFSET ${offset} LIMIT ${queryLimit}`;
  const result = await fetchMy(query);
  const count = await getCount("study_fields");
  succesResponse(res, result, next, count);
};

const getById = async (req, res, next) => {
  const result = await fetchMy(
    `select * from study_fields
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
  const result = await destroyData("study_fields", {
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
  const result = await createData("study_fields", value);
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
  const result = await updateData("study_fields", value, { id: req.params.id });
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
