import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import getRandomElements from "../getRandomElements";
import { initThreeBreeds } from "../actions/breeds";
import "../css/choiceButton.css";
import Header from "./Header";

class Startpage extends React.Component {
  getRandomNumber = () => {
    return Math.floor(Math.random() * this.props.dogbreeds.length);
  };
  handleClick = () => {
    this.props.initThreeBreeds(getRandomElements(this.props.dogbreeds, 3));
  };
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div id="info">
          <p>Checkout pictures of dog breeds by pressing the list button</p>
          <p>Play the games to improve your dog knowledge</p>
          <p>Try to become a dog whisperer!</p>
        </div>
        <main>
          <Link to="/dog-breeds">
            <button className="choice-button primary coral">List</button>
          </Link>
          <Link to="/game1">
            <button
              className="choice-button primary"
              onClick={this.handleClick}
            >
              Game 1
            </button>
          </Link>
          <Link to="/game2">
            <button
              className="choice-button primary"
              onClick={this.handleClick}
            >
              Game 2
            </button>
          </Link>
          <Link to="/game3">
            <button
              className="choice-button primary"
              onClick={this.handleClick}
            >
              Game 3
            </button>
          </Link>
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
  initThreeBreeds
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Startpage);
