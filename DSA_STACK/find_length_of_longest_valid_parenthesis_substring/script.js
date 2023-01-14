// Given a string S containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Input format
// First line contains a string - The string S.

// Output format
// Print the length of the longest valid substring.

// Sample Input 1
// ()(()(())

// Sample Output 1
// 6

// Explanation
// The last 6 characters of the string forms the longest valid substring i.e. "()(())".

function longestValidParentheses(s) {

    let stack = []
    stack.push(-1)
    let maxValidLen = 0

    for(let i=0; i<s.length; i++){
        let c = s.charAt(i)
        if(c=='(') {
            stack.push(i)
        }
        else {
            if(stack.length > 1){
                stack.pop()
                maxValidLen = Math.max(maxValidLen, i-stack[stack.length-1])
            } else {
                stack.pop()
                stack.push(i)
            }
        }
    }
    return maxValidLen

}