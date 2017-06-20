// https://leetcode.com/problems/two-sum/#/description

export const twoSum = (nums, target) => {
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    const element = nums[i];
    const needle = target - element;
    const needleIndex = nums.indexOf(needle, i + 1);

    if (needleIndex !== -1) {
      return [i, needleIndex];
    }
  }

  return [];
};
