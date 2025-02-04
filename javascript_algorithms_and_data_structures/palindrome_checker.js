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