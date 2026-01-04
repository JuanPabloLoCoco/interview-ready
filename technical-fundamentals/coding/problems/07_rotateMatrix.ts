// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][];

export default function rotateMatrix(matrix: Matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = r + 1; c < matrix.length; c++) {
      const temp = matrix[r][c];
      matrix[r][c] = matrix[c][r];
      matrix[c][r] = temp;
    }
  }

  matrix.forEach((row) => row.reverse());
  return matrix;
}
