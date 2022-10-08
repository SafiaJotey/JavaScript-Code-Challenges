// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  let sum = 0;
  let remainder = 0;
  while (n > 0) {
    remainder = n % 10;
    // console.log(remainder);

    n = parseInt(n / 10);
    // console.log(n);
    sum += remainder;
    // console.log(sum);
  }
  if (sum > 9) {
    let total = digital_root(sum);
    return total;
  } else {
    return sum;
  }
}
console.log(digital_root(942));
// console.log(digital_root(493193));
// console.log(digital_root(132189));
