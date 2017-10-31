#!/usr/bin/env node

/** CLI util to create new task */

// @ts-check

const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const getProblems = async () => {
  // API urls got from here: https://github.com/skygragon/leetcode-cli
  const json = await fetch('https://leetcode.com/api/problems/algorithms').then(res => res.json());

  return json.stat_status_pairs;
};

const getProblem = async problemId => {
  const problems = await getProblems();

  return problems.find(problem => problem.stat.question_id === problemId);
};

const PROBLEM_TEMPLATE = `
// $problemTitle
// https://leetcode.com/problems/$problemSlug/description

export const solution = () => {

};
`;

const PROBLEM_SPEC_TEMPLATE = `
import { solution } from './$filename';

test('sample data', () => {

});
`;

const main = async () => {
  const problemId = Number(process.argv[2]);

  if (!problemId) {
    throw 'Please provide problem id: `yarn leetcode 18`';
  }

  const problem = await getProblem(problemId);

  if (!problem) {
    throw `Problem with id ${problemId} not found. Please provide correct problemId`;
  }

  const stats = problem.stat;
  const problemTitle = stats.question__title;
  const problemSlug = stats.question__title_slug;

  const fileId = `${problemId}-${problemSlug}`;
  const filename = `${fileId}.js`;
  const specFilename = `${fileId}.spec.js`;

  const filepath = path.resolve(__dirname, '../leetcode', filename);
  const specFilepath = path.resolve(__dirname, '../leetcode', specFilename);

  if (fs.existsSync(filepath)) {
    throw `Problem file "${filepath}" already exist. Please remove it to proceede`;
  }

  console.log('creating problem file...');
  const problemFileContent = PROBLEM_TEMPLATE.trim()
    .replace('$problemTitle', problemTitle)
    .replace('$problemSlug', problemSlug);
  fs.writeFileSync(filepath, problemFileContent);

  if (fs.existsSync(specFilepath)) {
    throw `Problem file "${specFilepath}" already exist. Please remove it to proceede`;
  }

  console.log('creating problem spec file...');
  const problemSpecFileContent = PROBLEM_SPEC_TEMPLATE.trim().replace('$filename', fileId);
  fs.writeFileSync(specFilepath, problemSpecFileContent);

  // open both files in editor
  execSync(`open ${filepath}`);
  execSync(`open ${specFilepath}`);
};

main();
