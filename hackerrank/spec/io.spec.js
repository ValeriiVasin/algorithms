'use strict';

/**
 * Input/Output testing
 *
 * Checks builded file to correctly process input and provide output
 */


const fs = require('fs');
const path = require('path');
const _exec = require('child_process').execSync;
const config = require('../config');

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
const _getConfigs = (_config) => {
  let problems = fs.readdirSync(_config.folder);

  // allow to test only one problem
  if (process.env.PROBLEM && _config.type === 'problem') {
    problems = problems.filter((problem) => problem === process.env.PROBLEM);
  }

  if (process.env.EULER && _config.type === 'euler') {
    problems = problems.filter((problem) => problem === process.env.EULER);
  }

  const configs = problems.map((name) => {
    let config = {
      name: name,
      file: path.resolve(__dirname, `../build/${_config.type}_${name}.js`),
      tests: []
    };

    // @todo optimize test cases determination
    let problemFolder = path.resolve(__dirname, '..', `${_config.folder}/${name}`);
    let txtFiles = fs.readdirSync(problemFolder).filter((file) => /\.txt$/.test(file));;
    let inputFiles = txtFiles.filter((file) => /in\.txt$/.test(file));
    let outputFiles = txtFiles.filter((file) => /out\.txt$/.test(file));

    // keys could be empty (for default test)
    // if not empty - the last symbol is "."
    let keys = inputFiles.map((file) => file.slice(0, -6));

    config.tests = keys
      .filter((key) => outputFiles.indexOf(`${key}out.txt`) !== -1)
      .map((key) => ({
        // replace last dot for normalization
        key: key.replace(/\.$/, '') || 'default',
        input: path.resolve(problemFolder, `${key}in.txt`),
        output: path.resolve(problemFolder, `${key}out.txt`)
      }));

    if (process.env.TEST) {
      let filter = new Set(process.env.TEST.split(','));
      config.tests = config.tests.filter((test) => filter.has(test.key));
    }

    return config;
  });

  return configs.filter((config) => config.tests.length);
};

const getConfigs = () => {
  if (process.env.PROBLEM) {
    return _getConfigs(config.projects.problems);
  }

  if (process.env.EULER) {
    return _getConfigs(config.projects.euler);
  }

  let projects = Object.keys(config.projects);

  return projects.reduce((result, project) => {
    let configs = _getConfigs(config.projects[project]);
    return result.concat(configs);
  }, []);
};

xdescribe('I/O test', () => {
  beforeAll(() => {
    // build before running IO specs
    // exec('npm run build');
  });

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
