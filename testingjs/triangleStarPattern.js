const rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
//const rows = 5;
// Declares a constant variable named rows and sets it to 5.

// This means the triangle pattern will have 5 rows.

// ✅ for (let i = 1; i <= rows; i++) {
// Outer loop controls the number of rows.

// i starts at 1 and goes up to 5 (inclusive).

// Each loop iteration represents one row in the pattern.

// ✅ let pattern = '';
// Inside the outer loop, a new empty string pattern is created.

// It will hold the string of stars ('* ') for that specific row.

// ✅ for (let j = 1; j <= i; j++) {
// Inner loop controls the number of stars (*) to print in the current row.

// It runs from 1 to i, so each row prints as many stars as its row number.

// ✅ pattern += '* ';
// In each iteration of the inner loop, the string '* ' is added (appended) to the pattern string.

// Adds a star followed by a space.

// ✅ console.log(pattern);
// After the inner loop finishes (i.e., the full row's stars are ready), the completed pattern string is printed.

// This prints one row of the triangle on the screen.

///////--------Excellent question!----------------/////////////
// You're asking:

// "How is it going to the next line (i.e., printing stars row by row)?"

// The magic happens here:
// console.log(pattern);
//console.log() Adds a New Line Automatically
// Every time you call console.log(), it prints the given content and then moves to the next line.

// So after printing one row (i.e., one string of * ), it automatically jumps to the next line for the next console.log() call.
