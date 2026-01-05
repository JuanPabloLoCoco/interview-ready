// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function intersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined
): Node<T> | undefined {
  let refSet: Set<Node<T>> = new Set<Node<T>>();

  let p = list1;
  while (p) {
    refSet.add(p);
    p = p.next;
  }

  p = list2;
  while (p) {
    if (refSet.has(p)) {
      return p;
    }
    p = p.next;
  }
  return undefined;
}
