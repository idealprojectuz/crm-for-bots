const Joi = require("joi");
module.exports = {
  post: Joi.object({
    group_id: Joi.number().integer().positive().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
  put: Joi.object({
    group_id: Joi.number().integer().positive(),
    title: Joi.string(),
    description: Joi.string(),
  }),
};
