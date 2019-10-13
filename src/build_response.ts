import camelCaseObj from './camel_case_object';

enum sort {
  Draft,
  Distributed,
  Fully_redeemed
}

interface Params {
  page: number;
  limit: number;
  sort?: string;
  status?: sort;
  search?: string;
}

interface Data {
  count: number;
  rows: Array<object>;
}

type page = {
  page: number;
  limit: number;
}

interface Response {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  params: Params;
  items: Array<object>;
}

type data = {
  data: object;
}

function buildResponse(data: Data, params?: Params): Response | data {
  if (params) {
    const { page = 1, limit = 10 }: page = params
    const { count: totalCount, rows: items }: Data = data;
    const totalPages: number = Math.ceil(totalCount / limit) || 1;
    const currentPage: number = Math.min(page, totalPages);

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

export default buildResponse;