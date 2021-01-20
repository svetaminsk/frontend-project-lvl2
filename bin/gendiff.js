#!/usr/bin/env node
import program from 'commander';
import path from 'path';
import gendiff from '../index.js';

program
  .usage('[options] <filepath1> <filepath2>')
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('[filepath1] [filepath2]')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(filepath1);
    const absolutePath2 = path.resolve(filepath2);
    console.log(gendiff(absolutePath1, absolutePath2, program.format));
  });

program.parse(process.argv);
