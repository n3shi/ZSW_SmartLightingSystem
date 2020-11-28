let lightsource = {}
let helpers = require("./helpers")
let db = require("../models")


lightsource.create = function ({roomId, relayId, name}) {
    return db.LIGHTSOURCE.create({
        name,
        roomId,
        relayId
    })
}


module.exports = lightsource