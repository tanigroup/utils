function buildResponse(data, params) {
  if (params) {
    const { page = 1, limit = 10 } = params;
    const { count: totalCount, rows: items } = data;
    const totalPages = Math.ceil(totalCount / limit) || 1;
    const currentPage = Math.min(page, totalPages);

    return {
      items,
      params,
      totalCount,
      totalPages,
      currentPage,
    };
  }

  return { data };
}

module.exports = buildResponse;
