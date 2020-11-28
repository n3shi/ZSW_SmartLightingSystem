let rpi = {}
let helpers = require("./helpers")
let db = require("../models")


rpi.deleteAll = function () {
    return db.RPI.destroy({
        where: {},
        truncate: true
    })
}


rpi.create = function ({key}) {
    return db.RPI.create({
        key
    })
}


module.exports = rpi