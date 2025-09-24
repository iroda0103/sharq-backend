/**
 * @param {object} deps
 * @param {import('../../data-access/applicationsDb')} deps.applicationDb
 */
module.exports = function makeListApplications({ applicationDb }) {
  return async function listApplications({
    filters = {},
    q,
    page = { limit: 10, offset: 0 },
    sort = { by: "id", order: "desc" }
  }) {
    if (filters.role == "all") {
      filters = {};
    }
    const { data, total } = await applicationDb.findAll({
      filters,
      q,
      page,
      sort
    });
    const pageInfo = { total, limit: page.limit, offset: page.offset };
    return { data, pageInfo };
  };
};
