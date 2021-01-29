import path from 'path';
import fs from 'fs';
import parsers from './parsers.js';
import tree from './tree.js';
import formatted from '../formatters/format.js';

const gendiff = (filepath1, filepath2, type = 'stylish') => {
  const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');
  const absolutePathFile1 = path.resolve(process.cwd(), filepath1);
  const absolutePathFile2 = path.resolve(process.cwd(), filepath2);
  const contentFile1 = readFile(absolutePathFile1);
  const contentFile2 = readFile(absolutePathFile2);
  const parsed1 = parsers(contentFile1, path.extname(absolutePathFile1));
  const parsed2 = parsers(contentFile2, path.extname(absolutePathFile2));
  const tree1 = tree(parsed1, parsed2);
  return formatted(tree1, type);
};
export default gendiff;
