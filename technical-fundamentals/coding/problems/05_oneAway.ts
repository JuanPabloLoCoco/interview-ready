// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
  let p1 = 0;
  let p2 = 0;
  let diff = 0;

  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  while (p1 < str1.length && p2 < str2.length) {
    const c1 = str1[p1];
    const c2 = str2[p2];

    // If no diff, we move both pointers
    if (c1 === c2) {
      p1++;
      p2++;
      continue;
    }
    diff++;
    if (diff > 1) {
      return false;
    }

    // If the length is the same is a replace
    if (str1.length === str2.length) {
      p1++;
      p2++;
      continue;
    }

    // If str1 is larger than str2 we move p1, else p2
    if (str1.length > str2.length) {
      p1++;
      continue;
    }
    p2++;
  }
  return true;
}
