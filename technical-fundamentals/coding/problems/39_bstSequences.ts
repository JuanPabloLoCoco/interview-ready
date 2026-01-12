// 9. *BST Sequences*: A binary search tree was created by traversing through an array from left to right and inserting each element.
// Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

// ```
// EXAMPLE Input:
/*
            2
           / \
          1   3
*/
// Output: [[2, 1, 3], [2, 3, 1]]
// ```

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function bstSequences<T>(root: TreeNode<T>): T[][] {
  let result: Array<Array<T>> = [];

  if (!root) {
    result.push([]);
    return result;
  }

  const prefix = [];
  prefix.push(root.value);

  const leftSequences = bstSequences(root.left!);
  const rightSequences = bstSequences(root.right!);

  // console.log("left sequence");
  // console.log(leftSequences);

  // console.log("right sequence");
  // console.log(rightSequences);

  for (const left of leftSequences) {
    for (const right of rightSequences) {
      const weaved: T[][] = [];
      weavedList(left, right, weaved, prefix);
      weaved.forEach((w) => result.push(w));
    }
  }
  // console.log("result");
  // console.log(result.push());
  return result;
}

function weavedList<T>(
  list1: T[],
  list2: T[],
  results: T[][],
  prefix: T[]
): void {
  // console.log("List 1: ", list1);
  // console.log("List 2: ", list2);
  // console.log("Prefix: ", prefix);
  if (list1.length === 0 || list2.length === 0) {
    const result: T[] = [...prefix];
    list1.forEach((l) => result.push(l));
    list2.forEach((l) => result.push(l));
    results.push(result);
    return;
  }

  const headFirst = list1.shift()!;
  prefix.push(headFirst);
  weavedList(list1, list2, results, prefix);
  prefix.pop();
  list1.unshift(headFirst);

  const headSecond = list2.shift()!;
  prefix.push(headSecond);
  weavedList(list1, list2, results, prefix);
  prefix.pop();
  list2.unshift(headSecond);

  console.log(results);
}
