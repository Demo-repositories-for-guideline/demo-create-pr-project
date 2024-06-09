const express = require('express')
const userRouter = require('./routes/user.route')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/users', userRouter)

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})