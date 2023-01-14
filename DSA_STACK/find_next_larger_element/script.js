// Given an array A having N elements, the task is to find the next greater element(NGE) for each element of the array in order of their appearance in the array. If no such element exists, output -1. This should be achieved with a time complexity of O(n).

// Input format
// There are 2 lines of input

// The first line contains an integer N denoting the size of the array.

// The second line contains N space separated positive integers denoting the values in the array A.

// Output format
// Print N space separated integers, which are the next greater element for each array element. If no such greater element exists for any element, output -1

// Function definition
// You have to implement the given function. It accepts the original array as an argument, and returns the new next greater element array.

// Constraints
// 1 <= N <= 10^5

// 0 <= Values in the array <= 10^9

// Sample Input 1
// 4

// 1 3 2 4

// Sample Output 1
// 3 4 4 -1

// Explanation 1
// In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4, there is no such greater element, hence -1.

function nextLargerElement(n, arr) {

    let stack = [];

    for (let i = 0; i < n; i++) {
        while (!stack.length == 0 && arr[stack[stack.length - 1]] < arr[i]) {
            let pe = stack.pop()
            arr[pe] = arr[i]
        }
        stack.push(i)
    }

    while(!stack.length == 0) {
        let pe = stack.pop()
        arr[pe] = -1
    }

    return arr
}