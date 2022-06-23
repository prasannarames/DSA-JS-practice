// method 1
//     function additionOfMatrix(matrix1, matrix2){
//     for (let i = 0; i < matrix1.length; i++) {
//         for (let j = 0; j < matrix2[0].length; j++) {
//              matrix1[i][j] += matrix2[i][j];
//         }
//         return matrix1;
//     }
// }

// additionOfMatrix([[1, 2][3, 4]] [[1, 1][1, 1]])

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
