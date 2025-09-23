const Joi = require("joi");

exports.postPostSchema = {
  body: Joi.object({
    title: Joi.string().trim().required(),
    content: Joi.string().trim().required(),
    tags: Joi.array().items(Joi.string().trim()).optional(),
    authorName: Joi.string().trim().optional(),
  })
};