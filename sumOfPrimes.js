// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

function sieve(n) {
  var arr = [];
  var upperLimit = Math.sqrt(n);
  var output = [];
  var sum = 0;

  for (var i = 0; i < n; i++) {
    arr.push(true);
  }

  for (var j = 2; j <= upperLimit; j++) {
    if (arr[j]) {
      for (var k = j * j; k < n; k += j) {
        arr[k] = false;
      }
    }
  }

  for (var l = 2; l < n; l++){
    if (arr[l]) sum += l;
  }
  console.log(sum);
}

sieve(10);
sieve(2000000);
