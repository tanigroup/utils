const { camelCase } = require('lodash');
const isPlainObject = require('is-plain-obj');

function camelCaseObj(data) {
  return data && Object.keys(data).reduce((curr, name) => {
    if (isPlainObject(data[name])) {
      return { 
        ...curr, 
        [camelCase(name)]: camelCaseObj(data[name])
      }
    }
    return {
      ...curr,
      [camelCase(name)]: data[name],
    }
  }, {})
}

module.exports = camelCaseObj;
