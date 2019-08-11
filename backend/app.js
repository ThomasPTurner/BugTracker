const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./routers/apiRouter.js')

app.use(cors())
app.use(express.json())
app.use('/api', apiRouter )


app.use('/*' , (err, req, res, next) => {
    res.status(404).send({status: 400, msg: "page not found"})
})
app.use((err, req, res, next) => {
    res.status(500).send({status: 500, msg: "internal server error"})
})

module.exports = app