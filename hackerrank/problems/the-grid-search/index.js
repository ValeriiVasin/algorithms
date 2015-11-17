// https://www.hackerrank.com/challenges/the-grid-search

import { read } from '../../lib/read';

const solve = (reader) => {
  let n = reader.readNumber();

  for (let i = 0; i < n; i += 1) {
    let grid = readGrid(reader);
    let pattern = readGrid(reader);

    console.log(hasPattern(grid, pattern) ? 'YES' : 'NO');
  }
}

const readGrid = (reader) => {
  let [rows, columns] = reader.readNumbers();

  return reader.readLines(rows);
};

export const hasPattern = (grid, pattern) => {
  let gridRows = grid.length;
  let gridColumns = grid[0].length;
  let patternRows = pattern.length;
  let patternColumns = pattern[0].length;

  for (let row = 0; row <= gridRows - patternRows; row++) {
    for (let col = 0; col <= gridColumns - patternColumns; col++) {
      if (isPattern(grid, pattern, row, col)) {
        return true;
      }
    }
  }

  return false;
};

export const isPattern = (grid, pattern, rowStart, colStart) => {
  let patternWidth = pattern[0].length;
  let patternHeight = pattern.length;

  for (let row = 0; row < patternHeight; row++) {
    for (let col = 0; col < patternWidth; col++) {
      if (grid[row + rowStart][col + colStart] !== pattern[row][col]) {
        return false;
      }
    }
  }

  return true;
};

read().then(solve);
