// Problem Description
// Given 2 integers x and n, you have to calculate x to the power of n, modulo 10^9+7 i.e. calculate (x^n) % (10^9+7).

// In other words, you have to find the value when x is raised to the power of n, and then modulo is taken with 10^9+7.

// a%b means the remainder when a divides b. For instance, 5%3 = 2, as when we divide 5 by 3, 2 is the remainder.

// Note that 10^9 is also represented as 1e9.

// Input format
// One line of input containing two space separated integers, x and n.

// Output format
// Print the required answer.

// Sample Input 1
// 100000000 2

// Sample Output 1
// 930000007

// Explanation 1
// (10^8)^2 = 10^16

// 10^16 % (10^9+7) = 930000007

// Constraints
// 0 <= x < 10^9

// 0 <= n < 10^5

function modularExponentiation(x, p) {
  let con = BigInt(1000000007);
  let val = BigInt(x);
  let res = BigInt(1);

  while (p > 0) {
    if (p % 2 === 1) {
      res = (res * val) % con;
    }
    p = Math.floor(p / 2);
    val = BigInt((val * val) % con);
  }
  return res.toString();
}
