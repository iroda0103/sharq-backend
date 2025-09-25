const makeApplication = require("../../entities/application");
const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/applicationsDb')} deps.applicationDb
 */
module.exports = function makeEditApplication({ applicationDb }) {
  return async function editApplication({ id, ...changes }) {
    const applicationToEdit = await applicationDb.findById({ id });
    console.log('applicationToEdit', applicationToEdit);

    if (!applicationToEdit) {
      throw new NotFoundError("Foydalanuvchi topilmadi.");
    }

    const application = makeApplication({
      ...applicationToEdit,
      passportSeries: applicationToEdit.passport.series,
      passportImage: applicationToEdit.passport.images,
      passportNumber: applicationToEdit.passport.number,
      passportJsshir: applicationToEdit.passport.jsshir,
      ...changes
    });

    const result = await applicationDb.update({
      id: application.getId(),
      first_name: application.getFirstName(),
      last_name: application.getLastName(),
      father_name: application.getFatherName(),
      address: application.getAddress(),
      phone: application.getPhone(),
      birth_date: application.getBirthDate(),
      status: application.getStatus(),
      additionalInfo: application.getAdditionalInfo(),
      passport: {
        series: application.getPassportSeries(),
        number: application.getPassportNumber(),
        jsshir: application.getPassportJsshir(),
        images: application.getPassportImage(),

      },
      // pasport rasmlarni DB’da saqlash
    });

    return result;
  };
};
