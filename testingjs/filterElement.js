const numbers = [10, 5, 20, 3];
// Filter numbers greater than 10
const filtered = numbers.filter((num) => num > 10);
console.log("Filtered:", filtered);

// Same code without use of inbuilt functions
const filteredArr = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    filteredArr.push(numbers[i]);
  }
}
console.log("FilteredArr:", filteredArr);
