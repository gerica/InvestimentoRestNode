var express = require('express');
var criarUsuario = require('../entity/usuario');
var loginService = require('../service/loginService');

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
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
        if (!req.body.email || !req.body.password) {
            return res.status(400).send("Informe o usuário e a senha.");
        }
        var usuario = criarUsuario();
        usuario.email = req.body.email;
        usuario.password = req.body.password;
        // console.log(usuario);

        loginService.login(usuario, (err, result) => {
            console.log('Rest', result.length);
            if (err) {
                res.status(500).json({ error: err });
            } else if (result.length === 1) {
                res.json({
                    token: result[0].token,
                    usuario: {
                        username: result[0].username,
                        email: result[0].email,
                    }
                });
            } else {
                res.status(500).json({ msg: result });
            }

        });
    });

module.exports = router;
