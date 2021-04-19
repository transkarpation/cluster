const {Router} = require('express')
const Tank = require('../db/models/tank')
const faker = require('faker')

const r = Router()

r.get('/dbwrite', async (req, res) => {
    let tanks = []
    for (let i = 0; i < 10000; i++) {
        tanks.push({
            size: faker.datatype.string()
        })
    }
    let result = await Tank.insertMany(tanks)
    res.send(result)
})

r.get('/dbget', async (req, res) => {
    let result = await Tank.find({})
    res.send(result)
})

module.exports = r