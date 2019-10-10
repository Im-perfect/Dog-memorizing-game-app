import React, {Component} from 'react'
import {addName} from '../actions/addName'
import { connect } from 'react-redux'


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
      <div>
        <h1>Username</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.name}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addName
}

export default connect(null, mapDispatchToProps)(UserName)