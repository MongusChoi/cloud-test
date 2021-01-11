const { connection } = require('mongoose')
const { ObjectId } = require('mongodb')
const stringColl = connection.collection('string')

module.exports = {
    GetList: async() => {
        const list = await stringColl.find({}).toArray()
        return list
    }
}