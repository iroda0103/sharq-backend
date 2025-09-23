const mongoose = require("mongoose");
const config = require("../shared/config");
const userDb = require("./userDb");
const postDb = require("./postDb");
const applicationDb = require("./applicationDb");

module.exports = {
  connect() {
    return mongoose.connect(
      `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
    );
  },
  userDb,
  postDb,
  applicationDb
};