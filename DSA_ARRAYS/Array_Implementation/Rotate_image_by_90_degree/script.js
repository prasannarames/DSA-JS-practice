// Problem Description
// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.

// DO NOT allocate another 2D matrix and do the rotation.

// Input format
// There are N+1 lines of input.

// First line contains one integer N.

// Next N line contains N space separated integers

// Output format
// Print the NxN rotated matrix.

// Sample Input 1
// 3

// 1 2 3

// 4 5 6

// 7 8 9

// Sample Output 1
// 7 4 1

// 8 5 2

// 9 6 3

// Sample Input 2
// 4

// 5 1 9 11

// 2 4 8 10

// 13 3 6 7

// 15 14 12 16

// Sample Output 2
// 15 13 2 5

// 14 3 4 1

// 12 6 8 9

// 16 7 10 11

// Constraints
// 1 <= n <= 100


// JAVA code for the problem
 
// public class RotateImage {
//     public void rotateImage(int[][] matrix) {
//         int n = matrix.length;
//           for (int i = 0; i < n; i++) {
//         for (int j = i; j < n; j++) {
//             int temp = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             matrix[j][i] = temp;
//         }
//     }

//     for (int i = 0; i < n; i++) {
//         for (int j = 0; j < n/2; j++) {
//             int temp = matrix[i][j];
//             matrix[i][j] = matrix[i][n - 1 - j];
//             matrix[i][n - 1 - j] = temp;

//         }
//     }
    
//     }