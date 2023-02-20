const express = require("express");
const crypto = require("crypto");
const cors = require("cors");
const fs = require("fs");
const app = express();

const port = 3000;

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.use(express.json());

const filePath = "./urls.json";

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/shorturl", (req, res) => {
  const { longUrl } = req.body;
  const shortCode = generateShortCode();
  const urls = loadUrls();
  urls[shortCode] = longUrl;
  saveUrls(urls);
  res.send({ short_url: shortCode });
});

app.get("/api/shorturl/:shortCode", (req, res) => {
  const urls = loadUrls();
  const longUrl = urls[req.params.shortCode];
  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.sendStatus(404);
  }
});

function loadUrls() {
  try {
    const data = fs.readFileSync(`${__dirname}/${filePath}`);
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
}

function saveUrls(urls) {
  fs.writeFileSync(`${__dirname}/${filePath}`, JSON.stringify(urls));
}

function generateShortCode() {
  const length = 5;
  const buffer = crypto.randomBytes(length);
  const code = buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  return code;
}

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
