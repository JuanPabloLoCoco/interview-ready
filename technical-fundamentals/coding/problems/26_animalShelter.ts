// 6. *Animal Shelter*:

import { LinkedList } from "./10_LinkedList";

// An animal shelter, which holds only dogs and cats, operates on a strictly
// "first in, first out" basis. People must adopt either the "oldest"
// (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat
// (and will receive the oldest animal of that type).
// They cannot select which specific animal they would like.
// Create the data structures to maintain this system and implement operations
// such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
// You may use the built-in LinkedList data structure.

export type AnimalType = "dog" | "cat";

export class Animal {
  type: AnimalType;
  next: Animal | undefined;
  order: number;
  constructor(type: AnimalType, order: number) {
    this.type = type;
    this.order = order;
  }
}

export default class AnimalShelter {
  catLL: LinkedList<Animal>;
  dogLL: LinkedList<Animal>;
  order: number;

  constructor() {
    this.catLL = new LinkedList();
    this.dogLL = new LinkedList();
    this.order = 0;
  }

  enqueue(type: AnimalType): void {
    const animal = new Animal(type, this.order);
    if (type === "dog") {
      this.dogLL.push(animal);
    } else {
      this.catLL.push(animal);
    }
    this.order++;
  }

  dequeueAny(): Animal | undefined {
    const nextCat = this.catLL.peek();
    const nextDog = this.dogLL.peek();

    if (!nextCat) {
      return this.dogLL.dequeue();
    }

    if (!nextDog) {
      return this.catLL.dequeue();
    }

    if (nextCat.order > nextDog.order) {
      return this.dogLL.dequeue();
    }
    return this.catLL.dequeue();
  }

  dequeueDog(): Animal | undefined {
    return this.dogLL.dequeue();
  }

  dequeueCat(): Animal | undefined {
    return this.catLL.dequeue();
  }
}
