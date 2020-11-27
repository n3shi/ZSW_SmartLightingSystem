let express = require('express')
let router = express.Router()


/**
 * Middleware - zawsze jest wykonywany po wykryciu wejscia do routera.
 * body: token
 * Sprawdza czy token jest aktywny, jesli tak to przejdzie dalej. jesli nie to zostanie zwrocony komunika
 * {error: 403}
 */
router.use(function (req, res, next) {
    if(req.body.token) {
        next()
    }else{
        res.status(403)
        res.send({error: "access denied"})
    }
})

/*
* url: /relay/config
* opis: funkcja zwraca konfiguracje przekaznikow dla wybranej instalacji
* body: instalationID
*/
router.post('/config', function(req, res) {
    res.render('index', { title: 'Express' });
});

/*
* url: /relay/setconfig
* opis: funkcja pozwala zapisac ustawienia przekaznikow
* body: instalationID
*/
router.post('/setConfig', function(req, res) {
    res.render('index', { title: 'Express' });
});


module.exports = router;
