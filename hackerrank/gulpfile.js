'use strict';

/**
 * PROBLEM=<problem> gulp init
 * PROBLEM=<problem> [TEST=<testcase>] gulp test
 * PROBLEM=<problem> gulp publish
 * PROBLEM=<problem> gulp commit
 *
 * EULER=<problem> gulp init
 * EULER=<problem> [TEST=<testcase>] gulp test
 * EULER=<problem> gulp publish
 * EULER=<problem> gulp commit
 */

const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const _exec = require('child_process').exec;
const _execSync = require('child_process').execSync;

const config = require('./config');

const project = process.env.PROBLEM ? config.projects.problems : config.projects.euler;
const PROBLEM = process.env.PROBLEM || process.env.EULER;
const PROBLEMS_FOLDER = path.resolve(__dirname, project.folder);
const PROBLEM_FOLDER = path.resolve(PROBLEMS_FOLDER, PROBLEM);
const PROBLEM_BUILD_FILE = path.resolve(__dirname, 'build', `${project.type}_${PROBLEM}.js`);

const execSync = (cmd) => {
  return _execSync(cmd, { encoding: 'utf8' });
};

const exec = (cmd) => {
  return new Promise((resolve, reject) => {
    let cp = _exec(cmd, { encoding: 'utf8' }, (err, result) => err ? reject(err) : resolve(result));

    cp.stdout.pipe(process.stdout);
    cp.stderr.pipe(process.stderr);
    cp.stdin.pipe(process.stdin);
  })
};

const ensureProblem = () => {
  if (!PROBLEM) {
    throw new Error(`Environment variable PROBLEM/EULER should be provided for the task`);
  }
}

const templateFile = path.resolve(__dirname, 'template.js');

const exists = (path) => {
  try {
    fs.statSync(path);
    return true;
  } catch(err) {
    return false;
  }
};

gulp.task('init', () => {
  ensureProblem();

  console.log(`Generating ${PROBLEM} problem file structure...`);

  // challenges
  let hackerrankUrl = `https://www.hackerrank.com/challenges/${PROBLEM}`;
  let libPath = '../../lib/read';

  // euler
  if (process.env.EULER) {
    hackerrankUrl = `https://www.hackerrank.com/contests/projecteuler/challenges/euler${PROBLEM}`;
    libPath = '../../../lib/read';
  }

  let template = fs.readFileSync(templateFile, { encoding: 'utf8' })
    .replace('<hackerrank-url>', hackerrankUrl)
    .replace('<lib-path>', libPath);

  let problemFolder = path.resolve(PROBLEMS_FOLDER, PROBLEM);

  if (exists(problemFolder)) {
    console.log(`[ERROR] Problem folder already exists.`);
    return;
  }

  execSync(`
    mkdir -p ${problemFolder}
    touch ${problemFolder}/in.txt
    touch ${problemFolder}/out.txt
  `);

  fs.writeFileSync(`${problemFolder}/index.js`, template);

  execSync(`subl ${problemFolder}/index.js`);
});

gulp.task('test', (done) => {
  exec('npm test').then(() => done(), done);
});

const getCommentedOriginal = (problem) => {
  let problemFile = path.resolve(PROBLEMS_FOLDER, PROBLEM, 'index.js');

  let original = fs.readFileSync(problemFile, { encoding: 'utf8' }).trim()
    // comment everything
    .split('\n').map((line) => '// ' + line).join('\n');

  return `// Original solution:\n// =================\n${original}`;
};

gulp.task('publish', () => {
  ensureProblem();

  // build minified solution
  execSync(`npm run build-optimized`);

  // prepend original to build version
  let original = getCommentedOriginal(PROBLEM);
  let buildFile = path.resolve(PROBLEM_BUILD_FILE);
  fs.writeFileSync(buildFile, original + '\n\n' + fs.readFileSync(buildFile, { encoding: 'utf8' }));
  execSync(`cat ${buildFile} | pbcopy`);

  console.log(`Solution is copied to clipboard.`);
});

gulp.task('commit', () => {
  ensureProblem();
  let message = process.env.PROBLEM ?
    `[hackerrank] Solve problem ${PROBLEM}.` :
    `[hackerrank] Solve euler ${PROBLEM}.`;

  execSync(`git add ${PROBLEM_FOLDER} && git ci -m "${message}"`);
});
