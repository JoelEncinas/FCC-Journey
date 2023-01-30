const express = require('express');
const app = express();
const mongoose = require('mongoose');

// routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});

// connect to db
mongoose.connect('mongodb+srv://admin:admin@cluster0.pug2uxj.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('connected to db...');
});

// start listening to the server
app.listen(3000);

