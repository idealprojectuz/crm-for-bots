const Joi = require("joi");
module.exports = {
  post: Joi.object({
    study_field: Joi.number().integer().positive().required(),
    teacher: Joi.string().max(50).required(),
    assistant_teacher: Joi.number().integer().positive().required(),
    daysisjuft: Joi.string().optional(),
    tg_groups: Joi.string().required(),
    time: Joi.string().optional(),
    room: Joi.string().required(),
    created_at: Joi.date().optional(),
  }),
  put: Joi.object({
    study_field: Joi.number(),
    teacher: Joi.string().max(50),
    assistant_teacher: Joi.number().integer().positive(),
    daysisjuft: Joi.string().optional(),
    time: Joi.string().optional(),
    tg_groups: Joi.string().optional(),
    room: Joi.string(),
    created_at: Joi.date(),
  }),
};
