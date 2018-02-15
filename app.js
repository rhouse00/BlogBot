const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const routes = require('./routes/routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = app;