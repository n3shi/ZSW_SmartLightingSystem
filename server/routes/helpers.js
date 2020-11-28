
module.exports = {}


/**
 *
 * @param query - received query
 * @param expectedQuery - an array contains all required fields names
 * @return query if all required files exists
 */
module.exports.checkQuery = function (query, expectedQuery) {
    let config = query
    for (let i of expectedQuery) {
        if (query[i] != undefined) {
            config[i] = query[i]
        } else {
            let exception = "required fields were not specified. url should be: "

            for (let j of expectedQuery) {
                exception += '/' + j
            }

            exception += " given: " + JSON.stringify(query) + "." +
                " not found field is: " + i

            throw(new Error(exception))
        }
    }

    return config
}

module.exports.logError = function(error) {
    let d = new Date()
    if(error.stack){
        console.error(d.toLocaleTimeString() + " " + JSON.stringify(error.toString(), false,  4))
        console.error(error.stack, error.name, error.message)
    }else{
        console.error(d.toLocaleTimeString() + " " + error)
    }
}
