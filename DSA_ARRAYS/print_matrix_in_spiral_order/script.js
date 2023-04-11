// Problem Description
// Given an integer A, generate a square matrix filled with elements from 1 to A*A in spiral order. The spiral order will be clockwise in nature starting from (0,0)

// Input format
// One line of input, containing a single integer A.

// Output format
// Print a 2-d matrix of size A x A satisfying the spiral order.

// Sample Input 1
// 3

// Sample Output 1
// 1 2 3

// 8 9 4

// 7 6 5

// Explanation
// As you can see the matrix goes spirally with each next position incremented by one.

// Constraints
// 1<=A<=1000

// input = 3

// 1 2 3
// 8 9 4
// 7 6 5

// input = 4

// 1  2  3  4
// 12 13 14 5
// 11 16 15 6
// 10 9  8  7

// function spiralMatrixII(n) {
//   let left = 0,
//     right = n - 1,
//     top = 0,
//     bottom = n - 1;
//   let num = 1;
//   // create 2d array
//   let arr = new Array(n);
//   for (let i = 0; i < n; i++) {
//     arr[i] = new Array(n);
//   }

//   while (num <= n * n) {
//     for (let i = left; i <= right; i++) {
//       arr[top][i] = num++;
//     }
//     top++;

//     for (let i = top; i <= bottom; i++) {
//       arr[i][right] = num++;
//     }
//     right--;

//     for (let i = right; i >= left; i--) {
//       arr[bottom][i] = num++;
//     }
//     bottom--;

//     for (let i = bottom; i >= top; i--) {
//       arr[i][left] = num++;
//     }
//     left++;
//   }
//   return arr;
// }

function spiralMatrixII(n) {
  // (0,0) (0,1) (0,2) (0,3)
  // (1,0) (1,1) (1,2) (1,3)
  // (2,0) (2,1) (2,2) (2,3)
  // (3,0) (3,1) (3,2) (3,3)

  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  let num = 1;

  // create 2d array

  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
  }

  while (num <= n * n) {
    for (let i = left; i <= right; i++) {
      arr[top][i] = num++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      arr[i][right] = num++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      arr[bottom][i] = num++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      arr[i][left] = num++;
    }
    left++;
  }

  return arr;
}
console.log(spiralMatrixII(4));
