const Joi = require("joi");
module.exports = {
  post: Joi.object({
    homeworks_id: Joi.number().integer().required(),
    students_id: Joi.number().integer().required(),
    github_link: Joi.string().required(),
  }),
  put: Joi.object({
    homeworks_id: Joi.number().integer(),
    students_id: Joi.number().integer(),
    github_link: Joi.string(),
  }),
  check: Joi.object({
    note: Joi.string().required(),
    ball: Joi.string().required(),
    assistant_id: Joi.number().integer().required(),
  }),
};
