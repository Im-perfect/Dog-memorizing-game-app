import React from "react";
import {Link} from "react-router-dom"
import {connect} from 'react-redux'

class Startpage extends React.Component {
  getRandomNumber = () => {
    return Math.floor(Math.random()*this.props.dogbreeds.length)
  }
  handleClick = () => {
    this.props.dispatch({
      type: "INIT_THREE_BREEDS",
      payload: [this.props.dogbreeds[this.getRandomNumber()],
      this.props.dogbreeds[this.getRandomNumber()],
      this.props.dogbreeds[this.getRandomNumber()]] 
    })
  }
  render() {
    return (
      <div>
      <main>
      <button>
      <Link to="/dog-breeds">List</Link>
      </button>
      <button onClick={this.handleClick}>Game 1</button>
      <button>Game 2</button>
      <button>Game 3</button>
      </main>
      </div>
      );
    }
  }
  const mapStateToProps = (state) => {
    return {
      dogbreeds: state.dogbreeds,
      currentBreeds: state.currentBreeds
    }
  }
  export default connect(mapStateToProps)(Startpage)
  