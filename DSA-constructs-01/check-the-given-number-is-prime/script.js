// Problem Description
// Given a number, find if it is a prime number or not. This question may also be phrased in interviews as ‘check for primality’.

// Input format
// There are T+1 lines of input.

// First line will contain a number T, the number of test cases.

// Each of the next T lines contains an integer N.

// Output format
// In each line print "true" if it is a prime number otherwise "false". Ensure all lowercase to pass all tests.

// Sample Input 1
// 2

// 1

// 2

// Sample Output 1
// false

// true

// Constraints
// 1 <= T <= 10

// 0 <= N <= 500

// Explanation
// 1 is not a prime number whereas 2 is a prime.

function checkPrime(n) {
    if (n == 0 || n == 1) {
      return false;
    }
  
    for (let i = 2; i * i <= n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }

  console.log(checkPrime(5))