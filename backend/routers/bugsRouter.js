const { Router } = require('express')
const bugsRouter = Router()
const { getBugs } = require('../controllers')

bugsRouter.get('/', getBugs)

module.exports = bugsRouter