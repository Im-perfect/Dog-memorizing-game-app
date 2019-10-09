import React from "react";
import ResultGame1 from "./ResultGame1";
import "../css/choiceButton.css";

class Game1 extends React.Component {
  render() {
    return (
      <div>
        <h3>Which is the dog breed in the picture?</h3>
        <img src={this.props.imgURL} alt={this.props.breed} height="250px" />

        <h4>Choose from:</h4>
        <div>
          <button
            className="choice-button"
            id="A"
            onClick={() => this.props.checkAnswer(this.props.answers[0])}
          >
            {this.props.answers[0]}
          </button>
          <button
            className="choice-button"
            id="B"
            onClick={() => this.props.checkAnswer(this.props.answers[1])}
          >
            {this.props.answers[1]}
          </button>
          <button
            className="choice-button"
            id="C"
            onClick={() => this.props.checkAnswer(this.props.answers[2])}
          >
            {this.props.answers[2]}
          </button>
        </div>
        <ResultGame1 result={this.props.result} breed={this.props.breed} />
      </div>
    );
  }
}
export default Game1;
