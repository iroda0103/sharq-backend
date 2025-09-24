const Joi = require("joi");

exports.deleteApplicationSchema = {
  params: Joi.object({
    id: Joi.string().trim()
  })
};
