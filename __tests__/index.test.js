import fs from 'fs';
import path from 'path';
import gendiff from '../bin/index.js';

const extensionsWithFormats = [
  ['json', 'stylish'], ['json', 'plain'], ['json', 'json'],
  ['yml', 'stylish'], ['yml', 'plain'], ['yml', 'json'],
];
const __dirname = path.resolve();
const fixturesPath = `${__dirname}/__tests__/__fixtures__/`;
const getExpectedResult = (format) => (fs.readFileSync(`${__dirname}/__tests__/__fixtures__/${format}.txt`, 'utf8'));

test.each(extensionsWithFormats)(
  'gendiff(%s), format=%s',
  (ext, format) => {
    const result = gendiff(`${fixturesPath}file1.${ext}`, `${fixturesPath}file2.${ext}`, format);
    expect(result).toMatch(getExpectedResult(format));
  },
);
test('gendiff(empty)', () => {
  expect(() => gendiff()).toThrow();
});
