const { bugsData, usersData} = require('../')

exports.seed = function(knex, PromiseConstructor) {
    return knex.migrate.rollback()
        .then(() => {
            return knex.migrate.latest()
        })
        .then(()=>{
            const insertUsers = knex('users').insert(usersData)
            const insertBugs = knex('bugs').insert(bugsData)
            Promise.all([insertUsers, insertBugs])
        })
}
