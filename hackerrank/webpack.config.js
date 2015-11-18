'use strict';

const fs = require('fs');

// configure processing of whole `src/` directory
const getEntries = () => {
  let problems = fs.readdirSync('./problems');

  if (process.env.PROBLEM) {
    problems = problems.filter((problem) => problem === process.env.PROBLEM);
  }

  return problems.reduce((entries, file) => {
    entries[file] = `./problems/${file}/index`;
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
