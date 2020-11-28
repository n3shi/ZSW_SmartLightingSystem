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

rpi.findConfigByKey = async function ({key}) {
    let d = await db.RPI.findOne({
        where: {
            key:key
        },
        include: [{
            model: db.LIGHTSOURCE,
            as: "lightSources",
            attributes:[['relayNb', 'relay'], 'begin', 'end', 'func', ['arg', 'funcArg']]
        }]
    })

    if(d){
        return d.lightSources || []
    }
    return []

}

module.exports = rpi