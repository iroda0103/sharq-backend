const makePost = require("../../entities/post");
const { BadRequestError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/postDb')} deps.postDb
 * @param {import('../../adapters/Upload')} deps.Upload
 */
module.exports = function makeAddPost({ postDb, Upload }) {
  return async function addPost(data) {
    try {
      const post = makePost({
        ...data
      });
      console.log('data',data);
      

      // Title bo‘yicha unique tekshirish (agar kerak bo‘lsa)
      const postInfo = await postDb.findOne({ title: post.getTitle() });

      if (postInfo) {
        throw new BadRequestError(
          "Bunday sarlavhali (title) post allaqachon mavjud"
        );
      }

      const result = await postDb.insert({
        id: post.getId(),
        title: post.getTitle(),
        content: post.getContent(),
        imageUrl: post.getImageUrl(),
        gallery: post.getGallery(),
        tags: post.getTags(),
        status: post.getStatus(),
        formatted: post.getFormatted(),
        publishTo: post.getPublishTo(),
        author: {
          name: post.getAuthorName(),
          img: post.getAuthorImg()
        },
        stats: post.getStats()
      });
      if (data.authorImg) {
        await Upload.save(data.authorImg)
      }
      if (data.imageUrl) {
        await Upload.save(data.imageUrl)
      }
      return result;
    }
    catch (e) {
      if (data.authorImg) {
        await Upload.removeTemp(data.authorImg)
      }
      if (data.imageUrl) {
        await Upload.removeTemp(data.imageUrl)
      }
      throw e
    }
  };
};