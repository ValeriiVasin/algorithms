// https://www.hackerrank.com/challenges/the-grid-search

import { readLines } from '../../lib/read';

const solve = (lines) => {
  let n = Number(lines.shift().trim());

  for (let i = 0; i < n; i++) {
    let grid = readGrid(lines);
    let pattern = readGrid(lines);

    console.log(hasPattern(grid.grid, pattern.grid) ? 'YES' : 'NO');
  }
}

const readGrid = (lines) => {
  let [rows, columns] = lines.shift().trim().split(' ').map(Number);
  let grid = [];

  for (let i = 0; i < rows; i++) {
    grid.push(lines.shift());
  }

  return { rows, columns, grid };
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

readLines().then(solve);
