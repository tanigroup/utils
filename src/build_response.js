const limit = 10;
const minPage = 1;

function buildResponse(data, params) {
  if (params) {
    const { count: totalCount, rows: items } = data;
    const totalPages = Math.ceil(totalCount / limit) || 1;
    const currentPage = Math.min(minPage, totalPages);

    return {
      totalCount,
      totalPages,
      currentPage,
      params,
      items,
    };
  }

  return { data };
}

module.exports = buildResponse;
