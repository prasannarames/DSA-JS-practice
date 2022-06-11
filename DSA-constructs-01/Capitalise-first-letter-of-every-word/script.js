// Problem Description
// Given a paragraph of words, capitalise the first character of each word and return the updated paragraph.

// Note : No inbuilt function such as split() to be used.

// Input format
// One line of input which contains a string, the paragraph.

// Output format
// Return the paragraph after capitalising each word.

// Sample Input 1
// the quick Brown fox jumps over The lazy dog.

// Sample Output 1
// The Quick Brown Fox Jumps Over The Lazy Dog.

// Constraints
// Length of paragraph < 100

// The paragraph contains spaces, lowercase, uppercase characters and ‘.’.




function capitalise(paragraph) {
let ans = "";

  for(let i=0; i<paragraph.length; i++){
    if((i==0 &&(paragraph[i] >= "a" && paragraph[i] <= "z"))||(i>0 && paragraph[i-1] == " " && paragraph[i]>= "a" && paragraph[i]<= "z"))
    {
      ans+= String.fromCharCode(paragraph[i].charCodeAt(0) - 'a'.charCodeAt(0) + 'A'.charCodeAt(0) )
       
    }
    else 
      ans += paragraph[i];
  }

  return ans;
  
}

console.log(capitalise("the quick Brown fox jumps over The lazy dog."))