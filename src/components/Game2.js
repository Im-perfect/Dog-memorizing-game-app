import React from 'react'
import ResultGame2 from "./ResultGame2";

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

  render() {
    return (
      <div>
        <h2>Question {this.props.question}</h2>
        <p>Choose the right picture of the <b>{this.props.breed}</b>!</p>

        <img onClick={
            ()=>{this.props.checkAnswer(
              this.props.shuffledCurrentBreeds[0],
              this.props.breed)}
          } 
          src={this.props.imgURL1} 
          height='150px' 
          alt={this.props.shuffledCurrentBreeds[0]} />

        <img onClick={
          ()=>{this.props.checkAnswer(
            this.props.shuffledCurrentBreeds[1],
            this.props.breed)}
        } 
        src={this.props.imgURL2} 
        height='150px' 
        alt={this.props.shuffledCurrentBreeds[1]} />

        <img onClick={
          ()=>{this.props.checkAnswer(
            this.props.shuffledCurrentBreeds[2],
            this.props.breed)}
        } 
        src={this.props.imgURL3} 
        height='150px' 
        alt={this.props.shuffledCurrentBreeds[2]} />

        <ResultGame2 result={this.props.result} breed={this.props.breed}
          imgURL1={this.props.imgURL1}
          imgURL2={this.props.imgURL2}
          imgURL3={this.props.imgURL3} />
      </div >

    )
  }
}

export default Game2

