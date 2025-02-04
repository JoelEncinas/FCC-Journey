const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

function telephoneCheck(number) {
  return phoneRegex.test(number);
}

telephoneCheck("555-555-5555");  