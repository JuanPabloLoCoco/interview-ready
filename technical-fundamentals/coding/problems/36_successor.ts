// 6. *Successor*:

// Write an algorithm to find the "next" node
// (i.e., in-order successor) of a given node in a binary search tree.
// You may assume that each node has a link to its parent.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
  parent?: TreeNode<T>; // Link to parent node
};

export default function successor<T>(
  node: TreeNode<T>
): TreeNode<T> | undefined {
  if (node.right) {
    let pointer = node.right;
    while (pointer.left) {
      pointer = pointer.left;
    }
    return pointer;
  }

  // As I don't have right I have to ask if I am a left child or a right child
  if (!node.parent) {
    return undefined;
  }

  let pointer: TreeNode<T> | undefined = node;
  while (isRightChild(pointer)) {
    pointer = pointer!.parent;
  }

  return pointer?.parent;
}

function isRightChild<T>(node: TreeNode<T> | undefined): boolean {
  if (!node || !node.parent) {
    return false;
  }
  return node.parent.right === node;
}
