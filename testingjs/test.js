// Spread
const arr = [1, 2, 3];
console.log(...arr); // → 1 2 3

// Rest
function example(...args) {
  console.log(args); // → [1, 2, 3]
}
example(1, 2, 3);
