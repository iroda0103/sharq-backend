const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/applicationsDb')} deps.applicationsDb
 */
module.exports = function makeRemoveApplication({ applicationDb }) {
  return async function removeApplication({ id }) {
    const applicationToDelete = await applicationDb.findById({ id });

    if (!applicationToDelete) {
      throw new NotFoundError("Foydalanuvchi topilmadi.");
    }

    await applicationDb.remove(applicationToDelete);

    return applicationToDelete;
  };
};
