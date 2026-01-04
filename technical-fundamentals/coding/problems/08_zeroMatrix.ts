// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][];

export default function zeroMatrix(matrix: Matrix) {
  let emptyRows = new Set<number>();
  let emptyCols = new Set<number>();
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 0) {
        emptyCols.add(c);
        emptyRows.add(r);
      }
    }
  }

  emptyCols.forEach((c) => {
    for (let r = 0; r < matrix.length; r++) {
      matrix[r][c] = 0;
    }
  });

  emptyRows.forEach((r) => {
    for (let c = 0; c < matrix[r].length; c++) {
      matrix[r][c] = 0;
    }
  });

  return matrix;
}
