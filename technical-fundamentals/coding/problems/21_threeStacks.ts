// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

export default class ThreeStacks<T> {
  private array: T[];
  private arrayLen: [number, number, number];
  private arrLen: number;

  constructor(arrayLength: number) {
    this.array = [];
    this.arrLen = arrayLength;
    this.arrayLen = [0, 0, 0];
  }

  push(stackNum: number, value: T): void {
    this.array[this.arrLen * stackNum + this.arrayLen[stackNum]] = value;
    this.arrayLen[stackNum]++;
  }

  pop(stackNum: number): T | undefined {
    if (this.arrayLen[stackNum] === 0) {
      return undefined;
    }
    this.arrayLen[stackNum]--;
    return this.array[this.arrLen * stackNum + this.arrayLen[stackNum]];
  }

  peek(stackNum: number): T | undefined {
    if (this.arrayLen[stackNum] === 0) {
      return undefined;
    }

    return this.array[this.arrLen * stackNum + this.arrayLen[stackNum] - 1];
  }
}
