// https://leetcode.com/problems/3sum-closest/description/
export const threeSumClosest = (arr, target) => {
  const values = arr.sort((a, b) => a - b);
  const length = values.length;

  let minSum;
  let minDiff = Infinity;
  for (let i = 0; i < length - 2; i += 1) {
    const a = values[i];
    let start = i + 1;
    let end = length - 1;

    while (start < end) {
      const b = values[start];
      const c = values[end];

      const sum = a + b + c;
      const diff = target - sum;

      if (diff === 0) {
        return target;
      }

      const absDiff = Math.abs(diff);
      if (absDiff < minDiff) {
        minDiff = absDiff;
        minSum = sum;
      }

      if (diff > 0) {
        start += 1;
        continue;
      }

      end -= 1;
    }
  }

  return minSum;
};
