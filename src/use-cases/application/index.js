const applicationDb = require("../../data-access/applicationDb");
const makeAddApplication = require("./addApplication");
const makeListApplication = require("./listApplication");
const makeShowApplication = require("./showApplication");
const makeRemoveApplication = require("./removeApplication");
const makeEditApplication = require("./editApplication");
const makeShowApp = require("./showApp");
const Upload = require("../../adapters/Upload");

const addApplication = makeAddApplication({ applicationDb, Upload });
const listApplication = makeListApplication({ applicationDb });
const showApplication = makeShowApplication({ applicationDb });
const removeApplication = makeRemoveApplication({ applicationDb });
const editApplication = makeEditApplication({ applicationDb });
const showApp = makeShowApp({ applicationDb });

const applicationUseCases = Object.freeze({
  addApplication,
  listApplication,
  showApplication,
  showApp,
  removeApplication,
  applicationDb,
  editApplication
});

module.exports = applicationUseCases;