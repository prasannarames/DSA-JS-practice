// Problem Description
// Given a number n, you have to find the count of the numbers from 1 to n that are coprime to n.

// Input format
// One line of input, containing an integer n - the given number.

// Output format
// Print the total count of coprime numbers.

// Sample Input 1
// 9

// Sample Output 1
// 6

// Explanation 1
// Numbers coprime to 9 are: 1, 2, 4, 5, 7, 8

// Constraints
// 1 <= n <= 1000

function findGCD(a, b) {
    // base rule
    if (a === 0)
      return b;
    if (b === 0)
      return a;
  
    //recursive rule
      return findGCD(b, a % b)
  }
  
  
  function coprimeNumbers(n) {
    let result = 0;
  
    for (let i = 1; i <= n; ++i) {
      if (findGCD(n, i) == 1)
        result++;
      
    }
    return result
  }

  console.log(coprimeNumbers(9))