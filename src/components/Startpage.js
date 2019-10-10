import React from "react";
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import getRandomElements from "../getRandomElements";
import { initThreeBreeds } from '../actions/breeds'
import "../css/choiceButton.css"
import Header from './Header'

class Startpage extends React.Component {
  getRandomNumber = () => {
    return Math.floor(Math.random() * this.props.dogbreeds.length);
  };
  handleClick = () => {
    this.props.initThreeBreeds(getRandomElements(this.props.dogbreeds, 3))
  }
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
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
          <p>Checkout pictures of dog breeds by pressing the list button</p>
          <p>Play the games to improve your dog knowledge</p>
          <p>Try to become a dog whisperer!</p>
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
export default connect(mapStateToProps, mapDispatchToProps)(Startpage);
