const chai = require('chai')
const { expect } = chai
chai.use(require('chai-sorted'))
const app = require('../backend/app')
const request = require('supertest')(app)
// const {connection} = require('../connection')


describe('Bug Tracker App', ()=> {
    after(()=> {})
    describe('/api', () => {
        describe('/bugs', ()=> {
            describe('GET', ()=> {
                it('200 on request to endpoint', ()=> {
                    return request
                        .get('/api/bugs/')
                        .expect(200)
                })
            })
        })
    })
})