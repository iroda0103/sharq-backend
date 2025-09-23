const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/postDb')} deps.postDb
 */
module.exports = function makeRemovePost({ postDb }) {
  return async function removePost({ id }) {
    if (!id) {
      throw new Error("ID berilishi shart");
    }

    const postToDelete = await postDb.findById({ id });

    if (!postToDelete) {
      throw new NotFoundError("Foydalanuvchi topilmadi.");
    }

    // Universal usul: faqat ID ni uzatish
    await postDb.remove({ id: postToDelete.id });

    // O'chirilgan foydalanuvchi ma'lumotini qaytarish
    return postToDelete;
  };
};