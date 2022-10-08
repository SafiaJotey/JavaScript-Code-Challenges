// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
function isIsogram(str) {
  const myString = str.toLowerCase();
  const myArray = myString.split('');
  let isIsogram = true;
  myArray.map((c) => {
    let count = 0;
    for (i of myArray) {
      if (c === i) {
        // console.log(c + '=' + i);
        count++;
        // console.log(count);
      }
      // console.log(c + '=' + i);
      if (count > 1) {
        // console.log('inner count');
        isIsogram = false;
        return false;
      }
    }
  });
  return isIsogram;
}

// console.log(isIsogram('isogram'));
// console.log(isIsogram('aba'));
// console.log(isIsogram('moOse'));
// console.log(isIsogram('isIsogram'));
console.log(isIsogram(''));
