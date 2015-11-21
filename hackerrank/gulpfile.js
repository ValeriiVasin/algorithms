'use strict';

/**
 * PROBLEM=<problem> gulp init
 * PROBLEM=<problem> [TEST=<testcase>] gulp test
 * PROBLEM=<problem> gulp publish
 * PROBLEM=<problem> gulp commit
 */

const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const _exec = require('child_process').exec;
const _execSync = require('child_process').execSync;

const PROBLEM = process.env.PROBLEM;
const PROBLEMS_FOLDER = path.resolve(__dirname, 'problems');

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

const ensureProblem = (task) => {
  if (!PROBLEM) {
    throw new Error(`Environment variable PROBLEM should be provided:\n\nPROBLEM=diagonal-difference gulp ${task}\n`);
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

/**
 * generate problem folder structure
 *
 * @example
 *   PROBLEM=diagonal-difference gulp init
 */
gulp.task('init', () => {
  ensureProblem('init');

  console.log(`Generating ${PROBLEM} problem file structure...`);

  let template = fs.readFileSync(templateFile, { encoding: 'utf8' }).replace('<problem>', PROBLEM);
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
  exec('npm run build-test').then(() => done(), done);
});

const getCommentedOrigianl = (problem) => {
  let problemFile = path.resolve(PROBLEMS_FOLDER, PROBLEM, 'index.js');

  let original = fs.readFileSync(problemFile, { encoding: 'utf8' }).trim()
    // comment everything
    .split('\n').map((line) => '// ' + line).join('\n');

  return `// Original solution:\n// =================\n${original}`;
};

gulp.task('publish', () => {
  ensureProblem('publish');

  // build minified solution
  execSync(`npm run build-optimized`);

  // prepend original to build version
  let original = getCommentedOrigianl(PROBLEM);
  let buildFile = path.resolve(__dirname, 'build', `${PROBLEM}.js`);
  fs.writeFileSync(buildFile, original + '\n\n' + fs.readFileSync(buildFile, { encoding: 'utf8' }));
  execSync(`cat ./build/${PROBLEM}.js | pbcopy`);

  console.log(`Solution is copied to clipboard.`);
});

gulp.task('commit', () => {
  ensureProblem('commit');
  execSync(`git add problems/${PROBLEM} && git ci -m "[hackerrank] Solve ${PROBLEM}."`);
});
