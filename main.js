const quotes = [
  {
    quote:
      "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
    author: "George Bernard Shaw",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote:
      "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    quote: "Once we accept our limits, we go beyond them.",
    author: "Albert Einstein",
  },
  {
    quote:
      "We cannot solve our problems with the same thinking we used when we created them.",
    author: "Albert Einstein",
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
  },
  {
    quote: "Sell your cleverness and buy bewilderment.",
    author: "Rumi",
  },
  {
    quote: "Never confuse a single defeat with a final defeat.",
    author: "F. Scott Fitzgerald",
  },
  {
    quote: "Someday is not a day of the week.",
    author: "Denise Brennan-Nelson",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
];

const quoteText = document.getElementById("quote");
const quoteAuthorText = document.getElementById("quote-author");

function generateQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.textContent = randomQuote.quote;
  quoteAuthorText.textContent = randomQuote.author;
}

generateQuote();
