const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./routers/apiRouter.js')
const { catchAll500error, catchAll404error } = require('./errors') 

app.use(cors())
app.use(express.json())
app.use('/api', apiRouter )

app.use('/*' , catchAll404error)
app.use(catchAll500error)

module.exports = app