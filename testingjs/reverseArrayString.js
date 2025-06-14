const arr = [1, 2, 3, 4];
const reversed = [...arr].reverse();
console.log("Reversed:", reversed);

// Same code without use of inbuilt functions

const reverse = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reverse.push(arr[i]);
}
console.log("Reversed:", reverse);

const name = "kunal";
let reversedName = "";
for (let i = name.length - 1; i >= 0; i--) {
  reversedName += name[i];
}
console.log("ReversedName:", reversedName);
