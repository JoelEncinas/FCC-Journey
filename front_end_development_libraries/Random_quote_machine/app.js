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
  const container = $(".container");
  const body = $("body");

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
      quoteText.append("\"" + randomQuote.quote + "\"");
      quoteAuthor.append(randomQuote.author);

      // add twitter link
      tweetQuoteBtn.attr(
        "href",
        TWITTER_URL +
          `?hashtags=quotes&text="${randomQuote.quote}" - ${randomQuote.author}`
      );

      // change theme
      let color = changeBackgroundColor();
      container.css({ "background-color": color});
      body.css({ "background-color": color });
      quoteText.css({ color: color });
      quoteAuthor.css({ color: color });
    });
  }

  // change background color on new quote request
  function changeBackgroundColor() {
    let randomIndex = Math.floor(Math.random() * paleColors.length);
    let randomColor = paleColors[randomIndex];

    return randomColor;
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
