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
app.get("/api/:date?", function(req, res) {
  if(req.params.length === 0){
    // convert to unix
    const unixDate = new Date().getTime();

    // convert to utc
    const UTCDate = new Date().toUTCString();
    
    return res.json({ unix: unixDate, utc: UTCDate });
  }
  else {
    // get date
    const dateStr = req.params.date;
    const dateObj = new Date(dateStr);

    if(dateObj === undefined){ 
      return res.json({ err: "Invalid Date" });
    } else {
      if (isDate(dateStr)) {
      // create date
      const dateObj = new Date(dateStr);
  
      // convert to unix
      const unixDate = dateObj.getTime();
  
      // convert to utc
      const UTCDate = dateObj.toUTCString();
  
      return res.json({ unix: unixDate, utc: UTCDate });
      }
      else {
        // create date
        dateInt = parseInt(dateStr);
        const dateObj = new Date(dateInt);
    
        // convert to utc
        const UTCDate = dateObj.toUTCString();
        
        res.json({ unix: dateInt, utc: UTCDate });
        }
      }
    }
});

// listen for requests :)
var listener = app.listen(3000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
