
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(number) {
  var i = 2;
  while (number%i !== 0) i++;

  largestDivisor = number/i;
  console.log(largestDivisor);
  if (largestDivisor !== 1){
    largestPrimeFactor(largestDivisor);
  }
  else {
    return 1;
  }
}

largestPrimeFactor(600851475143);
