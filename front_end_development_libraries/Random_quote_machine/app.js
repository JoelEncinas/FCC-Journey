$(document).ready(function () {
  // using local json
  const QUOTES_URL = "./quotes.json";
  const TWITTER_URL = "https://twitter.com/intent/tweet";

  // page elements
  const quoteBox = $("#quote-box");
  const quoteText = $("#text");
  const quoteAuthor = $("#author");
  const newQuoteBtn = $("#new-quote");
  const tweetQuoteBtn = $("#tweet-quote");

  // get quote logic
  function getNewQuote() {
    $.getJSON(QUOTES_URL, function (data) {
      // generate random number and search quote
      let randomIndex = Math.floor(Math.random() * data.quotes.length);
      let randomQuote = data.quotes[randomIndex];

      // clear elements
      quoteText.empty();
      quoteAuthor.empty();

      // append data
      quoteText.append(randomQuote.quote);
      quoteAuthor.append(randomQuote.author);

      tweetQuoteBtn.attr(
        "href",
        TWITTER_URL + `?hashtags=quotes&text="${randomQuote.quote}" - ${randomQuote.author}`
      );
    });
  }

  // get quote on first load
  getNewQuote();

  // add event for getting new quotes
  newQuoteBtn.on({
    click: function () {
      getNewQuote();
    },
  });
});
