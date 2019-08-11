const { connection } = require('../connection') 

const fetchBugs = () => {
    return connection
        .select('*')
        .from('bugs')
}

const createBug = (bug) => { 
    return connection('bugs')
        .insert(bug)
        .returning('*')
}

module.exports = { fetchBugs, createBug }