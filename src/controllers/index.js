const express = require("express");
const userRouter = require("./users/router");
const postRouter = require("./posts/router");
const applicationRouter = require("./application/router");

const api = express.Router();

api.use("/api", userRouter);
api.use("/api", postRouter);
api.use("/api", applicationRouter);

module.exports = api;
