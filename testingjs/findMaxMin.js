const numbers = [50, 20, 13, 18, 3];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min);

// Same code without use of inbuilt functions

let maximum = numbers[0];
let minimum = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maximum) {
    maximum = numbers[i];
  }
  if (numbers[i] < minimum) {
    minimum = numbers[i];
  }
}
console.log(maximum, minimum);
