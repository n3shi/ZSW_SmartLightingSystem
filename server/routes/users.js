var express = require('express');
var router = express.Router();

module.exports = function(queries) {

    /* GET users listing. */
    router.get('/', function (req, res) {
        res.send('respond with a resource');
    });


    /**
     * url: /user/login
     * opis: funkcja zwraca token {token: ...} lub komunikat bledu {error: ... }
     * body: username, password
     */
    router.post('/login', function (req, res) {
        res.send('respond with a resource');
    });

    /**
     * url: /user/logout
     * opis: funkcja usuwa token z listy aktwnych tokenow
     * body: token
     */
    router.post('/logout', function (req, res) {
        res.send('respond with a resource');
    });

    /**
     * url: /user/verify
     * opis: funkcja sprawdza czy podany token jest aktywny. Zwraca {status: ...}, 1-zalogowany,0-niezalogowany
     * body: token
     */
    router.post('/verify', function (req, res) {
        res.send('respond with a resource');
    });


    return router;
}