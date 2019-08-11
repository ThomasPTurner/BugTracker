const  { fetchBugs } = require('../models')

exports.getBugs = (req, res, next)=> {
    return fetchBugs()
        .then(bugs => {
            return res.status(200).send({bugs})
        })
        .catch(next)
}

exports.postBugs = (req, res, next) => {
    return res.status(201).send()
}
