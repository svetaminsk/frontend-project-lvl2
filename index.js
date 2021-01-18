import _ from 'lodash';
import fs from 'fs';

const gendiff = (file1, file2) => {
  const object1 = JSON.parse(fs.readFileSync(file1));
  const object2 = JSON.parse(fs.readFileSync(file2));
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();
  const keys = keys2.reduce((acc, key) => {
    if (!acc.includes(key)) {
      acc.push(key);
    } return acc;
  }, keys1).sort();
  const resultObject = keys.reduce((acc, key) => {
    if (_.has(object1, key) && _.has(object2, key)) {
      if (object2[key] === object1[key]) {
        acc[`  ${key}`] = object2[key];
      }
    if (object2[key] !== object1[key]) {
      acc[`- ${key}`] = object1[key];
        acc[`+ ${key}`] = object2[key];
    } return acc;
    }
    if (_.has(object1, key) && !_.has(object2, key)) {
      acc[`- ${key}`] = object1[key];
      return acc;
    }
    acc[`+ ${key}`] = object1[key];
    return acc;
  }, {});
    const entriesOfRO = Object.entries(resultObject);
    const result = entriesOfRO.reduce((acc, el) => acc.concat(`\n${el[0]}: ${el[1]} `), '');
    console.log(`{ ${result} \n}`);
  };
  
export default gendiff;