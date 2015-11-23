'use strict';

const fs = require('fs');
const config = require('./config');

// configure processing of whole `src/` directory
const getEntries = () => {
  let projects = config.projects;

  return Object.keys(projects).map((project) => projects[project]).reduce((result, config) => {
    return Object.assign(result, getConfigEntries(config));
  }, {});
};

// configure processing of whole `src/` directory
const getConfigEntries = (config) => {
  if (process.env.EULER && config.type !== 'euler') {
    return {};
  }

  if (process.env.PROBLEM && config.type !== 'problem') {
    return {};
  }

  let problems = fs.readdirSync(config.folder);

  if (config.type === 'problem' && process.env.PROBLEM) {
    problems = problems.filter((problem) => problem === process.env.PROBLEM);
  }

  if (config.type === 'euler' && process.env.EULER) {
    problems = problems.filter((problem) => problem === process.env.EULER);
  }

  return problems.reduce((entries, file) => {
    entries[`${config.type}_${file}`] = `${config.folder}/${file}/index`;
    return entries;
  }, {});
};

module.exports = {
  entry: getEntries(),
  output: {
    path: require('path').resolve('./build'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  target: 'node'
};
