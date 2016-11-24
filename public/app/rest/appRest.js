const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const errorhandler = require('errorhandler');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

var app = express();
// dotenv.load();

// Parsers
// old version of line
// app.use(bodyParser.urlencoded());
// new version of line
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(express.logger('dev'));
    app.use(errorhandler())
}

var port = process.env.PORT || 3000; // set our port

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/auth', require('./loginRest'));
app.use('/usuario', require('./pessoaRest'));
app.use('/papel', require('./papelRest'));
app.use('/cotacao', require('./cotacaoRest'));

app.listen(port);
