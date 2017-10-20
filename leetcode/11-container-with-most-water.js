// https://leetcode.com/problems/container-with-most-water

function maxArea(heights) {
  let i = 0;
  let j = heights.length - 1;

  let maxArea = 0;
  while (i < j) {
    const iHeight = heights[i];
    const jHeight = heights[j];
    const minHeight = Math.min(iHeight, jHeight);
    const distance = j - i;
    const area = distance * minHeight;

    if (area > maxArea) {
      maxArea = area;
    }

    if (iHeight > jHeight) {
      j -= 1;
      continue;
    }

    i += 1;
  }

  return maxArea;
}

module.exports = maxArea;
