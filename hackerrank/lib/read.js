// var process = global.process;

function read() {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");

  var input = '';

  return new Promise(function(resolve) {
    process.stdin.on('data', function(data) {
      input += data;
    });

    process.stdin.on('end', function () {
      resolve(input.trim());
    });
  });
}

function readLines() {
  return read().then(function(input) {
    return input.split('\n').map(function(line) {
      return line.trim();
    });
  });
}

module.exports = {
  read: read,
  readLines: readLines
};
