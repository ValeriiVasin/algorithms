#!/usr/bin/env node

// https://www.hackerrank.com/challenges/simple-array-sum

function solve(lines) {
  var count = Number(lines[0]);
  var numbers = lines[1].split(' ').map(Number);

  var result = numbers.slice(0, count).reduce(function(a, b) { return a + b; });

  console.log(result);
}

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

readLines().then(solve);
