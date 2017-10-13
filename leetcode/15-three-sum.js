// https://leetcode.com/problems/3sum/#/description

const toHashCounts = nums => nums.reduce((hash, num) => {
  if (hash.hasOwnProperty(num)) {
    hash[num]++;
  } else {
    hash[num] = 1;
  }

  return hash;
}, {});

// sort, remove more then 3 equal items from it
const normalizeArray = nums => {
  const counts = {};

  return nums
    .filter(num => {
      if (counts.hasOwnProperty(num)) {
        counts[num]++;
      } else {
        counts[num] = 1;
      }

      return counts[num] <= 3;
    })
    .sort((a, b) => a - b);
};

export const threeSum = (nums) => {
  const length = nums.length;

  if (length < 3) {
    return [];
  }

  const results = [];
  const unique = {};

  nums = normalizeArray(nums);

  if (nums.length === 3 && nums[0] === 0 && nums[2] === 0) {
    return [[0, 0, 0]];
  }

  const hash = toHashCounts(nums);

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      const iElement = nums[i];

      const jElement = nums[j];
      const needle = iElement + jElement === 0 ? 0 : -(iElement + jElement);

      // bigger numbers are to the right
      if (needle < jElement) {
        continue;
      }

      if (!hash.hasOwnProperty(needle)) {
        continue;
      }

      // check that amount of equal elements is enough
      if (needle === jElement && hash[needle] < 2) {
        continue;
      }

      if (needle === jElement && needle === iElement && needle === 0 && hash[needle] < 3) {
        continue;
      }

      // filter unique
      const result = [iElement, jElement, needle];
      const key = `${iElement} ${jElement} ${needle}`;
      if (unique.hasOwnProperty(key)) {
        continue;
      }
      unique[key] = true;

      results.push(result);
    }
  }

  return results;
};
