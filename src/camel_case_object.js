const { camelCase } = require('lodash');

function camelCaseObj(obj) {
  return Object.keys(obj).reduce(
    (acc, name) => ({
      ...acc,
      [camelCase(name)]: obj[name],
    }),
    {},
  );
}

module.exports = camelCaseObj;
