// https://leetcode.com/problems/merge-two-sorted-lists/description/
// Current solution is works only for ASC, but it was not specified in the task
// and complicated other way

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  toString() {
    let result = [];
    let ref = this;

    while (ref) {
      result.push(ref.val);
      ref = ref.next;
    }

    return `[${result.join(',')}]`;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }

  l2.next = mergeTwoLists(l2.next, l1);
  return l2;
};
