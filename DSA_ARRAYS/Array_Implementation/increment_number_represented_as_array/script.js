// Problem Description
// Given a number represented as an array of digits, increment the number by 1, and return the resulting sum as an array.

// Input format
// There are two lines of input.

// First line will contain a single integer N .

// Next line will contain N space separated integers for Array A.

// Output format
// Single integer which will be the incremented number.

// Sample Input 1
// 3

// 1 1 1

// Sample Output 1
// 112

// Explanation
// 111 + 1 = 112

// Constraints
// 0<=Ai<10

// Most significant value will be non-zero in the array.

// 1<=N<=5000

function incrementNumber(N, A) {
    A[N - 1] += 1;

    let carry = parseInt(A[N - 1] / 10);
    A[N - 1] = A[N - 1] % 10;

    for (let i = N - 2; i >= 0; i--) {
        if (carry == 1) {
            A[i] += 1;
            carry = parseInt(A[i] / 10)
            A[i] = A[i] % 10;
        }
    }
    if (carry == 1)
        A.unshift(1);
    return A;
}

incrementNumber(3, [1, 1, 1])