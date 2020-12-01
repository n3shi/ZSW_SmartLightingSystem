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

installation.setR = async function(config, installationId){

    return  db.sequelize.transaction(async function (t) {
        //get installation
        for (let r in config) {
            let room = await db.ROOM.findOne({
                where: {
                    installationId: installationId,
                    name: config[r].name
                },
            }, {transaction: t})

            for (let i in config[r].lightSources) {

                console.log("config[r].lightSources[i]", config[r].lightSources[i])
                await db.LIGHTSOURCE.update({
                    name: config[r].lightSources[i].name,
                    begin: config[r].lightSources[i].relay,
                    end: config[r].lightSources[i].end,
                    func: config[r].lightSources[i].func,
                    funcArg: config[r].lightSources[i].funcArg,
                }, {
                    where: {
                        roomId: room.id,
                        name: config[r].lightSources[i].name
                    },
                }, {transaction: t})
            }
        }
    })
}

module.exports = installation