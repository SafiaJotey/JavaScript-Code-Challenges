// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  // str = str.split('');
  for (let i in str) {
    if (str[i] === '-' || str[i] === '_') {
      const n = +i + 1;
      str = str.slice(0, i) + str[n].toUpperCase() + str.slice(n + 1);
    }
  }
  return str;
}
console.log(toCamelCase('The_Stealth_Warrior'));
console.log(toCamelCase('the-stealth-warrior'));
