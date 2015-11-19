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

const buildFolder = path.resolve(__dirname, '../build');

/**
 *
 * @return {Object} Runner config, e.g.
 *
 * [{
 *  name: 'simple-array-sum',
 *  file: 'full/path/to/solution.js',
 *  tests: [{
 *    key: 'default',
 *    input: 'full/path/to/input.txt',
 *    output: 'full/path/to/output.txt'
 *  }]
 * }]
 */
const getConfigs = () => {
  let problems = fs.readdirSync('problems');

  // allow to test only one problem
  if (process.env.PROBLEM) {
    problems = problems.filter((problem) => problem === process.env.PROBLEM);
  }

  const configs = problems.map((name) => {
    let config = {
      name: name,
      file: path.resolve(__dirname, `../build/${name}.js`),
      tests: []
    };

    // @todo optimize test cases determination
    let problemFolder = path.resolve(__dirname, `../problems/${name}`);
    let txtFiles = fs.readdirSync(problemFolder).filter((file) => /\.txt$/.test(file));;
    let inputFiles = txtFiles.filter((file) => /in\.txt$/.test(file));
    let outputFiles = txtFiles.filter((file) => /out\.txt$/.test(file));

    let keys = inputFiles.map((file) => file.slice(0, -6));

    config.tests = keys
      .filter((key) => outputFiles.indexOf(`${key}out.txt`) !== -1)
      .map((key) => ({
        key: key || 'default',
        input: path.resolve(problemFolder, `${key}in.txt`),
        output: path.resolve(problemFolder, `${key}out.txt`)
      }));

    return config;
  });

  return configs.filter((config) => config.tests.length);
};

describe('I/O test', () => {

  for (let config of getConfigs()) {
    describe(`- ${config.name}`, () => {
      let file = config.file;

      for (let test of config.tests) {
        it(`- ${test.key}`, () => {
          let cmd = `${process.env.TIME ? 'time' : ''} node ${file} < ${test.input}`;

          expect(exec(cmd).trim()).toBe(fs.readFileSync(test.output, { encoding: 'utf8' }).trim());
        });
      }

    });
  }
});
