// Problem Description
// Given a number, return the reverse of that number.

// Input format
// One line of input containing an integer N, the number to be reversed.

// Output format
// Return the reversed number. Note that the number must start with (1-9) digits only unless it is a single digit number.

// Sample Input 1
// 15

// Sample Output 1
// 51

// Constraints
// 0 <= N <= 1000000

// Explanation
// Reverse of 15 is 51.


function reverseNum(n) {

    let rev = 0;

    while(n > 0){
        rev = rev * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return rev;
}
reverseNum(15);