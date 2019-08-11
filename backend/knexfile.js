const ENV = process.env.NODE_ENV || 'development'
const { DB_URL } = process.env
const baseConfig = {
    client: 'pg',
    migrations: {
        directory : 'backend/db/migrations'
    },
    seeds: {
        directory : 'backend/db/seeds'
    }
}

const customConfig = {
    development: {
        connection: {
            database: 'bug_tracker',
            username: 'tom',
            password: 'password'
        }
    },
    test: {
        connection: {
            database: 'bug_tracker_test',
            username: 'tom',
            password: 'password'
        }
    },
    production: {
        connection : `${DB_URL}?ssl=true`
    }
}

module.exports = {...customConfig[ENV], ...baseConfig }