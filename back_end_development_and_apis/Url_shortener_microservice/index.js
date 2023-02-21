const express = require("express");
const crypto = require("crypto");
const cors = require("cors");
const mongo = require('mongodb');
const mongoose = require("mongoose");
const dns = require('dns');
const bodyParser = require('body-parser');

// app
const app = express();

const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// db
mongoose.set('strictQuery', true);

mongoose.connect(
  "MONGODB_URI" ||
  "https://boilerplate-project-urlshortener.joelencinas.repl.co",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

const Schema = mongoose.Schema;

const shortURLSchema = new Schema({
  original_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: String,
    required: true,
  },
});

const ShortURL = mongoose.model("ShortURL", shortURLSchema);

// db login
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

// routes
app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post('/api/shorturl', (req, res) => {
  const originalurl = req.body.url;

  if (!originalurl) {
    res.json({ error: 'invalid URL' });
    return;
  }

  // Verify the submitted URL using dns.lookup
  const { host } = new URL(originalurl);
  dns.lookup(host, (err) => {
    if (err) {
      res.json({ error: 'invalid URL' });
    } else {
      // Generate a unique ID for the short URL using crypto
      const id = crypto.randomBytes(4).toString('hex');

      // Save the original and short URLs to the database
      const shorturl = new ShortURL({
        original_url: originalurl,
        short_url: id
      });
      shorturl.save((err, doc) => {
        if (err) {
          console.error(err);
          res.json({ error: 'could not save URL' });
        } else {
          // Return the original and short URLs as a JSON response
          res.json({
            original_url: doc.original_url,
            short_url: doc.short_url
          });
        }
      });
    }
  });
});

app.get('/api/shorturl/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL;
  ShortURL.findOne({ short_url: shortURL }, (err, doc) => {
    if (err) {
      console.error(err);
      res.json({ error: 'could not find URL' });
    } else {
      res.redirect(doc.original_url);
    }
  });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
