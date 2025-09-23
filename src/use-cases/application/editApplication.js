const makePost = require("../../entities/post");
const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/postDb')} deps.postDb
 */

module.exports = function makeEditApplication({ applicationDb }) {
  return async function editApplication({ id, ...changes }) {
    const applicationToEdit = await applicationDb.findById({ id });

    if (!applicationToEdit) {
      throw new NotFoundError("Application topilmadi.");
    }

    const application = makeApplication({ ...applicationToEdit, ...changes });

    const result = await applicationDb.update({
      id: application.getId(),
      first_name: application.getFirst_name(),
      last_name: application.getLast_name(),
      father_name: application.getFather_name(),
      birth_date: application.getBirth_date(),
      phone: application.getPhone(),
      address: application.getAddress(),
      passport: application.getPassport(),
      status: application.getStatus()
    });
    
    return result;
  };
};