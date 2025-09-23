const Id = require("../../adapters/Id");
const buildMakePost = require("./post");

const makePost = buildMakePost({ Id });

module.exports = makePost;