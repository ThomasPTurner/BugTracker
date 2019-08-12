import React, { Component } from 'react';
import API from '../utils'


class PostBug extends Component {
    state = {
        posting: false,
        title: "",
        body: "",
    }
    render() {
        const { posting, title, body } = this.state
        return  posting ? (
            <form className="postBug">
                <input onChange={this.handleTitleChange} type="text" placeholder="enter a title" value={title}></input>
                <input onChange={this.handleBodyChange} type="text" placeholder="enter a description" value={body}></input>
                <button onClick={this.submit}>Submit</button>
            </form>
        ) 
        : (<button onClick={this.pressPostButton}>Post a new bug report</button>)
    }

  pressPostButton = () => {
    const { posting } = this.state
    this.setState({posting: posting ? false : true})
  }

  handleTitleChange = ({target}) => {
    this.setState({
        title: target.value
    })
  }

  handleBodyChange = ({target}) => {
    this.setState({
        body: target.value
    })
  }
  submit =  async (event) => {
    event.preventDefault()
    const {title, body} = this.state
    const newBug = await API.postBug(title, body)
    this.setState({
        title: "",
        body: "",
        posting: false
    })
    this.props.optimisticallyRenderBug()
    return newBug
  }
}

export default PostBug;