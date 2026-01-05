// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295
// Output:9 -> 1 -> 2,Thatis,912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined
): Node<number> | undefined {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  let l1Vals = [];
  let p1: Node<number> | undefined = list1;
  while (p1) {
    l1Vals.push(p1.value);
    p1 = p1.next;
  }

  let l2Vals = [];
  let p2: Node<number> | undefined = list2;
  while (p2) {
    l2Vals.push(p2.value);
    p2 = p2.next;
  }

  let sum = Number(l1Vals.join("")) + Number(l2Vals.join(""));

  const values = sum.toString().split("");

  let newList: LinkedList<number> = new LinkedList<number>();

  values.forEach((v) => {
    newList.push(Number(v));
  });
  return newList.head;
}
