const { get } = require("mongoose");
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
    passport = {
        series,
        number,
        jsshir,
        back_img,
        front_img
    },
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

    if (!["created", "progress","completed"].includes(status)) {
      throw new InvalidPropertyError("App status faqat 'created', 'progress' yoki 'completed' bo'lishi kerak.");
    }

    if(!father_name){
        throw new InvalidPropertyError("App uchun otasining ismi (father_name) bo'lishi shart.");
    }

    if(!phone){
        throw new InvalidPropertyError("App uchun telefon raqami (phone) bo'lishi shart.");
    }

    if(!passport.series){
        throw new InvalidPropertyError("App uchun passport seriyasi (series) bo'lishi shart.");
    }

    if(!passport.number){
        throw new InvalidPropertyError("App uchun passport raqami (number) bo'lishi shart.");
    }

    if(!passport.jsshir){
        throw new InvalidPropertyError("App uchun jsshir (jsshir) bo'lishi shart.");
    }

    return Object.freeze({
      getId: () => id,
      getFirst_name: () => first_name,
      getLast_name: () => last_name,
      getFather_name: () => father_name,
      getBirth_date: () => birth_date,
      getPhone: () => phone,
      getAddress: () => address,
      getPassport: () => passport,
      getStatus: () => status
    });
  };
};