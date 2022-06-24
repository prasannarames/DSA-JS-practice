// Problem Description
// Given a number N, you have to print all the odd numbers upto N in increasing order.

// Input format
// One line of input, containing an integer - N.

// Output format
// Print the numbers space-separated in a single line in increasing order.

// Sample Input 1
// 5

// Sample Output 1
// 1 3 5

// Constraints
// 1 <= N <= 100

function oddNumbers(N) {
  let arrList = [];
  for (let i = 1; i <= N; i++) {
    if (i % 2 != 0) {
      arrList.push(i);
    }
  }
  return arrList;
}
