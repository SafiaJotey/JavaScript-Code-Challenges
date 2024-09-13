// Qs:Write a JavaScript program to check two numbers and return true if one of the number is
// 100 or if the sum of the two numbers is 100

const check100 = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(check100(50, 100));
console.log(check100(5, 95));
console.log(check100(5, 6));