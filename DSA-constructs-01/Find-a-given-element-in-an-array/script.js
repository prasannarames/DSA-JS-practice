// Problem Description
// Given an array of n elements and an integer x,find the index where x is present in the array. If there are multiple occurrences, find the leftmost one. If x is not present, return -1.

// Input format
// There are three lines of input.

// First line contains integer n.

// Second line contains n space separated integers representing the array.

// Third line contains the value of x.

// Output format
// An integer representing the index of x in the array.

// Sample Input 1
// 5

// 1 3 4 2 1

// 1

// Sample Output 1
// 0

// Explanation 1
// 1 is present at 0 and 4 indexes and the leftmost index is 0.

// Constraints
// 1 <= n <= 100000

// 0 <= x <= 10^9

function findElement(n, arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) return i;
  }
  return -1;
}

let n = 5;
let arr = [1, 3, 4, 2, 1];
let x = 4;

console.log(findElement(n, arr, x));
