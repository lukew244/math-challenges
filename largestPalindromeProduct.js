

// A palindromic number reads the same both ways.
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindrome(){
  var arr = [];
  var a = 999;
  while (a >= 100) {
    var b = 999;
    while (b >= a) {
      var result = (a * b).toString();
      var reverse = result.split("").reverse().join("");
      if (result === reverse) arr.push(result);
      b--;
    }
  a--;
  }
  console.log(Math.max.apply(null, arr));
}



largestPalindrome();
