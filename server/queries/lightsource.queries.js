let lightsource = {}
let helpers = require("./helpers")
let db = require("../models")


lightsource.deleteAll = function () {
    return db.LIGHTSOURCE.destroy({
        where: {},
        truncate: true
    })
}

lightsource.create = function ({roomId, relayNb, name, rpiId}) {
    return db.LIGHTSOURCE.create({
        name,
        roomId,
        relayNb,
        rpiId
    })
}


module.exports = lightsource