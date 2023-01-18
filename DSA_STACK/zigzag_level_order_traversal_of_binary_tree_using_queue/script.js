// Problem Description
// Given a binary tree, return the zigzag level order traversal of its nodes' values.

// (i.e. from left to right, then right to left for the next level and alternate for every level).



// Input format
// Line 1 has the number of test cases (T)

// Line 2 to X: First Test Case details with the binary tree structure (refer section below for the format)

// Line X+1 to Y: Second Test case details and so on.

// Output format
// For each test case, print K lines, where K is the height of the tree. In each line print the values of the zigzag traversed node values.

// Constraints
// 1 <= T <= 1000

// 1 <= Number of nodes in a Tree <= 10000

// 0 <= Value of each node <= 10^9

// It's guaranteed that the sum of the number of tree nodes across all test cases will be less than 500000.

// Sample Input 1
// 1

// 5

// 5 1 4 3 6

// 1 2 3

// 2 -1 -1

// 3 4 5

// 4 -1 -1

// 5 -1 -1

// Sample Output 1
// 5

// 4 1

// 3 6

// const TreeNode = require('../crio/javascript/ds/TreeNode/TreeNode');
// /*
// Definition for TreeNode
// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//         this.next =null;
//         this.parent = null;
//     }
// }
// */

function zigzagLevelOrder(root) {

    // Edge case: when root node is empty
    if (!root) return [];
    
    // Initialize
    let result = [];
    let queue = [root];
    let level = 1;
    
    while (queue[0]) {
        let size = queue.length;
        let arr = [];
        
        while (size--) {
            let node = queue.shift(); // dequeue
            
            level % 2 ? arr.push(node.val) : arr.unshift(node.val);
            
            node.left && queue.push(node.left); // enqueue
            node.right && queue.push(node.right); // enqueue
        }
        
        result.push(arr);
        level++;
    }
    
    return result;
}
    
// module.exports = zigzagLevelOrder;
// /* 
//   Crio Methodology
  
//   Milestone 1: Understand the problem clearly
//   1. Ask questions & clarify the problem statement clearly.
//   2. *Type down* an example or two to confirm your understanding of the input/output & extend it to test cases
  
//   Milestone 2: Finalize approach & execution plan
//   1. Understand what type of problem you are solving.
//        a. Obvious logic, tests ability to convert logic to code
//        b. Figuring out logic
//        c. Knowledge of specific domain or concepts
//        d. Knowledge of specific algorithm
//        e. Mapping real world into abstract concepts/data structures
//   2. Brainstorm multiple ways to solve the problem and pick one
//   3. Get to a point where you can explain your approach to a 10 year old
//   4. Take a stab at the high-level logic & *type it down*.
//   5. Try to offload processing to functions & keeping your main code small.
  
//   Milestone 3: Code by expanding your pseudocode
//   1. Have frequent runs of your code, dont wait for the end
//   2. Make sure you name the variables, functions clearly.
//   3. Avoid constants in your code unless necessary; go for generic functions, you can use examples for your thinking though.
//   4. Use libraries as much as possible
  
//   Milestone 4: Prove to the interviewer that your code works with unit tests
//   1. Make sure you check boundary conditions
//   2. Time & storage complexity
//   3. Suggest optimizations if applicable
//   */


