// Problem Description
// Given the heights of n students of a class, find the average height. Your answer should be accurate upto 5 decimal places.

// Input format
// There are two lines of input.

// First line contains an integer n,the number of students.

// Second line contains n space-separated decimal numbers - The array with the heights of the students.

// Output format
// Print the average height.

// Sample Input 1
// 6

// 2.2 1 3 1.9 2.4 1.7

// Sample Output 1
// 2.033333

// Explanation 1
// (2.2+1+3+1.9+2.4+1.7) / 6 = 12.2/6 = 2.03333

// Constraints
// 0 < n < 100

// 0 < height < 100

function averageHeight(n, arr) {
  let sumOfHeights = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfHeights += arr[i];
  }
  let avr = sumOfHeights / n;
  return avr;
}


console.log(averageHeight(6, [2.2, 1, 3, 1.9, 2.4, 1.7]));
