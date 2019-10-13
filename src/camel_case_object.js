const { isPlainObject, camelCase } = require('lodash');

function camelCaseObj(obj) {
  return (
    obj &&
    Object.keys(obj).reduce(
      (acc, name) =>
        isPlainObject(obj[name])
          ? {
              ...acc,
              [camelCase(name)]: camelCaseObj(obj[name]),
            }
          : {
              ...acc,
              [camelCase(name)]: obj[name],
            },
      {},
    )
  );
}

module.exports = camelCaseObj;
