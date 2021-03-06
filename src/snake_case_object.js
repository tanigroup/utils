const { isPlainObject } = require('lodash');
const snakeCase = require('./helpers/snake_case');

function snakeCaseObj(obj) {
  return (
    obj &&
    Object.keys(obj).reduce(
      (acc, name) =>
        isPlainObject(obj[name])
          ? {
              ...acc,
              [snakeCase(name)]: snakeCaseObj(obj[name]),
            }
          : {
              ...acc,
              [snakeCase(name)]: obj[name],
            },
      {},
    )
  );
}

module.exports = snakeCaseObj;
