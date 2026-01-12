// 4. *Check Balanced*:

// Implement a function to check if a binary tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree
// such that the heights of the two subtrees of any node never differ by more than one.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

interface Result {
  depth: number;
  isBalanced: boolean;
}

export default function checkBalanced<T>(tree?: TreeNode<T> | null): boolean {
  return isBalanced(tree).isBalanced;
}

function isBalanced<T>(tree?: TreeNode<T> | null): Result {
  if (!tree) {
    return {
      depth: 0,
      isBalanced: true,
    };
  }

  const leftResult: Result = isBalanced(tree.left);
  if (!leftResult.isBalanced) {
    return leftResult;
  }

  const rightResult: Result = isBalanced(tree.right);
  if (!rightResult.isBalanced) {
    return rightResult;
  }

  const balanced = Math.abs(leftResult.depth - rightResult.depth) <= 1;
  return {
    isBalanced: balanced,
    depth: Math.max(leftResult.depth, rightResult.depth) + 1,
  };
}
