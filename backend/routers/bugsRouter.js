const { Router } = require('express')
const bugsRouter = Router()
const { getBugs, postBugs } = require('../controllers')
const { badMethodError } = require('../errors')

bugsRouter.route('/')
    .get(getBugs)
    .post(postBugs)
    .all(badMethodError)

module.exports = bugsRouter