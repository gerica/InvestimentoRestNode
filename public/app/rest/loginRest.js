var express = require('express');
var criarUsuario = require('../entity/usuario');
var loginService = require('../service/loginService');

var router = express.Router();

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Requisição para rest de pessoa: ' + req.originalUrl);
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/')
    // Get
    .get((req, res) => {
        res.json({
            message: 'Rest para login.',
            rests: {
                login: 'Realizar login, utilizando JWT.',
            }
        });
    })
    //Post
    .post((req, res) => {        
        // console.log(req.body);
        if (!req.body.email || !req.body.password) {
            return res.status(400).send("Informe o usuário e a senha.");
        }
        var usuario = criarUsuario();
        usuario.login = req.body.email;
        usuario.password = req.body.password;
        // console.log(usuario);

        loginService.login(usuario, (err, result) => {
            console.log('Login - callback');
            res.json(result);
        });
    });

module.exports = router;
