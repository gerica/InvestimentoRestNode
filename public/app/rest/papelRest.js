var express = require('express');
var papelService = require('../service/papelService');

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Requisição para rest de papel: ' + req.originalUrl);
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/')
    .get(function(req, res) {
        res.json({
            message: 'Rest para papel.',
            rests: {
                recuperarTodosPapeis: 'Recuperar todos os papeis.',
            }
        });
    });

router.route('/recuperarTodosPapeis')
    .get(function(req, res) {
        papelService.findAll((err, result) => {
            // console.log(result);
            res.json(result);
        });

    });

module.exports = router;
