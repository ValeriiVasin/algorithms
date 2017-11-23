// Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description

/**
 * TODO: solve it properly (not by cheating with Set)
 */

export const removeDuplicates = (nums) => {
  const set = new Set(nums);

  nums.length = 0;
  nums.push(...set);

  return set.size;
};
