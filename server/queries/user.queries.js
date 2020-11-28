let user = {}
let helpers = require("./helpers")
let db = require("../models")


user.create = function ({username, password}) {
    return db.USER.create({
        email: username + "@gmail.com",
        name: username,
        surname: "",
        phone: "",
        password: helpers.passwordHash(password)
    })
}

user.find = function ({username}) {
    return db.USER.findOne({
        where:{
            name: username
        }
    })
}


module.exports = user