const express = require("express");
const controllers = require("./");
const expressCb = require("../../adapters/express-callback");
const Upload = require("../../adapters/Upload");

const postPost = expressCb(controllers.postPost);
const getPosts = expressCb(controllers.getPosts);
const getPost = expressCb(controllers.getPost);
const deletePost = expressCb(controllers.deletePost);
const patchPost = expressCb(controllers.patchPost, { checkRoles: ["admin"] });

const router = express.Router();

// router.post("/posts", Upload.single('authorImg'), postPost);
router.post("/posts", Upload.fields([{ name: "authorImg", maxCount: 1 },
{ name: "imageUrl", maxCount: 1 }]), postPost);
router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.patch("/posts/:id", Upload.fields([{ name: "authorImg", maxCount: 1 },
{ name: "imageUrl", maxCount: 1 }]), patchPost);
router.delete("/posts/:id", deletePost);

module.exports = router;