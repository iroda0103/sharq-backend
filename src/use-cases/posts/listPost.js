/**
 * @param {object} deps
 * @param {import('../../data-access/postDb')} deps.postDb
 */
module.exports = function makeListPosts({ postDb }) {
  return async function listPosts({
    filters = {},
    q,
    page = { limit: 10, offset: 0 },
    sort = { by: "id", order: "desc" }
  }) {
    // Agar filters.status = "all" bo'lsa, uni olib tashlaymiz
    if (filters.status === "all") {
      const { status, ...rest } = filters;
      filters = rest;
    }

    const { data, total } = await postDb.findAll({
      filters,
      q,
      page,
      sort
    });

    const pageInfo = { total, limit: page.limit, offset: page.offset };

    return { data, pageInfo };
  };
};
