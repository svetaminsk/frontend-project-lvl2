#!/usr/bin/env node
import program from 'commander';
import process from 'process';
import genDiff from './index.js';

program
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<firstConfig> <secondConfig>')
  .action((first, second, options) => {
    console.log(genDiff(first, second, options.format));
  });

program.parse(process.argv);
