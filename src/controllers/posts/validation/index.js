const { postPostSchema } = require("./postPost");
const { getPostsSchema } = require("./getPosts");
const { getPostSchema } = require("./getPost");
const { deletePostSchema } = require("./deletePost");
const { patchPostSchema } = require("./patchPost");

module.exports = {
  postPostSchema,
  getPostsSchema,
  getPostSchema,
  deletePostSchema,
  patchPostSchema
};