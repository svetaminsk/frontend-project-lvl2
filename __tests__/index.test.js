import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../bin/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

test('general scenario', () => {
  const json1 = getFixturePath('file1.json');
  const json2 = getFixturePath('file2.json');
  const expected = readFile('general-scenario.txt');
  expect(gendiff(json1, json2)).toBe(expected);
});

test('general for yaml files', () => {
  const yaml1 = getFixturePath('file1.yml');
  const yaml2 = getFixturePath('file2.yml');
  const expected = readFile('general-for-yaml-files.txt');
  expect(gendiff(yaml1, yaml2)).toBe(expected);
});
