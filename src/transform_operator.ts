import { isPlainObject } from 'lodash';

type ObjectStringIndex = {
  [index: string]: any
}

function transformOperator(obj: ObjectStringIndex, operator: any) {
  const newObj: ObjectStringIndex = {};

  Object.keys(obj).forEach((key: string) => {
    let newKey = key;

    if (key.startsWith('$')) {
      newKey = operator[key.replace('$', '')];
      newObj[newKey] = null;
    }

    if (isPlainObject(obj[key])) {
      newObj[newKey] = transformOperator(obj[key], operator);
    } else if (Array.isArray(obj[key])) {
      newObj[newKey] = obj[key].map((nested: object) =>
        transformOperator(nested, operator),
      );
    } else {
      newObj[newKey] = obj[key];
    }
  });

  return newObj;
}

export default transformOperator;