const express = require('express');
const app = express();
const fs = require('fs');

const main = require('./main.js'); // Put your main function file here. 

app.get('/', (req, res) => {
    res.render('../views/index.ejs');
});

module.exports = app;