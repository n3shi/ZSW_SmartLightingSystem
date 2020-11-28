let express = require('express')
let router = express.Router()
let helpers = require('./helpers')
module.exports = function(queries) {

    /**
     * Middleware - zawsze jest wykonywany po wykryciu wejscia do routera.
     * body: token
     * Sprawdza czy token jest aktywny, jesli tak to przejdzie dalej. jesli nie to zostanie zwrocony komunika
     * {error: 403}
     */

    router.use(function (req, res, next) {
        if (req.body.token) {
            next()
        } else {
            res.status(403)
            res.send({error: "access denied"})
        }
    })

    /*
    * {
        "shedule"🙁: [
            {
                "idSchedule":1,
                "roomName":"nazwaPomieszczenia",
                "lightName":"nazwaSwiatla",
                "relay":1,
                "funcVal1":"wartoscFunkcji1",
                "hour1":"godzinaFunkcji1",
                "arg1":"wartosc1",
                "boomerangChange":false,
                "funcTo2":"wartoscFunkcji2",
                "hour2":"godzinaFunkcji2",
                "arg2":"wartosc2"
            },
        ],

            "manager":
            [
                {
                    "name":"nazwaPomieszczenia",
                    "lightSources"🙁:
                        ["name":"nazwaSwiatla",
                        "relay":1,
                        "begin":"00:00",
                        "end":"23:59",
                        "func":"off",
                        "funcArg":""
                        ],
                    ]
                },
            ],
    }
    * */

    /*
    * url: /relay/config
    * opis: funkcja zwraca konfiguracje przekaznikow dla wybranej instalacji
    * body: instalationID
    */
    router.post('/config', function (req, res) {
        try{
            let config = helpers.checkQuery(req.body, ['id'])
            let inst = queries.installation.findById(config)

            let r = {manager: inst.rooms}
            res.send(r)
        }catch (e) {
            res.status(402)
            res.send(e)
        }
    });

    /*
    * url: /relay/setconfig
    * opis: funkcja pozwala zapisac ustawienia przekaznikow
    * body: instalationID
    */
    router.post('/setConfig', function (req, res) {
        res.render('index', {title: 'Express'});
    });


    return router
}
