const Joi = require("joi");

exports.getPostSchema = {
  params: Joi.object({
    id: Joi.string().trim()
  })
};