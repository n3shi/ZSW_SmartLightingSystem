let room = {}
let helpers = require("./helpers")
let db = require("../models")


room.create = function ({installationId, name}) {
    return db.ROOM.create({
        name,
        installationId
    })
}


module.exports = room