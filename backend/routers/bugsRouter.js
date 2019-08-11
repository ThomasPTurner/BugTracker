const { Router } = require('express')

const bugsRouter = Router()

bugsRouter.get('/', (req, res, next)=> {
    console.log('hi')
    res.status(200).send({hello: 'hello'})
})

module.exports = bugsRouter