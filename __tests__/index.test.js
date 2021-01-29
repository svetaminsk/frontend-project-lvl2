import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../bin/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const getContent = (filePath) => fs.readFileSync(filePath, 'utf-8');
describe('stylish format', () => {
  test('stylish json', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toEqual(getContent(getFixturePath('stylish.txt')).trim());
  });
  test('stylish yaml', () => {
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'stylish')).toEqual(getContent(getFixturePath('stylish.txt').trim()));
  });
});

describe('plain format', () => {
  test('plain format', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(getContent(getFixturePath('plain.txt')).trim());
  });
  test('plain format yaml', () => {
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain')).toEqual(getContent(getFixturePath('plain.txt')).trim());
  });
});

describe('json format', () => {
  test('json format', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toEqual(getContent(getFixturePath('json.txt')).trim());
  });
  test('json format yaml', () => {
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'json')).toEqual(getContent(getFixturePath('json.txt')).trim());
  });
});
