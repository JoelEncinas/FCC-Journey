var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// date endpoint
app.get("/api/:date?", function(req, res) {
  const dateParam = req.params.date;
  let date;

  if (dateParam) {
    if (/^\d+$/.test(dateParam)) {
      date = new Date(parseInt(dateParam));
    } else {
      date = new Date(dateParam);
    }
  } else {
    date = new Date();
  }

  if (isNaN(date.getTime())) {
    res.status(400).json({ error: "Invalid Date" });
  } else {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    });
  }
});

var listener = app.listen(3000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
