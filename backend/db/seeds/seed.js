const data = require('../')

exports.seed = function(knex, PromiseConstructor) {
    return knex.migrate.rollback()
        .then(() => {
            return knex.migrate.latest()
        })
        .then(()=>{
            const insertUsers = knex('users').insert(data.users)
            const insertBugs = knex('bugs').insert(data.bugs)
            Promise.all([insertUsers, insertBugs])
        })
}
