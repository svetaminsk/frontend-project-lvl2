import _ from 'lodash';
import fs from 'fs';
import path from 'path';


const getData = (filepath) => {
  const pathFile = path.resolve(process.cwd(), filepath);
  return JSON.parse(fs.readFileSync(pathFile, 'utf-8'));
};

export default (filepath1, filepath2) => {
  const file1 = getData(filepath1);
  const file2 = getData(filepath2);
  const keys1 = Object.keys(file1).sort();
  const keys2 = Object.keys(file2).sort();
  const keys = keys2.reduce((acc, key) => {
    if (!acc.includes(key)) {
      acc.push(key);
    } return acc;
  }, keys1).sort();
  const resultObject = keys.reduce((acc, key) => {
    if (_.has(file1, key) && _.has(file2, key)) {
      if (file2[key] === file1[key]) {
        acc[`  ${key}`] = file2[key];
      }
    if (file2[key] !== file1[key]) {
      acc[`- ${key}`] = file1[key];
      acc[`+ ${key}`] = file2[key];
    } return acc;
    }
    if (_.has(file1, key) && !_.has(file2, key)) {
      acc[`- ${key}`] = file1[key];
      return acc;
    }
    acc[`+ ${key}`] = file2[key];
    return acc;
  }, {});
    const entries = Object.entries(resultObject);
    const tab = '  ';
    const result = entries.reduce((acc, [key, value]) => acc.concat(`\n${tab}${key}: ${value}`), '');
    return `{${result}\n}`;
  };
