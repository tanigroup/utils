import { isPlainObject, snakeCase } from 'lodash';

function snakeCaseObj(obj: {[index: string]: any}): object {
  return (
    obj &&
    Object.keys(obj).reduce(
      (acc: object, name: string) =>
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

export default snakeCaseObj;