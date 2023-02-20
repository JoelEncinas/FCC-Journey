// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

function isDate(str) {
  // match "yyyy-mm-dd" format
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return typeof str === "string" && regex.test(str);
}

// date endpoint
app.get("/api/:date", function(req, res) {
  // get date
  const dateStr = req.params.date;

  if (dateStr === "test") {
    res.json({ test: "hello express" });
  }

  // check  if can be parsed
  
  if (isDate(dateStr)) {
    // create date
    const dateObj = new Date(dateStr);

    // convert to unix
    const unixDate = dateObj.getTime();
    const unixDateInt = parseInt(unixDate);

    // convert to utc
    const UTCDate = dateObj.toUTCString();

    res.json({ unix: unixDateInt, utc: UTCDate });
  }
  else if (!isDate(dateStr)) {
    res.json({ error: "Invalid Date" });
  }
  else {
    // create date
    dateInt = parseInt(dateStr);
    const dateObj = new Date(dateInt);

    // convert to utc
    const UTCDate = dateObj.toUTCString();

    res.json({ unix: dateInt, utc: UTCDate });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
