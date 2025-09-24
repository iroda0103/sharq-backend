const {
  addApplication,
  listApplication,
  showApplication,
  removeApplication,
  editApplication,
  showApp
} = require("../../use-cases/application");

const makePostApplication = require("./postApplication");
const makeGetApplications = require("./getApplications");
const makeGetApplication = require("./getApplication");
const makeDeleteApplication = require("./deleteApplication");
const makeEditApplication = require("./patchApplication");
const makeGetApp = require("./getApp");

const postApplication = makePostApplication({ addApplication });
const getApplications = makeGetApplications({ listApplication });
const getApplication = makeGetApplication({ showApplication });
const getApp = makeGetApp({ showApp });
const deleteApplication = makeDeleteApplication({ removeApplication });
const patchApplication = makeEditApplication({ editApplication });

const ApplicationsController = Object.freeze({
  postApplication,
  getApplications,
  getApplication,
  deleteApplication,
  patchApplication,
  getApp,
});

module.exports = ApplicationsController;
