// Problem Description
// Given a string, you have to rearrange the characters of the string in the given order. A reordering of characters of a string is called a permutation of the string.

// The order is in the form of an integer array with size same as that of string, in which each integer specifies the new position of the character currently present at that particular place.

// For eg. consider the string "abcd" and permutation [2,4,3,1], then the new string will be "dacb".

// Input format
// There are three lines of input.

// First line contains an integer n - The length of string.

// Second line contains the string

// Third line contains n space separated integers - the new order.

// Output format
// Print the new string after applying the permutation.

// Sample Input 1
// 4

// abcd

// 2 4 3 1

// Sample Output 1
// dacb

// Explanation 1
// According to the permutation 'a' goes to position 2, 'b' to 4, 'c' to 3, 'd' to 1. So we get the new string as "dacb".

// Constraints
// 0 < n < 100

// 1 <= a[i] <= n

// Where a[i] refers to each element of the order array a.

function stringPermutation(n, s, arr) {
    let newArray = new Array(n)

    for(let i=0; i<n; i++){
        newArray[arr[i]-1] = s[i]
    }
    return newArray.join("")

}

console.log(stringPermutation(4, "abcd", [2, 4, 3, 1 ]))