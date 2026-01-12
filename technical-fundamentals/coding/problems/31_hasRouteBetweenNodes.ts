// 1. *Route Between Nodes*:

// Given a directed graph, design an algorithm to find out whether there is a route
// between two nodes.

export type GraphNode = {
  value: number;
  neighbors: GraphNode[];
};

export default function hasRouteBetweenNodes(
  start: GraphNode,
  end: GraphNode
): boolean {
  let visited: Set<number> = new Set();

  let toVisit = [start];
  while (toVisit.length > 0) {
    const value = toVisit.shift()!;
    if (value === end) {
      return true;
    }
    visited.add(value.value);
    for (const n of value.neighbors) {
      if (!visited.has(n.value)) {
        toVisit.push(n);
      }
    }
  }
  return false;
}
