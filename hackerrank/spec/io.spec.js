'use strict';

/**
 * Input/Output testing
 *
 * Checks builded file to correctly process input and provide output
 */


const fs = require('fs');
const path = require('path');
const _exec = require('child_process').execSync;

const exec = (cmd) => {
  return _exec(cmd, { encoding: 'utf8' });
};

const srcFolder = path.resolve(__dirname, '../build');
const dataFolder = path.resolve(__dirname, '../data');

/**
 * Get list of tests [filename without extension] for which source/input/output files exist
 * @todo Optimize when there will be more files
 */
const getTests = () => {
  const srcFiles = fs.readdirSync(srcFolder).map((file) => file.slice(0, -3));
  const dataInputFiles = fs.readdirSync(dataFolder)
    .filter((file) => /\.in\.txt$/.test(file))
    .map((file) => file.slice(0, -7));
  const dataOutputFiles = fs.readdirSync(dataFolder)
    .filter((file) => /\.out\.txt$/.test(file))
    .map((file) => file.slice(0, -8));

  // find those files that have src and data
  const tests = srcFiles.filter((file) => dataInputFiles.indexOf(file) !== -1 && dataOutputFiles.indexOf(file) !== -1);

  return tests;
};

fdescribe('I/O test', () => {
  for (let test of getTests()) {
    let srcFile = path.resolve(srcFolder, `${test}.js`);
    let dataInputFile = path.resolve(dataFolder, `${test}.in.txt`);
    let dataOutput = fs.readFileSync(path.resolve(dataFolder, `${test}.out.txt`), { encoding: 'utf8' });

    let cmd = `node ${srcFile} < ${dataInputFile}`;

    it(`- ${test}`, () => {
      expect(exec(cmd).trim()).toBe(dataOutput.trim())
    });
  }
});
