import React from 'react'
import { connect } from 'react-redux'
import superagent from "superagent";
import Game2 from "./Game2";
import { correctAnswer, wrongAnswer, levelUp, resetAnswers } from '../actions/answers'
import { addMoreBreeds } from '../actions/breeds'
import getRandomElements from '../getRandomElements'
import { isFirstSeen, updateSeenBreeds, resetFirstSeen } from "../actions/isFirstSeen";

class StartGame2 extends React.Component {
  state = {
    question: 1,
    breed: null,
    imgURL1: null,
    imgURL2: null,
    imgURL3: null,
    shuffledCurrentBreeds: [],
    result: null,
    isDisabled: ['initial', 'initial', 'initial']
  }

  startGame = () => {
    const shuffledCurrentBreeds = [...this.props.currentBreeds].sort(() => 0.5 - Math.random()).slice(0, 3)
    const currentBreed = shuffledCurrentBreeds[Math.floor(Math.random() * shuffledCurrentBreeds.length)]

    if (!this.props.seenBreeds.includes(currentBreed)) {
      this.props.updateSeenBreeds(currentBreed);
      this.props.isFirstSeen(true);
    } else {
      this.props.isFirstSeen(false);
    }

    superagent
      .get(`https://dog.ceo/api/breed/${shuffledCurrentBreeds[0]}/images/random`)
      .then(response => this.setState({
        breed: currentBreed,
        shuffledCurrentBreeds: shuffledCurrentBreeds,
        result: null,
        imgURL1: response.body.message,
      }))
      .catch(err => console.log(err));

    superagent
      .get(`https://dog.ceo/api/breed/${shuffledCurrentBreeds[1]}/images/random`)
      .then(response => this.setState({
        imgURL2: response.body.message,
      }))
      .catch(err => console.log(err));

    superagent
      .get(`https://dog.ceo/api/breed/${shuffledCurrentBreeds[2]}/images/random`)
      .then(response => this.setState({
        imgURL3: response.body.message,
        isDisabled: ['initial', 'initial', 'initial']
      }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.props.resetAnswers()
    this.startGame()
  }

  componentWillUnmount() {
    this.props.resetFirstSeen();
  }

  checkAnswer = (option, breed) => {
    if (breed === option) {
      this.setState({
        question: this.state.question + 1,
        result: true
      })
      this.props.correctAnswer()
      if (this.props.streaks === 4) {
        this.props.levelUp()
        this.props.addMoreBreeds(getRandomElements(
          this.props.dogbreeds
            .filter(breed => !this.props.currentBreeds.includes(breed))
          , 3)
        )
      }
      if (this.props.answers.allrightAnswers > 7) {
        this.props.dogLoveLevelUp('Dog lover')
      }
      if (this.props.answers.allrightAnswers > 12) {
        this.props.dogLoveLevelUp('Dog whisperer')
      }
      setTimeout(this.startGame, 2000)
    }
    if (this.state.breed !== option) {
      this.setState({
        question: this.state.question + 1,
        result: false
      })
      this.props.wrongAnswer()
      setTimeout(this.startGame, 2000)
    }
  }

  setIsDisabled = (array) => {
    this.setState({
      isDisabled: [...array]
    })
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
          isDisabled={this.state.isDisabled}
          setIsDisabled={this.setIsDisabled}
        />
      </div >

    )
  }
}

const mapStateToProps = state => {
  return {
    currentBreeds: state.currentBreeds,
    dogbreeds: state.dogbreeds,
    streaks: state.answers.streaks,
    seenBreeds: state.firstSeen.seenBreeds
  };
};

const mapDispatchToProps = {
  correctAnswer,
  wrongAnswer,
  levelUp,
  resetAnswers,
  addMoreBreeds,
  updateSeenBreeds,
  isFirstSeen,
  resetFirstSeen
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGame2)