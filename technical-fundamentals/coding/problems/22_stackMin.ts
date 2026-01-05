// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

interface Node<T> {
  value: T;
  minValue: T;
  next?: Node<T>;
}

export default class StackMin<T> {
  head: Node<T> | undefined;

  constructor() {
    this.head = undefined;
  }

  push(value: T): void {
    const newNode: Node<T> = {
      value,
      // @ts-ignore
      minValue: this.head ? Math.min(this.head.minValue, value) : value,
    };

    if (this.head) {
      newNode.next = this.head;
    }

    this.head = newNode;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  min(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    return this.head.minValue;
  }
}
