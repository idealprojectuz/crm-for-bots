const joi = require("joi");

module.exports = joi.object({
  link: joi
    .string()
    .pattern(
      /^((git|ssh|http(s)?)|(git@[\w\.]+))(:(\/\/)?)([\w\.@\:/\-~]+)(\.git)?(\/)?$/
    )
    .required(),
});
