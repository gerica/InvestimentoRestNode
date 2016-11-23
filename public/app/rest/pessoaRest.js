var express = require('express');
var pessoaService = require('../service/pessoaService');

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Requisição para rest de pessoa: ' + req.originalUrl);
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/')
    .get(function(req, res) {
        res.json({
            message: 'Rest para usuário.',
            rests: {
                findAll: 'Recuperar todos os usuário cadastrados.',
            }
        });
    });

router.route('/findAll')
    .get(function(req, res) {
        pessoaService.findPessoa((err, result) => {
            // console.log(result);
            res.json(result);
        });

    });

module.exports = router;
