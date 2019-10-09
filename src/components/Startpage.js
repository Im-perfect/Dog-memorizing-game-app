import React from "react";
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import getRandomElements from "../getRandomElements";
import "../css/choiceButton.css"

class Startpage extends React.Component {
  getRandomNumber = () => {
    return Math.floor(Math.random() * this.props.dogbreeds.length);
  };
  handleClick = () => {
    this.props.dispatch({
      type: "INIT_THREE_BREEDS",
      payload: getRandomElements(this.props.dogbreeds,3)
    })
  }
  render() {
    return (
      <div>
        <main>
          <button className='choice-button primary'>
            <Link to="/dog-breeds">List</Link>
          </button>
          <button className='choice-button primary' onClick={this.handleClick}>
            <Link to="/game1">Game 1</Link>
          </button>
          <button className='choice-button primary' onClick={this.handleClick}>
            <Link to="/game2">Game 2</Link>
          </button>
          <button className='choice-button primary' >Game 3</button>
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dogbreeds: state.dogbreeds,
    currentBreeds: state.currentBreeds
  };
};
export default connect(mapStateToProps)(Startpage);
