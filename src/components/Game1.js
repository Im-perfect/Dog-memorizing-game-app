import React from "react";
import ResultGame1 from "./ResultGame1";
import "../css/choiceButton.css";
import "../css/main.css"
import Hint from "./Hint"

class Game1 extends React.Component {

  keyBoardHandler = (event) => {
    switch (event.code) {
      case 'KeyA':
        this.props.checkAnswer(this.props.answers[0])
        break
      case 'KeyS':
        this.props.checkAnswer(this.props.answers[1])
        break
      case 'KeyD':
        this.props.checkAnswer(this.props.answers[2])
        break
      default:
        break;
    }
  }

  componentDidMount(){
    document.body.addEventListener('keypress', this.keyBoardHandler)
  }
  componentWillUnmount(){
    document.body.removeEventListener('keypress', this.keyBoardHandler)
  }
  
  removeOneAnswer = () => {
    const rightIndex = this.props.answers.indexOf(this.props.breed);
    const wrongIndex = [0,1,2].filter(i => i !== rightIndex)[Math.round(Math.random())]
    const newArray = [...this.props.isDisabled]
    newArray[wrongIndex] = "none" 
    this.props.setIsDisabled(newArray)
  }

  render() {

    return (
      <div className="game-area">
        <h2>Question {this.props.question}</h2>
        <h3>Which is the dog breed in the picture?</h3>
        <img src={this.props.imgURL} alt={this.props.breed} height="250px" />
        <Hint removeOneAnswer={this.removeOneAnswer} />

        <div>
          <button
            className="choice-button" style={{display:this.props.isDisabled[0]}}
            id="A"
            onClick={() => this.props.checkAnswer(this.props.answers[0])}
          >
            {this.props.answers[0]}
          </button>
          <button
            className="choice-button" style={{display:this.props.isDisabled[1]}}
            id="B"
            onClick={() => this.props.checkAnswer(this.props.answers[1])}
          >
            {this.props.answers[1]}
          </button>
          <button
            className="choice-button" style={{display:this.props.isDisabled[2]}}
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
