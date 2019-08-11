const { connection } = require('../connection') 

const fetchBugs = () => {
    return connection
        .select('*')
        .from('bugs')
}

module.exports = { fetchBugs }