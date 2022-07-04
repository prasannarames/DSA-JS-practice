// Problem Description
// Find the sum of the series 1 x 3 + 3 x 5 + 5 x 7 + ... upto n terms.

// Input format
// One line of input, containing an integer - n.

// Output format
// Print the sum of the series.

// Sample Input 1
// 3

// Sample Output 1
// 53

// Explanation 1
// Expanding the first 3 terms: 1 x 3 + 3 x 5 + 5 x 7 = 3 + 15 + 35 = 53

// Constraints
// 0 < n < 100

function seriesSumI(n) {
    let ans = 0;

    for(let i=1; i<=n; i++){
        let x = 2 * i;
        ans = ans + (x - 1) * (x + 1);
    }
    return ans;
}
console.log(seriesSumI(3))