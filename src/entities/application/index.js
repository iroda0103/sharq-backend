const Id = require("../../adapters/Id");
const buildMakeApplication = require("./application");

const makeApplication = buildMakeApplication({ Id });

module.exports = makeApplication;