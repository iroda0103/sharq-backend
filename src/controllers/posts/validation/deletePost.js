const Joi = require("joi");

exports.deletePostSchema = {
  params: Joi.object({
    id: Joi.string().trim()
  })
};
