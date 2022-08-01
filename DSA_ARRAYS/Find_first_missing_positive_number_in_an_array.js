//  Problem Description
// Given an unsorted array of integers, find the smallest missing positive integer. The space complexity need not be O(1), you can also implement a O(N) space complexity solution.

// Input format
// There are 2 lines of input.

// First line contains 1 integer N - Number of elements in the array.

// Second line contains space separated N integers.

// Output format
// Print the smallest missing positive integer.

// Sample Input 1
// 4

// 3 4 -1 1

// Sample Output 1
// 2

// Explanation 1
// 2 is the smallest positive integer which is missing as 1 is already present in the array. Note that 0 will not be considered as positive.

// Constraints
// N <= 200000

// -2 ^ 31 <= Range of values <= 2 ^ 31 - 1

function firstMissingPositive(n, arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let res = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      if (arr[i] == res) res++;
      else break;
    }
  }
  return res;
}

console.log(firstMissingPositive(4, [3, 4, -1, 1]));
