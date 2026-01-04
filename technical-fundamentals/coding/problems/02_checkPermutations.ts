// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }
  const dict: Record<string, number> = {};
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (!dict[char]) {
      dict[char] = 0;
    }
    dict[char]++;
  }

  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    if (dict[char] === undefined || dict[char] === 0) {
      return false;
    }
    dict[char]--;
  }
  return true;
}
