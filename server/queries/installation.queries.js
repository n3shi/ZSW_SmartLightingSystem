let installation = {}
let helpers = require("./helpers")
let db = require("../models")


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
        }
    })
}


module.exports = installation