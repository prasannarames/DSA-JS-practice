// Problem Description
// Given a number n, you have to print a triangle-shaped pattern with n rows using '*'.

// For eg. if n = 4 pattern will be:

// image

// You will have to return an array of strings, with each element of the array representing one row of the pattern.

// Input format
// There is one line of input, containing an integer n, the number of rows.

// Output format
// Print the pattern as described.

// Sample Input 1
// 4

// Sample Output 1
// image

// Constraints
// 0 < n < 100

function patternPrintingI(n) {
    let str = "";
    let arr = [];
    
      for(let i=1; i<=n; i++){
        str = "";
        for(let j=1; j<=i; j++){
          str += " *";
          
        }
        arr.push(str);
      }
      return arr;
    }



console.log(patternPrintingI(4))