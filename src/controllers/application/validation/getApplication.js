const Joi = require("joi");

exports.getApplicationSchema = {
  params: Joi.object({
    id: Joi.string().trim()
  })
};
