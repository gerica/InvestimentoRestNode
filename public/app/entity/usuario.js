var criarUsuario = function() {
    var _email;
    var _username;
    var _password;
    var _passwordrp;
    var _token;

    return {
        email: _email,
        username: _username,
        password: _password,
        passwordrp: _passwordrp,
        token: _token
    };
};

// var obj = criarUsuario();
// obj.login = 'asdf';
// console.log(obj);

module.exports = criarUsuario;
