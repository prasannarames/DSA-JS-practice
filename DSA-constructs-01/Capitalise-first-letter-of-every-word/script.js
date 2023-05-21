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
//   // let ans = "";

//   //   for(let i=0; i<paragraph.length; i++){
//   //     if((i==0 &&(paragraph[i] >= "a" && paragraph[i] <= "z"))||(i>0 && paragraph[i-1] == " " && paragraph[i]>= "a" && paragraph[i]<= "z"))
//   //     {
//   //       ans+= String.fromCharCode(paragraph[i].charCodeAt(0) - 'a'.charCodeAt(0) + 'A'.charCodeAt(0) )

//   //     }
//   //     else
//   //       ans += paragraph[i];
//   //   }

//   //   return ans;

//   // other method with edge case failures
//   // let para = paragraph.split(" ");

//   // for (let i = 0; i < para.length; i++) {
//   //   para[i] = para[i][0].toUpperCase() + para[i].substring(1);
//   // }
//   // return para.join(" ");

 let str = paragraph.toLowerCase();
  // 1. create an empty string to store the capitalized answer.
  let ans = "";
  // 2. find the difference of ASCII values of the lowerCase and upperCase characters using charCodeAt(0)
  let diff = "a".charCodeAt(0) - "A".charCodeAt(0);
  // 3. loop through i to paragraph length
  for (let i = 0; i < str.length; i++) {
    // 3.1. check the first character of the each word.
    //       => con-1 is to get the first words first letter  
    //      (condition 1 => i == 0 && para[i] >= "a" && para[i]<= "z") ||
    //       => con-2 is to get the other words in the str using empty spaces
    //      (condition 2 => i > 0 && para[i - 1] == "" && para[i]>="a" && para[i]<="z")  
    if (
      (i == 0 && str[i] >= "a" && str[i] <= "z") ||
      (i > 0 &&
        str[i - 1] == " " &&
        str[i] >= "a" &&
        str[i] <= "z")
    ) {
      // 3.2. if any one condition is true, get the ascii value of the character - difference and from that value get character accordingly and concatenate with the capitalized answer string.
      ans += String.fromCharCode(str[i].charCodeAt(0) - diff);
    } else {
      // 3.3. if none of the condition is true , return the exact string as concatenated
      ans += str[i];
    }
  }
  // 4. finally return capitalised answer string
  return ans;
}

console.log(capitalise("capiTalIze tHe titLe"));

// function Capitalize(str){

//       let capitalizedStr = "";
  
//       let ascci_differences = "a".charCodeAt(0) - "A".charCodeAt(0);
     
//       for(let i=0; i<str.length; i++){
//           capitalizedStr = ""
//           if((i==0 && str[i] >= "a" && str[i] <= "z") 
//           || (i>0 && str[i-1] == " " && str[i]>= "a" && str[i] <= "z")){
              
//               capitalizedStr += String.fromCharCode(str[i].charCodeAt(0) - ascci_differences)
              
//           } else {
//               capitalizedStr += str[i]
//           }
//       }
//       return capitalizedStr
  
  
//   }
//   let str = "capiTalIze tHe titLe"
//   console.log(Capitalize(str))
  


// INSTRUCTIONS:
// 1. create an empty string to store the capitalized answer.
// 2. find the difference of ASCII values of the lowerCase and upperCase characters using charCodeAt(0)
// 3. loop through i to str length
  // 3.1. check the first character of the each word.
    //       => con-1 is to get the first words first letter  
    //      (condition 1 => i == 0 && para[i] >= "a" && para[i]<= "z") ||
    //       => con-2 is to get the other words in the paragraph using empty spaces
    //      (condition 2 => i > 0 && para[i - 1] == "" && para[i]>="a" && para[i]<="z")
  // 3.2. if any one condition is true, get the ascii value of the character - difference and from that value get character accordingly and concatenate with the capitalized answer string.
  // 3.3. if none of the condition is true , return the exact string as concatenated
// 4. finally return capitalised answer string
 
