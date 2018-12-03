const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000

if(process.env.NODE_ENV !== 'production') require('dotenv').load()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))

app.use((req, res, next) => {
    next({status:404, message: "Couldn't find it, bro"})
})

app.use((err, req, res, next) => {
    const status = 500 || err.status
    req.status(status).send(err.message)
})

const listener = () => console.log(`Getting lit on port ${port}`)
app.listen(port, listener)