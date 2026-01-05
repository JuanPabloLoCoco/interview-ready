// 5. *Sort Stack*:

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

class Node<T> {
  value: T;
  next: Node<T> | undefined;
  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}

export default class SortStack<T> {
  size: number;
  head: Node<T> | undefined;

  constructor() {
    this.head = undefined;
    this.size = 0;
  }

  push(value: T): void {
    // console.log("Before pushing");
    // this.print();
    const newNode = new Node(value);
    this.size++;

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let pointer = this.head;
    if (pointer.value > value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    while (pointer.next) {
      if (pointer.value < value && pointer.next.value >= value) {
        newNode.next = pointer.next;
        pointer.next = newNode;
        return;
      }
      pointer = pointer.next;
    }
    pointer.next = newNode;
  }

  pop(): T | undefined {
    // console.log("Before poping");
    // this.print();
    if (!this.head) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  isEmpty(): boolean {
    return !this.head;
  }

  print(): void {
    const values: T[] = [];
    let pointer = this.head;
    while (pointer) {
      values.push(pointer.value);
      pointer = pointer.next;
    }

    console.log(values.join(" -> "));
  }
}
