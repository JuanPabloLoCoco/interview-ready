// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
  const charSet: Set<string> = new Set();
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}
