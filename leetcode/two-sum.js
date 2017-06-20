// https://leetcode.com/problems/two-sum/#/description

const toHash = nums => nums.reduce((hash, num, index) => {
  // save the index of the first element
  if (!hash.hasOwnProperty(num)) {
    hash[num] = index;
  }

  return hash;
}, {});

export const twoSum = (nums, target) => {
  const hash = toHash(nums);
  const length = nums.length;

  // check the edge case - needle is the half of target and there is few of them
  if (target % 2 === 0 && hash.hasOwnProperty(target / 2)) {
    const needle = target / 2;
    const needleIndex = nums.indexOf(needle, hash[needle] + 1);

    if (needleIndex !== -1) {
      return [hash[needle], needleIndex];
    }
  }

  for (let i = 0; i < length; i++) {
    const element = nums[i];
    const needle = target - element;

    // half-target case is handled above as an edge case
    if (needle === element) {
      continue;
    }

    if (hash.hasOwnProperty(needle)) {
      return [i, hash[needle]];
    }
  }

  return [];
};
