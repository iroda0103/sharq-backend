const Joi = require("joi");
const {
  offsetPaginationSchema,
  buildSortSchema
} = require("../../../shared/schemas");

exports.getApplicationsSchema = {
  query: Joi.object({
    q: Joi.string().allow(""),
    filters: { status: Joi.string().valid("created", "pending", "rejected","successfull") },
    page: offsetPaginationSchema,
    sort: buildSortSchema(['last_name','first_name','father_name','phone','status','createdAt','updatedAt']),
  })
};
