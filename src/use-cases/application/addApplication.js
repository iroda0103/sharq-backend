const makeApplication = require("../../entities/application");
const { BadRequestError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/applicationsDb')} deps.applicationDb
 * @param {import('../../adapters/Upload')} deps.Upload
 */
module.exports = function makeAddApplication({ applicationDb, Upload }) {
  return async function addApplication(data) {
    try {
      console.log('Data', data)

      const application = makeApplication({
        ...data,
      });

      const applicationInfo = await applicationDb.findOne({
        phone: application.getPhone(),
      });

      if (applicationInfo) {
        throw new BadRequestError(
          "Bunday nomli telefon raqami mavjud boshqa raqam tanlang"
        );
      }
      const applicationInfo2 = await applicationDb.findOne({
        "passport.jsshir": application.getPassportJsshir(),
      });

      if (applicationInfo2) {
        throw new BadRequestError(
          "Bunday Passportli odam avval hujjat topshirgan"
        );
      }
      console.log('pppp', applicationInfo2);

      console.log('TEST', application)
      const result = await applicationDb.insert({
        id: application.getId(),
        first_name: application.getFirstName(),
        last_name: application.getLastName(),
        father_name: application.getFatherName(),
        address: application.getAddress(),
        phone: application.getPhone(),
        status: application.getStatus(),
        birth_date: application.getBirthDate(),
        additionalInfo: application.getAdditionalInfo(),
        passport: {
          series: application.getPassportSeries(),
          number: application.getPassportNumber(),
          jsshir: application.getPassportJsshir(),
          images: application.getPassportImage(),

        },
        // pasport rasmlarni DB’da saqlash
      });

      // Fayllarni uploads/passport ga ko‘chirish
      if (data.passportImage && data.passportImage.length > 0) {
        for (const filename of data.passportImage) {
          await Upload.save("passportImage", filename);
        }
      }

      // return result;
    } catch (e) {
      // Agar xatolik bo‘lsa temp’dan o‘chirib tashlaymiz
      // if (data.passportImage && data.passportImage.length > 0) {
      //   for (const filename of data.passportImage) {
      //     await Upload.removeTemp("passportImage", filename);
      //   }
      // }
      throw e;
    }
  };
};
