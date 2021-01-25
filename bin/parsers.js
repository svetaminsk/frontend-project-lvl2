import yaml from 'js-yaml';
import fs from 'fs';
import { resolve, extname } from 'path';

const getPath = (filepath) => resolve(process.cwd(), filepath);
const getExtension = (filepath) => extname(getPath(filepath));
const readFile = (filepath) => fs.readFileSync(getPath(filepath), 'utf-8');
const parsers = (filepath) => {
  const extension = getExtension(filepath);
  switch (extension) {
    case '.json':
      return JSON.parse(readFile(filepath));
    case '.yml' || '.yaml':
      return yaml.load(readFile(filepath));
    case '.txt':
      return readFile(filepath);
    default:
      throw new Error(`Current extension ${extension} cannot be read, please use files '.json, .yaml, .txt'`);
  }
};

export default parsers;
