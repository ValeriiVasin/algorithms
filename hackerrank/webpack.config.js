const fs = require('fs');

// configure processing of whole `src/` directory
const getEntries = () => {
  return fs.readdirSync('./src').reduce((entries, file) => {
    // cut .js
    file = file.slice(0, -3);

    entries[file] = `./src/${file}`;
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
