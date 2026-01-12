// 5. *Validate BST*:

// Implement a function to check if a binary tree is a binary search tree.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function validateBST<T>(node: TreeNode<T> | undefined): boolean {
  return isValidBST(node, undefined, undefined);
}

function isValidBST<T>(
  node: TreeNode<T> | undefined,
  min: T | undefined,
  max: T | undefined
): boolean {
  if (!node) {
    return true;
  }
  if (min && min > node.value) {
    return false;
  }

  if (max && max < node.value) {
    return false;
  }

  return (
    isValidBST(node.left, min, node.value) &&
    isValidBST(node.right, node.value, max)
  );
}
