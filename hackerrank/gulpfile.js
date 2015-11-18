'use strict';

const argv = require('minimist')(process.argv.slice(2));
const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const _exec = require('child_process').execSync;

const exec = (cmd) => {
  return _exec(cmd, { encoding: 'utf8' });
};

const templateFile = path.resolve(__dirname, 'template.js');

const exists = (path) => {
  try {
    fs.statSync(path);
    return true;
  } catch(err) {
    return false;
  }
};

/**
 * generate problem folder structure
 *
 * @example
 *   gulp generate diagonal-difference
 */
gulp.task('generate', () => {
  let problem = argv.problem;

  if (!problem) {
    console.log(`
[ERROR] Problem name should be provided should be provided:
gulp generate --problem diagonal-difference
    `);
    return;
  }

  console.log(`Generating ${problem} problem file structure...`);

  let template = fs.readFileSync(templateFile, { encoding: 'utf8' }).replace('<problem>', problem);
  let problemFolder = path.resolve(__dirname, 'problems', problem);

  if (exists(problemFolder)) {
    console.log(`[ERROR] Problem folder already exists.`);
    return;
  }

  exec(`
    mkdir -p ${problemFolder}
    touch ${problemFolder}/in.txt
    touch ${problemFolder}/out.txt
  `);

  fs.writeFileSync(`${problemFolder}/index.js`, template);

  exec(`subl ${problemFolder}/index.js`);
});
