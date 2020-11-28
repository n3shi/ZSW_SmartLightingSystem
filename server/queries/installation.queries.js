let installation = {}
let helpers = require("./helpers")
let db = require("../models")


installation.deleteAll = function () {
    return db.INSTALLATION.destroy({
        where: {},
        truncate: true
    })
}

installation.create = function ({name}) {
    return db.INSTALLATION.create({
        name: name,
    })
}

installation.findByName = function ({name}) {
    return db.INSTALLATION.findOne({
        where: {
            name: name
        }
    })
}


installation.findById = function ({id}) {
    return db.INSTALLATION.findOne({
        where: {
            id
        },
        attributes: [],
        include: [{
            model: db.ROOM,
            as: "rooms",
            attributes: ['name'],
            include: [{
                model: db.LIGHTSOURCE,
                as: "lightSources",
                attributes:['name', ['relayNb', 'relay'], 'begin', 'end', 'func', ['arg', 'funcArg']]
            }]
        }]
    })
}


module.exports = installation