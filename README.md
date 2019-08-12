# Bug Tracker

A full stack web application to keep track up of bugs in a non specified system.
Created as part of a timed tech test.

Deployed versions here:

#### Front End:

https://bug-tracker-tech-test.netlify.com/

#### Back End:

https://bug-tracker-tech-test.herokuapp.com/api/bugs

### Prerequisites

```
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "knex": "^0.19.1",
    "pg": "^7.12.1",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "3.1.0",
    "axios": "^0.19.0",
    "moment": "^2.24.0"
```

a global installation of the following is required:

``
npm i pg knex nodemon netlify -g
``

### Installing

#### clone the repo

```
$ git clone https://github.com/ThomasPTurner/BugTracker.git
```

#### Create a file in the backend directory named "knexfile.js":

For ubutu users the file contents should be:
```
const ENV = process.env.NODE_ENV || 'development';
const { DB_URL } = process.env

const baseConfig = {
  client: 'pg',
  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};

const customConfig = {
  development: {
    connection: {
      database: 'bug_tracker',
      username : '<pg-username>',
      password : '<pg-password>'
    }
  },
  test: {
    connection: {
      database: 'bug_tracker_test',
      username : '<pg-username>',
      password : '<pg-password>',
    }
  },
  production: {
    connection: `${DB_URL}?ssl=true`
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
```

changing the username and password fields to the user's postgresSQL user and password.  macOS users can omit these fields, but the rest is still needed.

See postgress's documentation for now to set up postgress in your environment.

This will setup your database connections.

##### Run these scripts from the project directory:

```
$ npm i
$ npx run setup-dbs
$ npm run seed:dev
$ npm run dev
```
This will setup the database have the server listening. The default listen port is 9090

### To run the tests:

#### set up and run the tests:

Run the following commands in the project directory:

```
$ npm i -D
$ npm run setup-dbs
$ npm run seed:test
$ npm t
```

### Tests
These test check the served values and requested changes from the test database and the error handling of those requests.

example:

```
describe('api/bugs', () => {
    describe('GET', () => {
        it('gets a list of bugs', ()=> {
          return request
            .get('/api/bugs/')
            .then(({ body: { bugs }}) => {
              expect(bugs.length).to.greaterThan(0)
            })
        })
    });
}
```

This example test checks that a valid GET request will return an array of objects with the correct keys.

### Running locally

To have the app run locally enter the following commands in the project directory:

```
npm run dev
npm run frontend:start
```

Note that this will require port 9090 to be available.
These command will open the backend and then frontend servers.

### Deployment
This repo is set up to be hosted on heroku for the backend and database, netlify for the frontend.

To deploy another, follow the following steps:

#### Go to the backend directory and set up the heroku repository and database:

```
cd backend
heroku create
heroku addons:create heroku-postgresql:hobby-dev
```

#### push to the heroku remote

```
git add .
git commit -m "heroku initial commit"
git push heroku master

```


With the code pushed to a heroku repo and a heroku database added-on, one can check the database is linked to the repo with:

```
heroku config:get DATABASE_URL
```

To host elsewhere, the package.JSON script will need to be amended:

```
"seed:prod": "NODE_ENV=production DB_URL=$(heroku config:get DATABASE_URL) knex migrate:latest && NODE_ENV=production DB_URL=$(heroku config:get DATABASE_URL) knex seed:run",
```

#### Hosting the front end:

This was done with netlify. Simply run:


```
netlify deploy --prod
```
and follow the on screen promps. The build directory is in the `backend/build` folder.


### Built With

###### [React]
frontend framework
###### [PostgresSQL]
database interaction
###### [knex]
SQL query builder

## Contributing
Feel free to contribute.

### Versioning
Version control handled by git and github.

### Authors
Tom Turner - ThomasPTurner

### License
This project is licensed under the MIT License - see the LICENSE.md file for details
