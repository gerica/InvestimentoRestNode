var express = require('express');
var pessoaRest = require('./pessoaRest');

var app = express();
var router = express.Router();

var port = process.env.PORT || 3000; // set our port

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/usuario', pessoaRest);

app.listen(port);
