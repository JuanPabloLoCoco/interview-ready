// 4. *Palindrome Permutation*:

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation(str: string): boolean {
  let dict: Record<string, number> = {};
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let char of normalizedStr) {
    dict[char] = (dict[char] || 0) + 1;
  }

  const keys = Object.keys(dict);
  let keysWithOddCount = 0;
  for (let i = 0; i < keys.length; i++) {
    const count = dict[keys[i]];
    if (count % 2 === 1) {
      keysWithOddCount++;
      if (keysWithOddCount > 1) {
        return false;
      }
    }
  }
  return true;
}
