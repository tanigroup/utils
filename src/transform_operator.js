const { isPlainObject } = require('lodash');

function transformOperator(obj, operator) {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    let newKey = key;

    if (key.startsWith('$')) {
      newKey = operator[key.replace('$', '')];
      newObj[newKey] = null;
    }

    if (isPlainObject(obj[key])) {
      newObj[newKey] = transformOperator(obj[key], operator);
    } else if (Array.isArray(obj[key])) {
      newObj[newKey] = obj[key].map((nested) =>
        transformOperator(nested, operator),
      );
    } else {
      newObj[newKey] = obj[key];
    }
  });

  return newObj;
}

module.exports = transformOperator;
