const { Router } = require('express')
const bugsRouter = require('./bugsRouter.js')

const apiRouter = Router()

apiRouter.use('/bugs', bugsRouter)

module.exports = apiRouter