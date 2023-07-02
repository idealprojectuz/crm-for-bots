const Joi = require("joi");
module.exports = {
  post: Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    age: Joi.number().integer().required(),
    phone: Joi.string()
      .length(9)
      .pattern(/([378]{2}|(9[013-57-9]))\d{7}$/)
      .required(),
    t_username: Joi.string(),
    jinsi: Joi.number().required(),
    group_id: Joi.number().required(),
  }),
  put: Joi.object({
    firstname: Joi.string(),
    lastname: Joi.string(),
    age: Joi.number().integer(),
    phone: Joi.string()
      .length(9)
      .pattern(/([378]{2}|(9[013-57-9]))\d{7}$/),
    t_username: Joi.string(),
    jinsi: Joi.number(),
    group_id: Joi.number(),
  }),
};
