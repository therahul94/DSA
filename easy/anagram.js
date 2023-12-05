/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // sort
  // return (
  //   str1.toLowerCase().split("").sort().join("") ===
  //   str2.toLowerCase().split("").sort().join("")
  // );

  // using set
  if(str1.length !== str2.length){
    return false;
  }
  let set1 = new Set(str1.toLowerCase().split(""));
  let set2 = new Set(str2.toLowerCase().split(""));
  for(let val of [...set2]){
    if(!set1.has(val)){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
