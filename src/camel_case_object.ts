import { isPlainObject, camelCase } from 'lodash';

function camelCaseObj(obj: {[index: string]: any}): object {
  return (
    obj &&
    Object.keys(obj).reduce(
      (acc: object, name: string) =>
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

export default camelCaseObj;