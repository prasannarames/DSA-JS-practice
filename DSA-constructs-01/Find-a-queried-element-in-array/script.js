// Problem Description
// Given a sorted array containing n elements and q queries. Each query is an integer x. Find the index at which x is present in the array. If there are multiple occurrences then find the leftmost one. If x is not present, return -1.

// Note : No inbuilt functions such as ( upperbound , lowerbound , etc. ) to be used.

// Input format
// There are q+3 lines of input.

// First line contains the integer n.

// Second line contains n space separated integers representing the array elements.

// Third line contains the value of q.

// Next q line contains the integer x.

// Output format
// In each query an integer representing the index of x in the array.

// Sample Input 1
// 5

// 1 2 9 9 10

// 4

// 9

// 1

// 3

// 10

// Sample Output 1
// 2

// 0

// -1

// 4

// Explanation 1
// 1 is present at 0 and 4 indexes and the leftmost index is 0.

// 3 is not present.

// 10 is at 4th index.

// Constraints
// 1 <= n <= 100000

// 1 <= q <= 100000

// 0 <= x <= 10^9



function findElementQuery(n, arr, x) {
    let val = -1;
    let low = 0, high = n - 1, mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] > x)
            high = mid - 1;
        else if (arr[mid] < x)
            low = mid + 1;
        else {
            val = mid;
            high = mid - 1;
        }
    }
    return val;
}

let n = 5;
let arr =[1, 2, 9, 9, 10];
let x = [9, 1, 3, 10];

console.log(findElementQuery(n, arr, x))