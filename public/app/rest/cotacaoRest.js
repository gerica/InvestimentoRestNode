var express = require('express');
var cotacaoService = require('../service/cotacaoService');
var configUsuarioService = require('../service/configUsuarioService');

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Requisição para rest de cotação: ' + req.originalUrl);
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/')
    .get(function(req, res) {
        res.json({
            message: 'Rest para cotacao.',
            rests: {
                recuperarConfiguracaoAnalise: 'Recuperar configuração do usuário, para realizar a análise dos papeis.',
            }
        });
    });

router.route('/recuperarConfiguracaoAnalise')
    .get(function(req, res) {
        configUsuarioService.recuperarConfiguracaoAnalise((err, result) => {
            // console.log(result);
            res.json(result);
        });

    });

module.exports = router;
