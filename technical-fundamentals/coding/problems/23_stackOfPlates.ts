// 3. *Stack of Plates*:

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values as it would if
// there were just a single stack).

// FOLLOW UP: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

class Node<T> {
  value: T;
  next: Node<T> | undefined;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}
class Stack<T> {
  head: Node<T> | undefined;
  size: number;
  next: Stack<T> | undefined;

  constructor() {
    this.head = undefined;
    this.size = 0;
    this.next = undefined;
  }

  push(value: T) {
    const newNode = new Node(value);
    if (this.head) {
      newNode.next = this.head;
    }

    this.head = newNode;
    this.size++;
  }
  pop(): T | undefined {
    if (this.size === 0 || !this.head) {
      return undefined;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
}

export default class StackOfPlates<T> {
  size: number;
  head: Stack<T> | undefined;
  capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  push(value: T): void {
    if (!this.head) {
      const newStack = new Stack<T>();
      newStack.push(value);
      this.head = newStack;
      return;
    }

    if (this.head.size === this.capacity) {
      const newStack = new Stack<T>();
      newStack.push(value);

      newStack.next = this.head;
      this.head = newStack;
      this.size++;
      return;
    }

    this.head.push(value);
  }

  pop(): T | undefined {
    while (this.head && this.head.size === 0) {
      this.head = this.head?.next;
    }

    if (!this.head) {
      return undefined;
    }

    const value = this.head.pop();
    return value;
  }
}
