const { isPlainObject, camelCase } = require('lodash');

function camelCaseObj(data) {
  return (
    data &&
    Object.keys(data).reduce(
      (curr, name) =>
        isPlainObject(data[name])
          ? {
              ...curr,
              [camelCase(name)]: camelCaseObj(data[name]),
            }
          : {
              ...curr,
              [camelCase(name)]: data[name],
            },
      {},
    )
  );
}

module.exports = camelCaseObj;
