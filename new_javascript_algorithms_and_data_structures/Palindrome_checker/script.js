const input = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")

checkBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const prompt = input.value

  if (prompt.length === 0) {
    alert('Please input a value')
  }

  const palindromeResult = palindrome(prompt)
  result.innerText = palindromeResult ? `${prompt} is a palindrome` : `${prompt} is not a palindrome`
})

function palindrome(str) {
  let cleanStr = filterStr(str);
  for (let i = 0; i < Math.ceil(cleanStr.length / 2); i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - i - 1]) {
      return false;
    }
  }

  return true;
}

function filterStr(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

// test
palindrome('eye');