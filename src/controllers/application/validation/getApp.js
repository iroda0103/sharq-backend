const Joi = require("joi");

exports.getAppSchema = {
  body: Joi.object({
     passportJsshir: Joi.string().trim(),
    phone: Joi.string().trim()
  })
};


