const fs = require('fs');

// configure processing of whole `src/` directory
const getEntries = () => {
  return fs.readdirSync('./problems').reduce((entries, file) => {
    entries[file] = `./problems/${file}/index`;
    return entries;
  }, {});
};

module.exports = {
  entry: getEntries(),
  output: {
    path: require('path').resolve('./build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  target: 'node'
};
