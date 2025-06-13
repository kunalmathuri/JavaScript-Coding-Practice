// function countCharsAndWords(input) {
//   const trimmedInput = input.trim();
//   const countChars = trimmedInput.length; // it will count the char including char.
//   const countWords = trimmedInput === "" ? 0 : trimmedInput.split(/\s+/).length; // Count words - (splitting by whitespace and filtering out empty strings)
//   return { countChars, countWords };
// }
// let input1 = "hello world ! this is javaScript, enjoy!";
// let result = countCharsAndWords(input1);
// console.log(`No. of Characters:${result.countChars}`);
// console.log(`No. of Words:${result.countWords}`);

// Same code without use of inbuilt function
//at i = o we are outside the loop — so at the start of the loop, inWord is definitely false, which makes !inWord true alongwiih input[i] !== " ". That’s exactly why the condition runs at the first non-space character of a word by satisfying both condition.
function countCharsAndWords(input) {
  let start = 0;
  let end = input.length - 1;
  while (start <= end && input[start] === " ") {
    // Trim leading spaces
    start++;
  }
  while (end >= start && input[end] === " ") {
    // Trim trailing spaces
    end--;
  }
  let countChars = 0;
  for (i = start; i <= end; i++) {
    countChars++;
  }
  let countWords = 0;
  let inWord = false;
  for (i = start; i <= end; i++) {
    if (input[start] !== " " && !inWord) {
      inWord = true;
      countWords++;
    } else if (input[i] === " ") {
      inWord = false;
    }
  }
  return { countChars, countWords };
}
let input1 =
  "hi this is kunal, I have 3.5 years of experience of soft Testing!";
let result = countCharsAndWords(input1);
console.log(`No. of Char:${result.countChars}`);
console.log(`No. of Word:${result.countWords}`);
