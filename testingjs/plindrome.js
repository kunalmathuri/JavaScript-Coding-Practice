function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr; // will return a boolian value after checking & comparing both cleanedStr === reversedStr
}
let input01 = "Madam";
let input02 = "Ma7am";
console.log(`is ${input01} a Palindrome?`, isPalindrome(input01));
console.log(`is ${input02} a Palindrome?`, isPalindrome(input02));

// Same code without use of inbuilt functions
function Palindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
      return false;
    }
    j--;
  }
  return true;
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
console.log(Palindrome(str1));
console.log(Palindrome(str2));
console.log(Palindrome(str3));
