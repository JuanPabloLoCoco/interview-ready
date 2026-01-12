// Write the basic tree algorithms of Depth-first-search and Breadth-first search.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export class Tree<T> {
  bfs(node: TreeNode<T> | undefined, visit: (node: TreeNode<T>) => void) {
    if (!node) {
      return;
    }
    const toVisit: Array<TreeNode<T>> = [node];

    while (toVisit.length > 0) {
      const value = toVisit.shift();
      if (!value) {
        throw new Error("Invalid case");
      }
      if (value.left) {
        toVisit.push(value.left);
      }
      if (value.right) {
        toVisit.push(value.right);
      }
      visit(value);
    }
  }

  dfs(node: TreeNode<T> | undefined, visit: (node: TreeNode<T>) => void) {
    if (!node) {
      return;
    }
    const toVisit: Array<TreeNode<T>> = [node];
    while (toVisit.length > 0) {
      const value = toVisit.shift();

      if (!value) {
        throw new Error("Invalid case");
      }

      if (value?.right) {
        toVisit.unshift(value.right);
      }

      if (value?.left) {
        toVisit.unshift(value.left);
      }

      visit(value);
    }
  }
}
