const items = ["apple", "banana", "apple", "orange", "banana"];
const countMap = items.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1; //accumulator: The accumulator object that stores counts & by currentValue, current element of items array being processed by 2nd aurgument of reduce method. accumulator[currentValue]: The current count of that item in the accumulator i.e its basically assigning a value for accumulator[currentValue] key by looping whole items array. and initially for accumulator[currentValue] || 0: If acc[item] is undefined, it uses 0 instead as a initial value. and by + 1: Increments the count by 1 when found same currentValue in the items Array in further iteration.
  return accumulator;
}, {});
console.log(countMap);

// Same code without use of inbuilt functions

let result = {};
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  result[item] = (result[item] || 0) + 1;
}
console.log(result);
