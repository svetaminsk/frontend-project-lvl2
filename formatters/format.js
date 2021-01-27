import getStylishOutput from './stylish.js';
import getPlainOutput from './plain.js';

export default (data, type) => {
  switch (type) {
    case 'stylish':
      return getStylishOutput(data);
    case 'plain':
      return getPlainOutput(data);
    default:
      throw new Error(`Unknown format ${type}`);
  }
};
