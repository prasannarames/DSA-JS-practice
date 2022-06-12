// Problem Description
// Given a matrix of dimensions n x n, find the sum of elements along the principal diagonal of the matrix.

// Principal diagonal is the diagonal that starts at top left(0,0),(1,1) and goes to the bottom right (n-1,n-1).

// Input format
// There are n+1 lines of input.

// First line contains integer n.

// In the next n lines each line contains n elements.

// Output format
// An integer representing the sum of diagonal elements.

// Sample Input 1
// 4

// 1 2 3 4

// 1 2 4 5

// 2 3 3 4

// 1 1 2 3

// Sample Output 1
// 9

// Constraints
// 1 <= n <= 100

// 0 <= element of matrix <= 10^5

function diagonalSum(n, matrix) {
  let primaryDiagonal = 0;
  for (let i = 0; i < n; i++) {
    primaryDiagonal += matrix[i][i];
  }
  return primaryDiagonal;
}

console.log(
  diagonalSum(4, [
    [1, 2, 3, 4],
    [1, 2, 4, 5],
    [2, 3, 3, 4],
    [1, 1, 2, 3],
  ])
);
