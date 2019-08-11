import './App.css'
import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment';
import PostBug from './components/PostBug';

const BASE_URL = 'http://localhost:9090/api'

class App extends Component {
  state = {
    bugs : []
  }
  render() {
    const {bugs, posting} = this.state
    return (
      <div className="App">
        <h3 className="header">Bug Tracker</h3>
        <body className="body">
          <PostBug />
          {
            bugs.map(({id, title, body, created_at, assigned_to, open}) => {
              return (
                <div className='bugCard' key={`bug:${id}`}>
                  <p>Title: {title}</p>
                  <p>Description: {body}</p>
                  <p>{assigned_to ? `Assigned to ${assigned_to}` : 'Unassigned' }</p>
                  <p>Created: {moment(created_at).format('DD/MM/YYYY HH:MM')}</p>
                  <p>Status: {open ? 'open' : 'closed' }</p>
                </div>
              )
            })
          }
        </body>
        <p className="footer">Created By Thomas Turner</p> 
      </div>
    );
  }
  componentDidMount() {
    this.getBugs()
  }

  getBugs = async () => {
    const {data: {bugs}} = await axios.get(`${BASE_URL}/bugs`)
    this.setState({ bugs })
  }
}

export default App;
