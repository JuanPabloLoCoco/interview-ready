// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;

  constructor(head?: Node<T>) {
    this.head = head;
    this.tail = head;
    this.length = head ? 1 : 0;
    while (this.tail?.next) {
      this.tail = this.tail.next;
      this.length++;
    }
  }

  push(value: T) {
    const newNode: Node<T> = {
      value,
    };
    this.length++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail!.next = newNode;
    this.tail = newNode;
  }

  filter(cond: (v: Node<T>, index: number) => boolean): LinkedList<T> {
    let pointer = this.head;
    const newList = new LinkedList<T>();

    let index = 0;

    while (pointer) {
      if (cond(pointer, index)) {
        newList.push(pointer.value);
      }
      pointer = pointer.next;
      index++;
    }
    return newList;
  }
  visit(cond: (v: Node<T>, index: number) => void) {
    let pointer = this.head;
    let index = 0;
    while (pointer) {
      cond(pointer, index);
      pointer = pointer.next;
      index++;
    }
  }
  remove() {}
  merge(o: LinkedList<T>) {
    // If other list is empty we return
    if (!o.head) {
      return;
    }
    if (!this.head) {
      this.head = o.head;
      this.tail = o.tail;
      this.length = o.length;
      return;
    }

    this.tail!.next = o.head;
    this.tail = o.tail;
    this.length += o.length;
  }
  print() {
    let values = [];
    let p = this.head;
    while (p) {
      values.push(p.value);
      p = p.next;
    }
    console.log(values.join(" -> "));
  }

  // extra

  //find(): Node<T> {}
  get(index: number): Node<T> {
    let i = 0;
    let pointer = this.head;

    if (index >= this.length) {
      throw new Error("Index out of bound");
    }

    while (i < index) {
      pointer = pointer?.next;
      i++;
    }
    return pointer!;
  }
  //iterator(): LinkedListIterator {}
  length: number;
}

const list = new LinkedList();
