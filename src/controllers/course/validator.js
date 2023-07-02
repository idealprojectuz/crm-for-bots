const Joi = require("joi");
module.exports = {
  post: Joi.object({
    name: Joi.string().required(),
    price: Joi.number().integer().positive().required(),
  }),
  put: Joi.object({
    name: Joi.string().optional(),
    price: Joi.number().integer().positive().optional(),
  }),
};
