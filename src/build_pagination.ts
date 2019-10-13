interface Pagination {
  offset: number;
  limit: number;
}

function buildPagination(page: number, limit: number): Pagination {
  return {
    offset: (page - 1) * limit,
    limit,
  };
}

export default buildPagination;