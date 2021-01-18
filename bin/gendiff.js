#!/usr/bin/env node
import program from 'commander';
import gendiff from '../index.js';

program
  .usage('[options] <filepath1> <filepath2>')
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('[filepath1] [filepath2]')
  .action(gendiff)
  
program.parse(process.argv);
