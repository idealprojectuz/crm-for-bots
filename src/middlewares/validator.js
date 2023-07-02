const Joi = require("joi");
module.exports = Joi.object({
  phone: Joi.string()
    .length(9)
    .pattern(/([378]{2}|(9[013-57-9]))\d{7}$/)
    .required(),
  password: Joi.string().required(),
});
