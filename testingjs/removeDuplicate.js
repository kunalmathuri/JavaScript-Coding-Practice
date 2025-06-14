const numbers = [5, 5, 2, 3, 4, 4, 5, 1, 9];
function removeDuplicate(arr) {
  const unique = [...new Set(arr)];
  return unique;
}
console.log(removeDuplicate(numbers));

// Same code without use of inbuilt functions

const numbersArr = [5, 5, 2, 3, 4, 4, 5, 1, 9, 9, 8, 8];
function checkDuplicate(numArr) {
  const unique = [];
  for (let i = 0; i < numArr.length; i++) {
    let isDuplicate = false;
    for (j = 0; j < unique.length; j++) {
      if (numArr[i] === unique[j]) {
        isDuplicate = true;
        break; // only exit this inner for loop & goes to outer for loop for next iteration.
      }
    }
    if (!isDuplicate) {
      unique.push(numArr[i]);
    }
  }
  return unique;
}
console.log(checkDuplicate(numbersArr));
