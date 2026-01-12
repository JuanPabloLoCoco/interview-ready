// 3. *List of Depths*:

// Given a binary tree, design an algorithm which creates a linked list
// of all the nodes at each depth (e.g., if you have a tree with depth D,
// you'll have D linked lists).

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export type ListNode<T> = {
  value: T;
  next?: ListNode<T>;
};

export default function listOfDepths<T>(
  root: TreeNode<T> | null
): ListNode<T>[] {
  if (!root) {
    return [];
  }
  const ans: Array<ListNode<T>> = [];

  let currList = [];
  let nextList = [root];
  while (nextList.length > 0) {
    currList = nextList;
    nextList = [];
    let head: ListNode<T> | undefined = undefined;
    let tail: ListNode<T> | undefined = undefined;

    while (currList.length > 0) {
      const val = currList.shift();
      if (!val) {
        throw new Error("Invalid node");
      }

      if (val.left) {
        nextList.push(val.left);
      }

      if (val.right) {
        nextList.push(val.right);
      }

      const newNode: ListNode<T> = {
        value: val.value,
      };

      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail!.next = newNode;
        tail = newNode;
      }
    }
    ans.push(head!);
  }
  return ans;
}
