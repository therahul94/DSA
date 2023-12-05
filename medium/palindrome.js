/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let finalStr="";
  let testStr = str.toLowerCase();
  for(let i=0; i<testStr.length; i++){
    if(testStr.charCodeAt(i)>=97 && testStr.charCodeAt(i)<=122){
      finalStr+=testStr[i];
    }
  }
  return finalStr === finalStr.split("").reverse().join("");
}
module.exports = isPalindrome;
