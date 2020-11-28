let rpi = {}
let helpers = require("./helpers")
let db = require("../models")


rpi.create = function ({key}) {
    return db.RPI.create({
        key
    })
}


module.exports = rpi