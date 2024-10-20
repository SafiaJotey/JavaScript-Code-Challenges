// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
function convertToTitle(columnNumber) {
  let result = '';

  while (columnNumber > 0) {
      // columnNumber--; // Adjust for 0-indexing
      console.log(columnNumber,(columnNumber % 26) + 65, )
      const char = String.fromCharCode((columnNumber % 26) + 65);
      result = char + result;
      columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
}

// Test cases
console.log(convertToTitle(1));   // Output: "A"
console.log(convertToTitle(28));  // Output: "AB"
console.log(convertToTitle(701)); // Output: "ZY"