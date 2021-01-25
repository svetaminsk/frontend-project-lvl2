import parsers from './parsers.js';
import tree from './tree.js';
import format from '../formatters/format.js';

const genDiff = (filepath1, filepath2, formatType = 'stylish') => {
  const parsed1 = parsers(filepath1);
  const parsed2 = parsers(filepath2);
  const tree1 = tree(parsed1, parsed2);
  return format(tree1, formatType);
};
export default genDiff;
