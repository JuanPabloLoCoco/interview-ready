// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumLists(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined
): Node<number> | undefined {
  let resultHead: Node<number> | undefined = undefined;
  let resultTail: Node<number> | undefined = undefined;

  let l1 = list1;
  let l2 = list2;
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  let carry: boolean = false;
  while (l1 && l2) {
    let v1 = l1.value;
    let v2 = l2.value;
    let value: number = v1 + v2 + (carry ? 1 : 0);
    carry = value > 9;
    value = value % 10;

    const newNode: Node<number> = {
      value,
    };

    if (!resultHead) {
      resultHead = newNode;
      resultTail = newNode;
    } else {
      resultTail!.next = newNode;
      resultTail = newNode;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  if (!l2) {
    while (l1) {
      let value = l1.value + (carry ? 1 : 0);
      carry = value > 9;
      value = value % 10;

      const newNode: Node<number> = {
        value,
      };

      if (!resultHead) {
        resultHead = newNode;
        resultTail = newNode;
      } else {
        resultTail!.next = newNode;
        resultTail = newNode;
      }
      l1 = l1.next;
    }
  }

  if (!l1) {
    while (l2) {
      let value = l2.value + (carry ? 1 : 0);
      carry = value > 9;
      value = value % 10;

      const newNode: Node<number> = {
        value,
      };

      if (!resultHead) {
        resultHead = newNode;
        resultTail = newNode;
      } else {
        resultTail!.next = newNode;
        resultTail = newNode;
      }
      l2 = l2.next;
    }
  }

  if (carry) {
    const newNode: Node<number> = {
      value: 1,
    };

    if (!resultHead) {
      resultHead = newNode;
      resultTail = newNode;
    } else {
      resultTail!.next = newNode;
      resultTail = newNode;
    }
  }

  return resultHead;
}
