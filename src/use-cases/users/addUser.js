const makeUser = require("../../entities/user");
const { BadRequestError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/usersDb')} deps.userDb
 */
module.exports = function makeAddUser({ userDb }) {
  return async function addUser(data) {
    const user = makeUser({
      ...data
    });

    const userInfo = await userDb.findOne({ username: user.getUsername() });

    if (userInfo) {
      throw new BadRequestError(
        "Bunday nomli username mavjud boshqa nom tanlang"
      );
    }

    user.hashPassword();
    const result = await userDb.insert({
      id: user.getId(),
      first_name: user.getFirstName(),
      last_name: user.getLastName(),
      age: user.getAge(),
      role: user.getRole(),
      username: user.getUsername(),
      password: user.getPassword()
    });

    return result;
  };
};
