var memo = {};

function fibonacci (n) {
  var value;

  if (n in memo) {
    value = memo[n];
  }
  else {
      if (n === 0 || n === 1) {
        value = n;
      }
      else {
        value = fibonacci(n-1) + fibonacci(n-2);
      }
      memo[n] = value;
    }
    return value;
}

console.log(fibonacci(20));
console.log(memo);
