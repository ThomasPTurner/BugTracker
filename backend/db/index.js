const ENV = process.env.NODE_ENV || 'development'
let data = ENV
if (ENV === 'production') data = 'development'
module.exports = require(`./${data}-data/`)