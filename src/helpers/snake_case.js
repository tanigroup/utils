const snakeCase = (name) =>
  name
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();

module.exports = snakeCase;
