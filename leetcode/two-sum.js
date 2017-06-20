// https://leetcode.com/problems/two-sum/#/description
export const twoSum = (nums, target) => {
  const length = nums.length;

  for (let i = 0; i < length - 1; i += 1) {
    for (let j = i + 1; j < length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};
