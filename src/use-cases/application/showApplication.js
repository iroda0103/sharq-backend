const { NotFoundError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/applicationsDb')} deps.applicationsDb
 */
module.exports = function makeShowApplication({ applicationDb }) {
  return async function showApplication(filter) {
    const applicationInfo = await applicationDb.find(filter);

    if (!applicationInfo) {
      throw new NotFoundError("Foydalanuvchi topilmadi");
    }

    return { data: applicationInfo };
  };
};
