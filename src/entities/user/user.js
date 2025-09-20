const { InvalidPropertyError } = require("../../shared/errors");

module.exports = function buildMakeUser({ Id, Hash }) {
  return function makeUser({
    id = Id.makeId(),
    first_name,
    last_name,
    role,
    age,
    username,
    password
  } = {}) {
    if (!last_name) {
      throw new InvalidPropertyError(
        "Foydalanuvchida yaroqli last_name bo'lishi shart."
      );
    }

    if (!username) {
      throw new InvalidPropertyError(
        "Foydalanuvchida yaroqli username bo'lishi shart."
      );
    }

    if (!password) {
      throw new InvalidPropertyError(
        "Foydalanuvchida yaroqli phone bo'lishi shart."
      );
    }

    if (!id) {
      throw new InvalidPropertyError(
        "Foydalanuvchida yaroqli id bo'lishi shart."
      );
    }

    if (!role) {
      throw new InvalidPropertyError(
        "Foydalanuvchida yaroqli rol (role) bo'lishi shart."
      );
    }

    if (!["admin", "employee"].includes(role)) {
      throw new InvalidPropertyError(
        "Foydalanuvchida yaroqli role bo'lishi kk"
      );
    }

    if (!first_name) {
      throw new InvalidPropertyError(
        "Foydalanuvchida yaroqli firts_name bo'lishi shart."
      );
    }

    return Object.freeze({
      getId: () => id,
      getFirstName: () => first_name,
      getLastName: () => last_name,
      getRole: () => role,
      getUsername: () => username,
      getPassword: () => password,
      getAge: () => age,
      hashPassword,
      comparePassword
    });

    function hashPassword() {
      password = Hash.generate(password);
    }

    function comparePassword(plain) {
      return Hash.compare(plain, password);
    }
  };
};
