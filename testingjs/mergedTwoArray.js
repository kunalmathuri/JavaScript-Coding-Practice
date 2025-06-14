const a = [1, 2];
const b = [3, 4];
const mergedArray = [...a, ...b];
console.log("Merged Array:", mergedArray);

// Same code without use of inbuilt functions

const mergedArrays = [];
for (let i = 0; i < a.length; i++) {
  mergedArrays.push(a[i]);
}
for (let i = 0; i < b.length; i++) {
  mergedArrays.push(b[i]);
}
console.log("Merged Arrays:", mergedArrays);
