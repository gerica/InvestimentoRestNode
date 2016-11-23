var criarUsuario = function() {
    var _login;
    var _password;
    var _token;
    
    return {
        login: _login,
        password: _password,
        token: _token        
    };
};

// var obj = criarUsuario();
// obj.login = 'asdf';
// console.log(obj);

module.exports = criarUsuario;
