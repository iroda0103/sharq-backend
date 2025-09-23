const postDb = require("../../data-access/postDb");
const Upload = require("../../adapters/Upload");
const makeAddPost = require("./addPost");
const makeListPost = require("./listPost");
const makeShowPost = require("./showPost");
const makeRemovePost = require("./removePost");
const makeEditPost = require("./editPost");

const addPost = makeAddPost({ postDb, Upload });
const listPost = makeListPost({ postDb });
const showPost = makeShowPost({ postDb });
const removePost = makeRemovePost({ postDb });
const editPost = makeEditPost({ postDb });

const PostUseCases = Object.freeze({
  addPost,
  listPost,
  showPost,
  removePost,
  postDb,
  editPost
});

module.exports = PostUseCases;