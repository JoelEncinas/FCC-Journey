const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

function telephoneCheck(number) {
  return phoneRegex.test(number);
}

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const prompt = userInput.value;

  if (prompt.length === 0) {
    alert("Please provide a phone number");
    return;
  }

  resultsDiv.innerHTML = telephoneCheck(prompt)
    ? `Valid US number: ${prompt}`
    : `Invalid US number: ${prompt}`;
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  resultsDiv.innerHTML = "";
});
