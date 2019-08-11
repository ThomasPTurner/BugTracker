const  { fetchBugs, createBug } = require('../models')

exports.getBugs = (req, res, next)=> {
    return fetchBugs()
        .then(bugs => {
            return res.status(200).send({bugs})
        })
        .catch(next)
}

exports.postBugs = ({body: { title, body }}, res, next) => {
    return createBug({ title, body })
        .then((bug) => {
            return res.status(201).send({bug})
        })
        .catch(next)
}
