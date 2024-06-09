// create an express router in src/routes/user.route.js:
const express = require('express')
const { randomBytes } = require('crypto')

const USERS = []
const router = express.Router()

router.post('/', (req, res) => {
    const { firstName, lastName} = req.body
    const nowInIsoString = new Date().toISOString()
    const user = {
        id: randomBytes(8).toString('hex'),
        firstName,
        lastName,
        createdAt: nowInIsoString,
        updatedAt: nowInIsoString
    }
    USERS.push(user)

    res.status(201).send(user)
})

module.exports = router