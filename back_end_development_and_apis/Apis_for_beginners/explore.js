const Twilio = require("twilio");

var sid = "AC123";
var auth = "123";

// hide keys in the future
const client = new Twilio(sid, auth);

client.messages
  .list()
  .then((messages) =>
    console.log(`The most recent message is ${messages[0].body}`)
  )
  .catch(err => console.log(err.status));

console.log('gathering your message log')