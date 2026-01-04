// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression(str: string): string {
  let l = 0;
  let r = 1;
  let res = "";
  if (str.length === 0) {
    return str;
  }

  while (r < str.length) {
    if (str[l] === str[r]) {
      r++;
      continue;
    }

    const count = r - l;
    if (count > 0) {
      res += str[l] + count;
    }
    l = r;
    r++;
  }
  const count = r - l;
  if (count > 0) {
    res += str[l] + count;
  }
  return res.length < str.length ? res : str;
}
