// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  // Two pointers. Left and right. The right will go for each element
  let left = head;

  while (left) {
    let right = left;
    while (right.next) {
      // If are the same we skip the value
      if (right.next.value === left.value) {
        right.next = right.next.next;
        continue;
      }
      right = right.next;
    }
    left = left.next;
  }
  return head;
}
