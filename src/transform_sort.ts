function transformSort(sortQuery: string): Array<[string, string]> {
  return sortQuery.split(',').map((element: string) => {
    const sortBy = element.replace('-', '');

    return element[0] === '-' ? [sortBy, 'DESC'] : [sortBy, 'ASC'];
  });
}

export default transformSort;