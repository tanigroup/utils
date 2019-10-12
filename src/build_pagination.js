function buildPagination(page, limit) {
  return {
    offset: (page - 1) * limit,
    limit,
  };
}

module.exports = buildPagination;
