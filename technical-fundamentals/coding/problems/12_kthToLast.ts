// 2.  *Return Kth to Last*:

// Implement an algorithm to find the kth to last element of a singly linked list.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function kthToLast<T>(
  head: Node<T>,
  k: number
): Node<T> | undefined {
  if (k === 0) {
    return undefined;
  }
  let size = 0;
  let rPointer = head;
  let lPointer = head;
  while (size < k) {
    if (!rPointer) {
      return undefined;
    }
    size++;
    rPointer = rPointer.next!;
  }

  while (rPointer) {
    rPointer = rPointer.next!;
    lPointer = lPointer.next!;
  }
  return lPointer;
}
