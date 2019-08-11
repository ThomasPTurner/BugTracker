const data = require('../data')

exports.seed = () => {
    return knex.migrate.rollback()
        .then(() => {
            return knex.migate.latest()
        })
        .then(()=>{
            const insertUsers = knex('users').insert(data.users)
            const insertBugs = knex('bugs').inster(data.bugs)
            Promise.all([insertUsers, insertBugs])
        })
}