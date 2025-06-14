const numbersArr = [5, 9, 6, 2, 1, 4, 7];
const desecending = [...numbersArr].sort((a, b) => b - a);
console.log(desecending);

//Without Using inbuilt sort() – Manual Bubble Sort Implementation
const numbers = [5, 9, 6, 2, 1, 4, 7, 8];
function sortDesecending(arr) {
  let result = [...arr];
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (result[j] < result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}
console.log(sortDesecending(numbers));
