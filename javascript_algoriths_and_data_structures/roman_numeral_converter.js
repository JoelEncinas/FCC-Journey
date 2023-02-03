const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

function convertToRoman(arabicNum) {
  let romanNumeral = '';

  for (let i = 0; i < arabicNumerals.length; i++) {
    while (arabicNum >= arabicNumerals[i]) {
      romanNumeral += romanNumerals[i];
      arabicNum -= arabicNumerals[i];
    }
  }

  return romanNumeral;
}

console.log(convertToRoman(20));