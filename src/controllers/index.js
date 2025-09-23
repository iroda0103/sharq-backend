const express = require("express");
const userRouter = require("./users/router");
const postRouter = require("./posts/router");
const api = express.Router();

api.use("/api", userRouter);
api.use("/api", postRouter);

module.exports = api;
