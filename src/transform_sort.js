const snakeCase = require('./helpers/snake_case');

function transformSort(sortQuery) {
  return sortQuery.split(',').map((element) => {
    const sortBy = element.replace('-', '');

    return element[0] === '-'
      ? [snakeCase(sortBy), 'DESC']
      : [snakeCase(sortBy), 'ASC'];
  });
}

module.exports = transformSort;
