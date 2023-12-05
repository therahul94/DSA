/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let counter = 0;
    for(let alpha of str){
      if(vowelsSet.has(alpha.toLowerCase())){
        counter++;
      }
    }
    return counter;
}

module.exports = countVowels;