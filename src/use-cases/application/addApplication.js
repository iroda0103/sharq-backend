const makeApplication = require("../../entities/application");
const { BadRequestError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/applicationDb')} deps.applicationDb
 * @param {import('../../adapters/Upload')} deps.Upload
 */
module.exports = function makeAddApplication({ applicationDb, Upload }) {
  return async function addApplication(data) {
    try {
      const application = makeApplication({
        ...data
      });
      console.log('data',data);
      

      // Title bo‘yicha unique tekshirish (agar kerak bo‘lsa)
      const applicationInfo = await applicationDb.findOne({ title: application.getTitle() });

      if (applicationInfo) {
        throw new BadRequestError(
          "Bunday sarlavhali (title) application allaqachon mavjud"
        );
      }

      const result = await applicationDb.insert({
        id: application.getId(),
        title: application.getTitle(),
        content: application.getContent(),
        imageUrl: application.getImageUrl(),
        gallery: application.getGallery(),
        tags: application.getTags(),
        status: application.getStatus(),
        formatted: application.getFormatted(),
        publishTo: application.getPublishTo(),
        author: {
          name: application.getAuthorName(),
          img: application.getAuthorImg()
        },
        stats: application.getStats()
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