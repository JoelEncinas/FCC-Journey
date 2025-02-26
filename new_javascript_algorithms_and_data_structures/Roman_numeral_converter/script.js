const input = document.getElementById("number");
const checkBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");
const resultContainer = document.getElementById("result-container");

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const prompt = input.value;
  resultContainer.style.display = "block";

  if (prompt.length === 0) {
    result.innerText = "Please enter a valid number";
    return;
  }

  if (parseInt(prompt) <= -1) {
    result.innerText = "Please enter a number greater than or equal to 1";
    return;
  }

  if (parseInt(prompt) >= 4000) {
    result.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  result.innerText = convertToRoman(prompt);
});

const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNumerals = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

function convertToRoman(arabicNum) {
  let romanNumeral = "";

  for (let i = 0; i < arabicNumerals.length; i++) {
    while (arabicNum >= arabicNumerals[i]) {
      romanNumeral += romanNumerals[i];
      arabicNum -= arabicNumerals[i];
    }
  }

  return romanNumeral;
}
