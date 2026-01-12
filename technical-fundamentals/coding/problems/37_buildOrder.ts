// 7. *Build Order*:

// You are given a list of projects and a list of dependencies
// (which is a list of pairs of projects, where the second project is
// dependent on the first project). All of a project's dependencies
// must be built before the project is. Find a build order that will allow
// the projects to be built. If there is no valid build order, return an error.

// ```
// EXAMPLE Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// Output: e, f, a, b, d, c
// ```

export default function buildOrder(
  projects: string[],
  dependencies: string[][]
): string[] | string {
  let dependenciesDic: Record<string, string[]> = {};
  let ans: Array<string> = [];

  for (let dep of dependencies) {
    const pr = dep[1];
    if (!dependenciesDic[pr]) {
      dependenciesDic[pr] = [];
    }
    dependenciesDic[pr].push(dep[0]);
  }

  let itemsToAdd = projects.filter((p) => !dependenciesDic[p]);
  let addedItems: Set<string> = new Set();

  while (ans.length < projects.length) {
    if (itemsToAdd.length === 0) {
      throw new Error("No valid build order exists");
    }
    itemsToAdd.forEach((p) => {
      ans.push(p);
      addedItems.add(p);
    });
    itemsToAdd = projects.filter(
      (p) =>
        !addedItems.has(p) &&
        dependenciesDic[p].every((ip) => addedItems.has(ip))
    );
  }
  return ans;
}
