import React, {Component} from 'react'
import { connect } from 'react-redux'
import {addName} from '../actions/addName'

class UserName extends Component {
  state = {
    name: ""
  }

  handleChange = (event) => {
    this.setState({ 
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addName(this.state.name)
    this.props.history.push("/startpage")
  }
  
  render(){
    return(
      <div id="user-name">
        <h1>Username</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="input" type='text' placeholder="Your name" onChange={this.handleChange} value={this.state.name} />
          <button className="choice-button primary narrow">Go!</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addName
}

export default connect(null, mapDispatchToProps)(UserName)