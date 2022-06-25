// Problem Description
// A school has following rules for grading system:

// [0, 25) - F

// [25, 45) - E

// [45, 50) - D

// [50, 60) - C

// [60, 80) - B

// [80, 100] - A

// If the input is less than 0 or greater than 100 then it is considered invalid.

// You are given a real number score, print the corresponding grade or "Invalid" if the input is invalid.

// Input format
// First line contains a real number - The score.

// Output format
// Print the corresponding grade or "Invalid" if the input is invalid.

// Sample Input 1
// 83.5

// Sample Output 1
// A

// Sample Input 2
// 42

// Sample Output 2
// E

// Constraints
// Score can be any real number.

function gradingSystem(score) {
    if (score >= 80) {
        return ("A")
    } else if (score<80 && score >= 60) {
        return ("B")
    } else if (score < 60 && score >=50) {
        return ("C")
    } else if (score < 50 && score >= 45) {
        return ("D")
    } else if (score < 45 && score >= 25) {
        return ("E")
    } else if (score < 25 && score >=0) {
        return ("F")
    } else if (score < 0 ||  score >= 100) {
        return ("Invalid")
    }
}

console.log(gradingSystem(78))