import React from "react";
import superagent from "superagent";
import { connect } from "react-redux";

import Game1 from './Game1'
import {correctAnswer, wrongAnswer, levelUp, resetAnswers} from '../actions/answers'
class StartGame1 extends React.Component {
  state = {
    breed: null,
    imgURL: null,
    answers: [],
    result: null
  };

  startGame = () => {
    const shuffleAnswers = this.getAnswers(this.props.currentBreeds);
    const currentBreed = shuffleAnswers[Math.floor(Math.random() * 3)];

    superagent
      .get(`https://dog.ceo/api/breed/${currentBreed}/images/random`)
      .then(res =>
        this.setState({
          imgURL: res.body.message,
          answers: shuffleAnswers,
          breed: currentBreed,
          result: null
        })
      )
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.props.resetAnswers() 
    this.startGame();
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
          this.setState({ result: true });
          this.props.correctAnswer()
            if(this.props.streaks===4){
              this.props.levelUp()
            }
          setTimeout(this.startGame, 1000);
        } else {
          this.setState({ result: false });
          this.props.wrongAnswer()
          setTimeout(this.startGame, 2000);
        }
    };

  render() {
    return (
      <Game1
        breed={this.state.breed}
        imgURL={this.state.imgURL}
        answers={this.state.answers}
        result={this.state.result}
        checkAnswer={this.checkAnswer}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentBreeds: state.currentBreeds,
    streaks: state.answers.streaks
  };
};

const mapDispatchToProps = {
  correctAnswer,
  wrongAnswer,
  levelUp,
  resetAnswers
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartGame1);
