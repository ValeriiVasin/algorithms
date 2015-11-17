export const read = () => {
  return _read().then((input) => new ReadInterface(input));
};

const _read = () => {
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
};

class ReadInterface {
  constructor(input) {
    this._lines = input.split('\n').map((line) => line.trim());
    this._currentLine = 0;
    this._length = this._lines.length;
  }

  readLine() {
    if (this._currentLine === this._length) {
      return null;
    }

    let line = this._lines[this._currentLine];
    this._currentLine += 1;
    return line;
  }

  readNumber() {
    let line = this.readLine();
    return Number(line);
  }

  readNumbers(n, separator = ' ') {
    let line = this.readLine();
    let numbers = line.split(separator).map(Number);

    return typeof n === 'number' && n !== numbers.length ? numbers.slice(0, n) : numbers;
  }

  readLines(n) {

    // return lines left to the end
    if (typeof n === 'undefined') {
      n = this._length - this._currentLine;
    }

    let result = [];

    for (let i = 0; i < n; i += 1) {
      result.push(this.readLine());
    }

    return result;
  }
}
