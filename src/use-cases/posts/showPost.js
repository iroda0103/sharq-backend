const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/postDb')} deps.postDb
 */
module.exports = function makeShowPost({ postDb }) {
  return async function showPost(filter) {
    const postInfo = await postDb.findById(filter);

    if (!postInfo) {
      throw new NotFoundError("Post topilmadi");
    }

    return { data: postInfo };
  };
};
