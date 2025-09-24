const { postApplicationSchema } = require("./postApplication");
const { getApplicationsSchema } = require("./getApplications");
const { getApplicationSchema } = require("./getApplication");
const { deleteApplicationSchema } = require("./deleteApplication");
const { patchApplicationSchema } = require("./patchApplication");
const { getAppSchema } = require("./getApp");

module.exports = {
  postApplicationSchema,
  getApplicationsSchema,
  getApplicationSchema,
  deleteApplicationSchema,
  patchApplicationSchema,
  getAppSchema,
};
