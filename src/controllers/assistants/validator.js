const Joi = require("joi");
module.exports = {
  post: Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    age: Joi.number().required(),
    password: Joi.string().required(),
    phone: Joi.string()
      .length(9)
      .pattern(/([378]{2}|(9[013-57-9]))\d{7}$/)
      .required(),
    t_username: Joi.string().required(),
    field_id: Joi.number(),
    jinsi: Joi.number().required(),
  }),
  put: Joi.object({
    firstname: Joi.string(),
    lastname: Joi.string(),
    age: Joi.number(),
    password: Joi.string(),
    phone: Joi.string()
      .length(9)
      .pattern(/([378]{2}|(9[013-57-9]))\d{7}$/),
    t_username: Joi.string(),
    field_id: Joi.number(),
    jinsi: Joi.number(),
  }),
};
