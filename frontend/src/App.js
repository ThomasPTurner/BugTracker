import './App.css'
import React, { Component } from 'react';
import API from './utils'
import moment from 'moment';
import PostBug from './components/PostBug';

class App extends Component {
  state = {
    bugs : []
  }
  render() {
    const { bugs } = this.state
    return (
      <div className="App">
        <h3 className="header">Bug Tracker</h3>
        <main className="main">
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
        </main>
        <p className="footer">Created By Thomas Turner</p> 
      </div>
    );
  }
  componentDidMount() {
    API.getBugs()
      .then(bugs => {
        this.setState({bugs})
      })
  }
}

export default App;
