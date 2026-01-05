// 3. *Delete Middle Node*:

// Implement an algorithm to delete a node in the middle
// (i.e., any node but the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node.

// ```
// EXAMPLE
// Input: the node c from the linked list a - >b- >c - >d - >e- >f
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f Hints: #72
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function deleteMiddleNode<T>(
  head: Node<T>,
  position: number
): Node<T> | undefined {
  // a -> b -> c
  // a -> c

  // a -> b -> c -> d -> e -> f
  if (position === 0) {
    return head;
  }

  let size = 0;
  let pointer = head;

  while (pointer) {
    pointer = pointer.next!;
    size++;
  }
  if (position >= size) {
    return head;
  }

  pointer = head!;
  while (position - 1 > 0) {
    pointer = pointer.next!;
    position--;
  }

  pointer.next = pointer.next?.next;
  return head;
}
