import getStylishOutput from './stylish.js';
import getPlainOutput from './plain.js';
import getJSONOutput from './json.js';

export default (data, format) => {
  switch (format) {
    case 'plain':
      return getPlainOutput(data);
    case 'json':
      return getJSONOutput(data);
    case 'stylish':
      return getStylishOutput(data);
    default:
      throw new Error(`Unknown format ${format}`);
  }
};
