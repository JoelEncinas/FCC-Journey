// using local json
const QUOTES_URL = "https://raw.githubusercontent.com/JoelEncinas/fcc-journey/main/front_end_development_libraries/Random_quote_machine/quotes.json";
const TWITTER_URL = "https://twitter.com/intent/tweet";

// page elements
const quoteText = $("#text");
const quoteAuthor = $("#author");
const newQuoteBtn = $("#new-quote");
const tweetQuoteBtn = $("#tweet-quote");
const container = $("#main-container");
const body = $("body");

const paleColors = [
    "rgb(255, 204, 153)",
    "rgb(255, 153, 153)",
    "rgb(255, 153, 204)",
    "rgb(204, 153, 255)",
    "rgb(153, 204, 255)",
    "rgb(153, 255, 153)",
    "rgb(204, 255, 153)",
    "rgb(255, 255, 153)",
    "rgb(153, 255, 204)",
    "rgb(204, 153, 204)"
  ];

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
    quoteText.append('" ' + randomQuote.quote + ' "');
    quoteAuthor.append("- " + randomQuote.author);

    // add twitter link
    tweetQuoteBtn.attr(
      "href",
      TWITTER_URL +
        `?hashtags=quotes&text="${randomQuote.quote}" - ${randomQuote.author}`
    );

    // change theme
    let color = changeBackgroundColor();
    container.css({ "background-color": color });
    body.css({ "background-color": color });
    quoteText.css({ color: color });
    quoteAuthor.css({ color: color });
    newQuoteBtn.css({ color: color });
    tweetQuoteBtn.css({ color: color });
  });
}

// change background color on new quote request
function changeBackgroundColor() {
  let randomIndex = Math.floor(Math.random() * paleColors.length);
  let randomColor = paleColors[randomIndex];

  return randomColor;
}

// when document loads initialize logic
$(document).ready(function () {
  // get quote on first load
  getNewQuote();

  // add event for getting new quotes
  newQuoteBtn.on({
    click: function () {
      getNewQuote();
    },
  });
});
