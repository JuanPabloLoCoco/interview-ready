// 7. *Palindrome*:

// Implement a function to check if a linked list is a palindrome.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function isPalindrome<T>(head: Node<T> | undefined): boolean {
  let values = [];

  let pointer = head;
  while (pointer) {
    values.push(pointer.value);
    pointer = pointer.next;
  }

  for (let i = 0; i < values.length / 2; i++) {
    if (values[i] !== values[values.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
