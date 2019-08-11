const ENV = process.env.NODE_ENV || 'development'
const { DB_URL } = process.env
console.log(ENV)
const baseConfig = {
    client: 'pg',
    migrations: {
        directory : './db/migrations'
    },
    seeds: {
        directory : './db/seeds'
    }
}

const customConfig = {
    development: {
        connection: {
            database: 'bug_tracker',
            username: 'postgres',
            password: 'password'
        }
    },
    test: {
        connection: {
            database: 'bug_tracker_test',
            username: 'postgres',
            password: 'password'
        }
    },
    production: {
        connection : `${DB_URL}?ssl=true`
    }
}

module.exports = {...customConfig[ENV], ...baseConfig }