const num = 7;
let isPrime = true;
if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    //“Start checking from 2 up to half of the number”
    // i = 2: The smallest number to check for divisibility (we skip 1 because all numbers are divisible by 1).
    // i <= Math.floor(num / 2): You only need to check up to half of num because no number greater than num / 2 (except num itself) can divide it evenly.

    if (num % i === 0) {
      isPrime = false;
      break;
      // So the loop runs: i = 2 to 6 => It checks:
      // Is 13 % 2 === 0?
      // Is 13 % 3 === 0?
      // ...
      // Is 13 % 6 === 0?
      // If none of those are true, 13 is prime.
    }
  }
}
console.log(num + (isPrime ? "is Prime no." : "is not Prime no."));

// Better Version (More Efficient):
// Instead of checking up to Math.floor(num / 2), you can optimize by checking only up to Math.sqrt(num):
// for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {}
// Because: Any non-prime number num will have at least one factor ≤ √num.
// This reduces the number of iterations.

const number = 100;
let checkPrime = true;
if (number <= 1) {
  checkPrime = false;
} else {
  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      checkPrime = false;
      break;
    }
  }
}
console.log(number + (checkPrime ? "is Prime no." : "is not Prime no."));
