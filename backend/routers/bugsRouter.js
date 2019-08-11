const { Router } = require('express')
const bugsRouter = Router()
const { getBugs, postBugs } = require('../controllers')

bugsRouter.route('/')
    .get(getBugs)
    .post(postBugs)

module.exports = bugsRouter