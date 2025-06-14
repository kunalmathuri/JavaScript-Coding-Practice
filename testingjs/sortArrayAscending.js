const numbersArr = [5, 2, 9, 1, 5, 6];
const ascending = [...numbersArr].sort((a, b) => a - b);
console.log(ascending);

//Without Using inbuilt sort() – Manual Bubble Sort Implementation

const numbers = [5, 2, 3, 1, 6, 4];

function sortAscending(arr) {
  let result = [...arr];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++)
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
  }
  return result;
}
console.log(sortAscending(numbers));
