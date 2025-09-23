const Joi = require("joi");
const {
  offsetPaginationSchema
} = require("../../../shared/schemas");

exports.getPostsSchema = {
  query: Joi.object({
    q: Joi.string().allow(""),
    page: offsetPaginationSchema,
  })
};