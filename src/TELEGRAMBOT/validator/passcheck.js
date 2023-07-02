const joi = require("joi");
module.exports = joi.object({
  password: joi.string().length(12).required(),
});
