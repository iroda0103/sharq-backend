const makePost = require("../../entities/post");
const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/postDb')} deps.postDb
 */

module.exports = function makeEditPost({ postDb }) {
  return async function editPost({ id, ...changes }) {
    const postToEdit = await postDb.findById({ id });

    if (!postToEdit) {
      throw new NotFoundError("Post topilmadi.");
    }
    
    const post = makePost({ ...postToEdit, ...changes });

    const result = await postDb.update({
      id: post.getId(),
      title: post.getTitle(),
      content: post.getContent(),
      imageUrl: post.getImageUrl(),
      gallery: post.getGallery(),
      tags: post.getTags(),
      status: post.getStatus(),
      formatted: post.getFormatted(),
      publishTo: post.getPublishTo(),
      stats: post.getStats()
    });
    return result;
  };
};