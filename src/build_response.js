const camelCaseObj = require('./camel_case_object')

function buildResponse(data, params) {
  if (params) {
    const { page = 1, limit = 10 } = params
    const { count: totalCount, rows: items } = data;
    const totalPages = Math.ceil(totalCount / limit) || 1;
    const currentPage = Math.min(page, totalPages);

    return {
      totalCount,
      totalPages,
      currentPage,
      params,
      items: items.map((item) => camelCaseObj(item)),
    };
  }

  return { data: camelCaseObj(data) };
}

module.exports = buildResponse;