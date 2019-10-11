import React from 'react'
import ResultGame2 from "./ResultGame2";
import Hint from "./Hint"

class Game2 extends React.Component {

  keyBoardHandler = (event) => {
    switch (event.code) {
      case 'KeyA':
        this.props.checkAnswer(
          this.props.shuffledCurrentBreeds[0],
          this.props.breed
        )
        break
      case 'KeyS':
        this.props.checkAnswer(
          this.props.shuffledCurrentBreeds[1],
          this.props.breed
        )
        break
      case 'KeyD':
        this.props.checkAnswer(
          this.props.shuffledCurrentBreeds[2],
          this.props.breed
        )
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
    const rightIndex = this.props.shuffledCurrentBreeds.indexOf(this.props.breed);
    const wrongIndex = [0,1,2].filter(i => i !== rightIndex)[Math.round(Math.random())]
    const newArray = [...this.props.isDisabled]
    newArray[wrongIndex] = "none" 
    this.props.setIsDisabled(newArray)
  }
  
  render() {
    return (
      <div className="game-area">
        <h2>Question {this.props.question}</h2>
        <h3>Choose the right picture of the <strong>{this.props.breed}</strong>!</h3>

        <img onClick={
            ()=>{this.setState({ showHint: false });
            this.props.checkAnswer(
              this.props.shuffledCurrentBreeds[0],
              this.props.breed)}
          } 
          src={this.props.imgURL1} 
          height='150px' 
          alt={this.props.shuffledCurrentBreeds[0]} style={{display:this.props.isDisabled[0]}} />

        <img onClick={
          ()=>{this.setState({ showHint: false });
          this.props.checkAnswer(
            this.props.shuffledCurrentBreeds[1],
            this.props.breed)}
        } 
        src={this.props.imgURL2} 
        height='150px' 
        alt={this.props.shuffledCurrentBreeds[1]} style={{display:this.props.isDisabled[1]}} />

        <img onClick={
          ()=>{this.setState({ showHint: false });
          this.props.checkAnswer(
            this.props.shuffledCurrentBreeds[2],
            this.props.breed)}
        } 
        src={this.props.imgURL3} 
        height='150px' 
        alt={this.props.shuffledCurrentBreeds[2]} style={{display:this.props.isDisabled[2]}} />

        <Hint removeOneAnswer={this.removeOneAnswer} />
        
        <ResultGame2 result={this.props.result} breed={this.props.breed}
          imgURL1={this.props.imgURL1}
          imgURL2={this.props.imgURL2}
          imgURL3={this.props.imgURL3} />
      </div >

    )
  }
}

export default Game2

