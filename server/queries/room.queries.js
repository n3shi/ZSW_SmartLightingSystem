let room = {}
let helpers = require("./helpers")
let db = require("../models")


room.deleteAll = function () {
    return db.ROOM.destroy({
        where: {},
        truncate: true
    })
}

room.create = function ({installationId, name}) {
    return db.ROOM.create({
        name,
        installationId: installationId
    })
}


module.exports = room