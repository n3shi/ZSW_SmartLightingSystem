module.exports = {}
module.exports.availableFunc = function() {

    let func = []
    for(let i in module.exports){
        for(let j in module.exports[i]){
            if(!(module.exports[j] instanceof Function))
                func.push(`${i}.${j}`)
        }
    }

    return func
}

const db = require('../models')

require('fs').readdirSync(__dirname + '').forEach(function(file) {

    module.exports.db = db

    if (file.match(/\.queries\.js$/) !== null && file !== 'index.js') {
        let name = file.replace('.queries.js', '');
        module.exports[name] = require("./"+file);
    }
});