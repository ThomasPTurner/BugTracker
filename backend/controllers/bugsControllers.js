const  { fetchBugs } = require('../models')

exports.getBugs = (req, res, next)=> {
    return fetchBugs()
        .then(bugs => {
            return res.status(200).send({bugs})
        })
        .catch(console.log)
}

