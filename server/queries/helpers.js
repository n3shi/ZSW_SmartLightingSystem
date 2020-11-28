const bcrypt = require('bcrypt')
const salt = 10
const process = require('process')
const crypto = require('crypto')

let helpers = {
    TIME_10_MINS: 10*60*1000,
    TIME_20_MINS: 20*60*1000,
    TIME_30_MINS: 30*60*1000,
    TIME_1_HOUR: 60*60*1000,
    TIME_1_DAY: 24*60*60*1000,

    keys: function(obj){
        let a = []
        for(let i in obj)
            a.push(i)

        return a
    },

    dataValues: function(dbRecords) {
        let ret = []
        for(let i of dbRecords)
            ret.push(i.dataValues)

        return ret
    },

    passwordHash: function (password) {
        return bcrypt.hashSync(password, salt);
    },

    /**
     * Verify if hash equals given password
     * @param hashPassword
     * @param plainPassword
     */
    passwordVerify: function(hashPassword,plainPassword) {
        return bcrypt.compareSync(plainPassword,hashPassword)
    },

    compareDates: function(date1, date2) {
        if(date1.getFullYear() > date2.getFullYear()) return 1
        if(date1.getFullYear() < date2.getFullYear()) return -1
        if(date1.getMonth() > date2.getMonth()) return 1
        if(date1.getMonth() < date2.getMonth()) return -1
        if(date1.getDate() > date2.getDate()) return 1
        if(date1.getDate() < date2.getDate()) return -1
        return 0
    },

    /**
     * Generate random 48 bytes long token
     */
    generateToken: function(){
        return new Promise((resolve, reject) => {
            crypto.randomBytes(48, function(err, buffer) {
                if(err){
                    reject(err)
                }else{
                    resolve(buffer.toString('hex'))
                }
            })
        })
    },

    dataValuesRecursive: function(dbRecords) {

        //console.log("dbRecords", dbRecords instanceof Object, dbRecords)


        if(dbRecords instanceof Object){
            if(dbRecords.dataValues){
                let r = dbRecords.dataValues

                for(let i in r){
                    r[i] = helpers.dataValuesRecursive(r[i])
                }

                return r
            }

        }

        return dbRecords
    },

    //['create', 'findById', 'findAll', 'updateById', 'deleteById']
    createBasicMethods: function(model, functions){
        let ret = {}
        if(functions.indexOf('create') >= 0){
            ret.create = function(config) {
                return model.create(config)
            }
        }

        if(functions.indexOf('findById') >= 0){
            ret.findById = function(id) {
                return model.findOne({
                    where: {
                        id: id
                    }
                })
            }
        }

        if(functions.indexOf('findAll') >= 0){
            ret.findAll = function() {
                return model.findAll()
            }
        }

        if(functions.indexOf('updateById') >= 0){
            ret.updateById = function(id, config) {
                return model.update(config, {
                    where: {
                        id: id
                    }
                })
            }
        }

        if(functions.indexOf('deleteById') >= 0){
            ret.deleteById = function(id) {
                return model.destroy({
                    where: {
                        id: id
                    }
                })
            }
        }

        return ret
    },

    computeDaysOfMonth: function(date) {
        date = new Date(date)
        date.setDate(1)
        date.setHours(0,0,0)

        date.setMonth(date.getMonth() +1)
        date.setDate(date.getDate()-1)

        return date.getDate()
    },

    setDateEndOfDay: function(date){
        let d = new Date(date)
        d.setHours(22,59,59)
        return d
    },

    setDateEndOfMonth: function(date){
        let d = new Date(date)
        d.setDate(0)
        d.setMonth(d.getMonth()+1)
        d.setDate(d.getDate()-1)
        d.setHours(22,59,59)
    },

    setDateEndOfYear: function(data){
        let d = new Date(date)
        d.setDate(0)
        d.setMonth(0)
        d.setFullYear(d.getFullYear()+1)
        d.setDate(d.getDate()-1)
        d.setHours(22,59,59)
    },

    findDayLimits: function (date) {
        let begin = new Date(date)
        begin.setHours(0,0,0)
        let end = new Date(date)
        end.setHours(23,59, 59)
        return {begin, end}
    },

    findMonthLimits: function (date) {
        let begin = new Date()
        begin.setFullYear(date.getFullYear(), date.getMonth(), 1)

        let end = new Date(begin)
        end.setMonth(begin.getMonth()+1)
        end.setHours(0,0,0)

        //set first day of the previous month
        begin.setHours(3,0,0)

        return {begin, end}
    },

    findPeriodLimits: function(date, period) {
        let end = new Date(date)
        end.setHours(0,0,0)
        let  begin = new Date(end)
        end.setHours(23,59,59)

        for(let i=0;i<=period;++i)
            begin.setDate(begin.getDate()-1)

        return {begin, end}
    },

    findYearLimits: function (date) {
        let begin = new Date()
        begin.setFullYear(date.getFullYear(), 0, 1)

        let end = new Date(begin)
        end.setFullYear(begin.getFullYear()+1, 0, 1)
        end.setHours(0,0,0)

        begin.setHours(0,0,0)

        return {begin, end}
    },

    dayGroupedAttributes: function (db) {
        let att = []
        if(process.env.NODE_ENV == 'development') {
            att.push([db.Sequelize.fn('strftime', "%d", db.Sequelize.col('time')), 'day'])
            att.push([db.Sequelize.fn('strftime', "%m", db.Sequelize.col('time')), 'month'])
            att.push([db.Sequelize.fn('strftime', "%Y", db.Sequelize.col('time')), 'year'])
        }
        else {
            //sql
            att.push([db.Sequelize.fn('day', db.Sequelize.col('time')), 'day'])
            att.push([db.Sequelize.fn('month', db.Sequelize.col('time')), 'month'])
            att.push([db.Sequelize.fn('year', db.Sequelize.col('time')), 'year'])
        }
        return att
    },

    makeObjectFromArrayByKey: function(array, key){
        let ret = {}

        for(let i in array){
            if(!ret[array[i][key]]){
                ret[array[i][key]] = []
            }

            let obj = array[i]
            let k = obj[key]
            delete obj[key]
            ret[k].push(array[i])
        }

        return ret
    }

}

module.exports = helpers