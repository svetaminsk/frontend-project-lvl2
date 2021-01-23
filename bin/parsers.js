import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs';

const parsers = (filepath, type) => {
  const pathFile = path.resolve(process.cwd(), filepath);
  switch (type) {
    case 'json':
      return JSON.parse(fs.readFileSync(pathFile, 'utf-8'));
    case 'yml':
      return yaml.load(fs.readFileSync(pathFile, 'utf-8'));
    default:
      throw new Error('Wrong file type!');
  }
};

export default parsers;
