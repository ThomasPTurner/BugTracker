const { expect } = require('chai')
chai.use('chai-sorted')
const app = require('../backend/app')
const request = require('supertest')(app) 

describe('Bug Tracker App', ()=> {
    describe('/api', () => {
        describe('/bugs', ()=> {
            describe('GET', ()=> {
                it('200 on request to endpoint', ()=> {
                    return request
                        .get('/api/bugs')
                        .expect(200)
                })
            })
        })
    })
})