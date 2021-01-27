import _ from 'lodash';

const stringifyData = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  }
  if (data === null) {
    return 'null';
  }
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  return data;
};

const getPlainOutput = (data, path = '') => data
  .map((node) => {
    const {
      key, value, oldValue, newValue, status, children,
    } = node;
    switch (status) {
      case 'added':
        return `Property '${path}${key}' was added with value: ${stringifyData(value)}`;
      case 'removed':
        return `Property '${path}${key}' was removed`;
      case 'replaced':
        return `Property '${path}${key}' was updated. From ${stringifyData(oldValue)} to ${stringifyData(newValue)}`;
      case 'nested':
        return getPlainOutput(children, `${path}${key}.`);
      default:
        return null;
    }
  })
  .filter((line) => line !== null)
  .join('\n');

export default getPlainOutput;
