import React from 'react'
import { connect } from 'react-redux'
import superagent from "superagent";
import Game2 from "./Game2";
import {correctAnswer, wrongAnswer, levelUp, resetAnswers} from '../actions/answers'
import {addMoreBreeds} from '../actions/breeds'
import getRandomElements from '../getRandomElements'

class StartGame2 extends React.Component {
  state = {
    question: 1,
    breed: null,
    imgURL1: null,
    imgURL2: null,
    imgURL3: null,
    shuffledCurrentBreeds: [],
    result: null,
  } 


  startGame = () => {
    const shuffledCurrentBreeds = [...this.props.currentBreeds].sort(() => 0.5 - Math.random()).slice(0, 3)
    const currentBreed = shuffledCurrentBreeds[Math.floor(Math.random() * shuffledCurrentBreeds.length)]
  
    superagent
      .get(`https://dog.ceo/api/breed/${shuffledCurrentBreeds[0]}/images/random`)
      .then(response =>  this.setState({
        breed: currentBreed,
        shuffledCurrentBreeds: shuffledCurrentBreeds,
        result: null,
        imgURL1: response.body.message,
      }) )
      .catch(err => console.log(err));

    superagent
      .get(`https://dog.ceo/api/breed/${shuffledCurrentBreeds[1]}/images/random`)
      .then(response =>  this.setState({
        imgURL2: response.body.message,
      }) )
      .catch(err => console.log(err));

    superagent
      .get(`https://dog.ceo/api/breed/${shuffledCurrentBreeds[2]}/images/random`)
      .then(response =>  this.setState({
        imgURL3: response.body.message,
      }) )
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.props.resetAnswers()
    this.startGame()
  }


  checkAnswer = (option,breed) => {
    if (breed === option) {
      this.setState({
        question: this.state.question + 1,
        result: true
      })
      this.props.correctAnswer()
      if (this.props.streaks === 3) {
        this.props.levelUp()
        this.props.addMoreBreeds(getRandomElements(
          this.props.dogbreeds
            .filter(breed => !this.props.currentBreeds.includes(breed))
          , 3)
        )
      }
      setTimeout(this.startGame, 1000)
    }
    if(this.state.breed !== option) {
      this.setState({
        question: this.state.question + 1,
        result: false
      })
      this.props.wrongAnswer()
      setTimeout(this.startGame, 2000)
    }
  }



  render() {
    return (
      <div>
        <Game2
        breed={this.state.breed}
        checkAnswer={this.checkAnswer}
        imgURL1={this.state.imgURL1}
        imgURL2={this.state.imgURL2}
        imgURL3={this.state.imgURL3}
        question={this.state.question}
        shuffledCurrentBreeds={this.state.shuffledCurrentBreeds}
        result={this.state.result}
        />
      </div >

    )
  }
}

const mapStateToProps = state => {
  return {
    currentBreeds: state.currentBreeds,
    dogbreeds: state.dogbreeds,
    streaks: state.answers.streaks
  };
};

const mapDispatchToProps = {
  correctAnswer,
  wrongAnswer,
  levelUp,
  resetAnswers,
  addMoreBreeds
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGame2)