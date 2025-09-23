const Joi = require("joi");

exports.patchPostSchema = {
  params: Joi.object({
    id: Joi.string().trim()
  }),
  body: Joi.object({
    title: Joi.string().trim(),
    content: Joi.string().trim(),
    author: Joi.string().trim(),
    tags: Joi.array().items(Joi.string().trim()).optional()
  })
};