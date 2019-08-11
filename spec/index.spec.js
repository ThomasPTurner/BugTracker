const chai = require('chai')
const { expect } = chai
chai.use(require('chai-sorted'))
const app = require('../backend/app')
const request = require('supertest')(app)
const {connection} = require('../backend/connection')
process.env.NODE_ENV = 'test'
describe('Bug Tracker App', ()=> {
    beforeEach(() => connection.seed.run());
    after(()=> {
        connection.destroy()
    })
    describe('/api', () => {
        describe('/bugs', ()=> {
            describe('GET', ()=> {
                it('200 on request to endpoint', ()=> {
                    return request
                        .get('/api/bugs/')
                        .expect(200)
                })
                it('gets a list of bugs', ()=> {
                    return request
                        .get('/api/bugs/')
                        .then(({ body: { bugs } }) => {
                            expect(bugs.length).to.greaterThan(0)
                        })
                })
                it('bugs have correct properties' , () => {
                    const keys = ['id', 'title', 'body', 'open', 'assigned_to', 'created_at']
                    return request 
                        .get('/api/bugs/')
                        .then(({body: { bugs }})=>{
                            expect(bugs[0]).to.include.keys(keys)
                        })
                })
                // NICE TO HAVE : error handling bad endpoints, methods, ect.
            })
        })
    })
})