const axios = require('axios')
const BASE_URL = (process.env.NODE_ENV === 'production') ? 'https://bug-tracker-tech-test.herokuapp.com/api' : 'http://localhost:9090/api'

const getBugs = async () => { 
    const {data: {bugs}} = await axios.get(`${BASE_URL}/bugs`)
    return bugs
  }

const postBug = async (title, body)=> {
    const {data: {bug}} = await axios.post(`${BASE_URL}/bugs`,{title, body})
    return bug
}      

export default {
    getBugs,
    postBug
}
