const { camelCase } = require('lodash');

function camelCaseObj(data) {
  if (data) {
    return Object.keys(data).reduce((curr, name) => {
      if (typeof data[name] === "object") {
        return { 
          ...curr, 
          [camelCase(name)]: {
            ...camelCaseObj(data[name])
          }
        }
      }
      return {
        ...curr,
        [camelCase(name)]: data[name],
      }
    }, {})
  }
}

module.exports = camelCaseObj;