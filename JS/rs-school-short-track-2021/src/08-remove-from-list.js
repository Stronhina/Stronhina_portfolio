/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let head = l;
  while (head.value === k) {
    head = head.next;
  }
  let currentNode = head;
  let prevNode = currentNode;
  while (currentNode.next !== null) {
    if (currentNode.value === k) {
      prevNode.next = currentNode.next;
      currentNode = currentNode.next;
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  if (currentNode.next === null && currentNode.value === k) {
    currentNode = null;
  }
  return head;
}

module.exports = removeKFromList;
