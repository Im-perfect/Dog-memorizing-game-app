import React from "react";
import superagent from "superagent";
import { connect } from "react-redux";

import Game1 from "./Game1";
import {
  correctAnswer,
  wrongAnswer,
  levelUp,
  resetAnswers,
  dogLoveLevelUp,
} from "../actions/answers";
import { addMoreBreeds } from "../actions/breeds";
import { isFirstSeen, updateSeenBreeds, resetFirstSeen } from "../actions/isFirstSeen";
import getRandomElements from "../getRandomElements";

class StartGame1 extends React.Component {
  state = {
    breed: null,
    imgURL: null,
    answers: [],
    result: null,
    isDisabled: ['initial', 'initial' ,'initial'],
    question: 1
  };

  startGame = () => {
    const shuffleAnswers = this.getAnswers(this.props.currentBreeds);
    const currentBreed = shuffleAnswers[Math.floor(Math.random() * 3)];

    if (!this.props.seenBreeds.includes(currentBreed)) {
      this.props.updateSeenBreeds(currentBreed);
      this.props.isFirstSeen(true);
    } else {
      this.props.isFirstSeen(false);
    }

    superagent
      .get(`https://dog.ceo/api/breed/${currentBreed}/images/random`)
      .then(res =>
        this.setState({
          imgURL: res.body.message,
          answers: shuffleAnswers,
          breed: currentBreed,
          result: null,
          isDisabled: ['initial', 'initial' ,'initial']
        })
      )
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.props.resetAnswers();
    this.startGame();
  }

  componentWillUnmount() {
    this.props.resetFirstSeen();
  }

  getAnswers = currentBreeds => {
    const newAnswers = [];
    const popCurrentBreeds = [...currentBreeds];
    for (let i = 0; i < 3; i++) {
      const random = Math.floor(Math.random() * popCurrentBreeds.length);
      newAnswers.push(popCurrentBreeds[random]);
      popCurrentBreeds.splice(random, 1);
    }
    return newAnswers;
  };

  checkAnswer = answer => {
    if (answer === this.state.breed) {
      this.setState({ 
        result: true,
        question: this.state.question + 1 
      });
      this.props.correctAnswer();
      if (this.props.streaks === 1) {
        this.props.levelUp();
        this.props.addMoreBreeds(
          getRandomElements(
            this.props.dogbreeds.filter(
              breed => !this.props.currentBreeds.includes(breed)
            ),
            3
          )
        );
      }
      if(this.props.answers.allrightAnswers > 2){
        this.props.dogLoveLevelUp('small dog lover')
      }
      if(this.props.answers.allrightAnswers > 4){
        this.props.dogLoveLevelUp('big dog lover')
      }
      if(this.props.answers.allrightAnswers > 6){
        this.props.dogLoveLevelUp('dog whisperer')
      }
      setTimeout(this.startGame, 1000);
    } else {
      this.setState({ 
        result: false,
        question: this.state.question + 1 
      });
      this.props.wrongAnswer();
      setTimeout(this.startGame, 2000);
    }
  };

  setIsDisabled=(array) => {
      this.setState({
          isDisabled:[...array]
      })
  }

  render() {
    return (
      <Game1
        breed={this.state.breed}
        imgURL={this.state.imgURL}
        answers={this.state.answers}
        result={this.state.result}
        checkAnswer={this.checkAnswer}
        isDisabled={this.state.isDisabled}
        setIsDisabled={this.setIsDisabled}
        question={this.state.question}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    dogbreeds: state.dogbreeds,
    currentBreeds: state.currentBreeds,
    streaks: state.answers.streaks,
    seenBreeds: state.firstSeen.seenBreeds,
    answers: state.answers,
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
  resetFirstSeen,
  dogLoveLevelUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartGame1);
