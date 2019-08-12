// error handlers

const catchAll500error = (err, req, res, next) => {
    console.log(err)
    res.status(500).send({status: 500, msg: "internal server error"})
}

// "controller" error handlers 

const catchAll404error = (req, res, next) => {
    res.status(404).send({status: 400, msg: "page not found"})
}

const badMethodError = (req, res, next) => {
    res.status(405).send({status: 405, msg: "method not allowed"})
}

module.exports = {
    badMethodError,
    catchAll500error,
    catchAll404error
}