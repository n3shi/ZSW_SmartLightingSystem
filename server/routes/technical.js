let express = require('express');
let router = express.Router();

module.exports = function(queries) {

    /* GET users listing. */
    router.get('/', function (req, res) {
        res.send('respond with a resource');
    });

    /* GET users listing. */
    router.get('/init', async function (req, res) {

        await queries.lightsource.deleteAll()
        await queries.rpi.deleteAll()
        await queries.room.deleteAll()
        await queries.installation.deleteAll()
        await queries.user.deleteAll()

        await queries.user.create({username: "kollosp", password: "123"})
        let rpi = await queries.rpi.create({key: 123456789})
        let inst = await queries.installation.create({name: "Testowa"})
        let room1 = await queries.room.create({installationId: inst.id, name: "Salon"})
        let room2 = await queries.room.create({installationId: inst.id, name: "Kuchnia"})
        let ls1 = await queries.lightsource.create({roomId: room1.id, name: "Glowne", rpiId: rpi.id, relayNb:1})
        let ls2 = await queries.lightsource.create({roomId: room2.id, name: "Okap", rpiId: rpi.id, relayNb:2})
        let ls3 = await queries.lightsource.create({roomId: room2.id, name: "Blat", rpiId: rpi.id, relayNb:3})

        res.send({rpi,inst,room1,room2,ls1,ls2,ls3})
    });

    router.get('/getInstallation/:id', async function (req, res) {
        try {
            let inst = await queries.installation.findById(req.params)
            let r = {manager: inst.rooms}
            res.send(r)
        }catch (e) {
            res.status(402)
            res.render('error', {
                message: "Blad wczytywania instalacji",
                error: e
            });
        }
    })


    /* GET home page. */
    router.get('/createuser/:username/:password', async function(req, res) {

        try {
            let user = await queries.user.create(req.params)
            res.send(`Utoworzono uzytkownika ${req.params.username}, haslo: ${req.params.password}`)
        }catch (e) {
            res.status(402)
            res.render('error', {
                message: "Blad tworzenia uzytkonika",
                error: e
            });
        }

    })

    return router

}