const mongoose = require("mongoose");
const config = require("../shared/config");
const usersDb = require("./usersDb");

module.exports = {
  connect() {
    return mongoose.connect(
      `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
    );
  },
  usersDb
};
