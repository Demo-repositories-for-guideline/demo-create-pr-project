// create an express router in src/routes/user.route.js:
const express = require('express')
const { randomBytes } = require('crypto')

const USERS = []
const router = express.Router()

router.put('/', (req, res) => {
    const { firstName, lastName} = req.body
    const user = {
        id: randomBytes(8).toString('hex'),
        firstName,
        lastName,
        createdAt: Date.now(),
        updatedAt: Date.now()
    }
    USERS.push(user)

    res.status(201).send(user)
})

module.exports = router