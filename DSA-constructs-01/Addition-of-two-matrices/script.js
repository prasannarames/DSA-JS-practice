// Problem Description
// Given two matrices of dimension n x m, add the two matrices and print the resultant matrix.

// Input format
// There are 2n+1 lines of input.

// First line contains two space separated integers n, m.

// In the next 2n lines, each line contains m elements. The first n lines are for the first matrix, next n for the second matrix.

// Output format
// Print the resultant matrix.

// Sample Input 1
// 2 2

// 1 2

// 3 4

// 1 1

// 1 1

// Sample Output 1
// 2 3

// 4 5

// Constraints
// 1 <= n,m <= 100

// 0 <= element of matrices <= 100000

// method 1
    function additionOfMatrix(matrix1, matrix2){
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix2[0].length; j++) {
             matrix1[i][j] += matrix2[i][j];
        }
        return matrix1;
    }
}

additionOfMatrix([[1, 2][3, 4]] [[1, 1][1, 1]])

// method 2

// let n = matrix1.length;
// let m = matrix2.length;

// let result = new Array(n);
// for (let i = 0; i < n; i++) {
//   result[i] = new Array(m);
// }

// for (let i = 0; i < matrix1.length; i++) {
//   for (let j = 0; j < matrix2.length; j++) {
//     result[i][j] = matrix1[i][j] + matrix2[i][j];
//   }
// }
// return result;
