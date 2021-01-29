#!/usr/bin/env node
import program from 'commander';
import process from 'process';
import gendiff from './index.js';

program
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'nested')
  .arguments('<firstConfig> <secondConfig>')
  .action((first, second, options) => {
    console.log(gendiff(first, second, options.format));
  });

program.parse(process.argv);
