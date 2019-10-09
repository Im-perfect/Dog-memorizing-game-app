import React from 'react'
import superagent from 'superagent'
import { connect } from "react-redux";
import Game1 from './Game1'
import { correctAnswer, wrongAnswer, resetAnswer } from "../actions/answers";
import { getRandomImageOf } from "../actions/breeds";

class StartGame1 extends React.Component {
    state = {
        breed: null,
        imgURL: null,
        answers: [],
        result: null
      };

    startGame = () => {
        const currentBreed = this.props.currentBreeds[
          Math.floor(Math.random() * this.props.currentBreeds.length)
        ];
        superagent
          .get(`https://dog.ceo/api/breed/${currentBreed}/images/random`)
          .then(res =>
            this.setState({
              imgURL: res.body.message,
              breed: currentBreed,
              answers: this.getAnswers(this.props.currentBreeds),
              result: null
            })
          )
          .catch(err => console.log(err));
      };

    componentDidMount(){
        this.startGame()
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
          setTimeout(this.startGame, 1000);
        } else {
          this.setState({ result: false });
          setTimeout(this.startGame, 2000);
        }
    };

    render () {
            this.props.getRandomImageOf(this.state.breed);
        return <Game1 breed={this.state.breed} imgURL={this.state.imgURL} answers={this.state.answers} result={this.state.result} checkAnswer={this.checkAnswer} />
    }
}

const mapStateToProps = state => {
  return {
    currentBreeds: state.currentBreeds
  };
};

const mapDispatchToProps = {
  correctAnswer,
  wrongAnswer,
  resetAnswer,
  getRandomImageOf
};

export default connect(mapStateToProps,
    mapDispatchToProps)(StartGame1)