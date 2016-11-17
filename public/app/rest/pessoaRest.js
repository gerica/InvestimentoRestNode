var express = require('express');
var pessoaService = require('../service/pessoaService');

var app = express();
var router = express.Router();

var port = process.env.PORT || 3000; // set our port

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Feito uma request: ' + req.originalUrl);
    next(); // make sure we go to the next routes and don't stop here
});

// app.get('/', (req, res) => {
//     pessoaService.findPessoa(res);
// })

// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });
// });

router.route('/')
    .get(function(req, res) {
        res.json({ message: 'Bem vindo.' });
    });

router.route('/getAll')
    .get(function(req, res) {
        pessoaService.findPessoa((err, result) => {
            // console.log(result);
            res.json(result);
        });

    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(port);
