// 4. *Queue via Stacks*:

// Implement a MyQueue class which implements a queue using two stacks.

class Node<T> {
  value: T;
  next: Node<T> | undefined;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}

class Stack<T> {
  size: number;
  head: Node<T> | undefined;
  constructor() {
    this.size = 0;
    this.head = undefined;
  }

  push(value: T): void {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    const ans = this.head.value;
    this.head = this.head.next;
    this.size--;
    return ans;
  }

  isEmpty(): boolean {
    return !this.head;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

export default class MyQueue<T> {
  stack1: Stack<T>;
  stack2: Stack<T>;

  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value: T): void {
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop()!);
    }

    this.stack1.push(value);
  }

  dequeue(): T | undefined {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop()!);
    }

    return this.stack2.pop();
  }

  peek(): T | undefined {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop()!);
    }
    return this.stack2.peek();
  }

  isEmpty(): boolean {
    return this.stack1.isEmpty() && this.stack2.isEmpty();
  }
}
