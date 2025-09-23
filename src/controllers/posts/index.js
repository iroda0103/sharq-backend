const {
  addPost,
  listPost,
  showPost,
  removePost,
  editPost
} = require("../../use-cases/posts");

const makePostPost = require("./postPost");
const makeGetPosts = require("./getPosts");
const makeGetPost = require("./getPost");
const makeDeletePost = require("./deletePost");
const makeEditPost = require("./patchPost");

const postPost = makePostPost({ addPost });
const getPosts = makeGetPosts({ listPost });
const getPost = makeGetPost({ showPost });
const deletePost = makeDeletePost({ removePost });
const patchPost = makeEditPost({ editPost });

const PostsController = Object.freeze({
  postPost,
  getPosts,
  getPost,
  deletePost,
  patchPost
});

module.exports = PostsController;
