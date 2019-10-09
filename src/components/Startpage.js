import React from "react";
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import getRandomElements from "../getRandomElements";
import {initThreeBreeds} from '../actions/breeds'

class Startpage extends React.Component {
  getRandomNumber = () => {
    return Math.floor(Math.random() * this.props.dogbreeds.length);
  };
  handleClick = () => {
    this.props.initThreeBreeds(getRandomElements(this.props.dogbreeds,3))
  }
  render() {
    return (
      <div>
        <main>
          <button>
            <Link to="/dog-breeds">List</Link>
          </button>
          <button onClick={this.handleClick}>
            <Link to="/game1">Game 1</Link>
          </button>
          <button onClick={this.handleClick}>
            <Link to="/game2">Game 2</Link>
          </button>
          <button>Game 3</button>
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
const mapDispatchToProps = {
  initThreeBreeds,
}
export default connect(mapStateToProps,mapDispatchToProps)(Startpage);
