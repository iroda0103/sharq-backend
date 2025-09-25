const { InvalidPropertyError } = require("../../shared/errors");

module.exports = function buildMakeApplication({ Id }) {
  return function makeApplication({
    id = Id.makeId(),
    first_name,
    last_name,
    father_name,
    birth_date,
    phone,
    address,
    passportSeries,
    passportNumber,
    passportJsshir,
    additionalInfo,
    passportImage = [],
    status = "created",
  } = {}) {
    if (!id) {
      throw new InvalidPropertyError("App uchun yaroqli id bo'lishi shart.");
    }

    if (!first_name) {
      throw new InvalidPropertyError("App uchun sarlavha (first_name) bo'lishi shart.");
    }

    if (!last_name) {
      throw new InvalidPropertyError("App uchun matn (last_name) bo'lishi shart.");
    }

    if (!['pending', 'created', 'rejected', 'successfull'].includes(status)) {
      throw new InvalidPropertyError("App status faqat 'pending', 'created', 'rejected' yoki 'successfull' bo'lishi kerak.");
    }

    if (!father_name) {
      throw new InvalidPropertyError("App uchun otasining ismi (father_name) bo'lishi shart.");
    }

    if (!phone) {
      throw new InvalidPropertyError("App uchun telefon raqami (phone) bo'lishi shart.");
    }

    if (!passportSeries) {
      throw new InvalidPropertyError("App uchun passport seriyasi (series) bo'lishi shart.");
    }

    if (!passportNumber) {
      throw new InvalidPropertyError("App uchun passport raqami (number) bo'lishi shart.");
    }

    if (!passportJsshir) {
      throw new InvalidPropertyError("App uchun jsshir (jsshir) bo'lishi shart.");
    }
    if (!birth_date) {
      throw new InvalidPropertyError("App uchun tug'ilgan sana (birth_date) bo'lishi shart.");
    }
    if (!Array.isArray(passportImage) || passportImage.length === 0) {
      throw new InvalidPropertyError("App uchun passport images massivi bo'lishi shart.");
    }

    return Object.freeze({
      getId: () => id,
      getFirstName: () => first_name,
      getLastName: () => last_name,
      getFatherName: () => father_name,
      getBirthDate: () => birth_date,
      getPhone: () => phone,
      getAddress: () => address,
      getPassportSeries: () => passportSeries,
      getPassportNumber: () => passportNumber,
      getPassportJsshir: () => passportJsshir,
      getStatus: () => status,
      getPassportImage: () => passportImage,
      getAdditionalInfo: () => additionalInfo
    });
  };
};