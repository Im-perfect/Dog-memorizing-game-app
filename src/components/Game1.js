import React from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import ResultGame1 from "./ResultGame1";
import {correctAnswer, wrongAnswer, resetAnswer} from '../actions/answers'
import {getRandomImageOf} from '../actions/breeds'

class Game1 extends React.Component {
  state = {
    breed: null,
    imgURL: null,
    answers: [],
    result: null
  };


  startGame = () => {
      const currentBreed = this.props.currentBreeds[
        Math.floor(Math.random() * this.props.currentBreeds.length)
      ]
    superagent
      .get(`https://dog.ceo/api/breed/${currentBreed}/images/random`)
      .then(res =>
        this.setState({
          imgURL: res.body.message,
          breed:currentBreed,
          answers: this.getAnswers(this.props.currentBreeds),
          result:null
        })
      )
      .catch(err => console.log(err));
  }
  

  componentDidMount() {
    // superagent
    //   .get(`https://dog.ceo/api/breed/${this.state.breed}/images/random`)
    //   .then(res =>
    //     this.setState({
    //       imgURL: res.body.message
    //     })
    //   )
    //   .catch(err => console.log(err));

    // this.setState({
    //   answers: this.getAnswers(this.props.currentBreeds)
    // });
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
      if(answer === this.state.breed) {
          this.setState({result:true})
          setTimeout(this.startGame, 1000)
      } else {
          this.setState({result:false})
          setTimeout(this.startGame, 2000)
      }
    // return answer === this.state.breed ? this.setState({
    //     result: true
    // }):this.setState({
    //     result: false
    // })
  };

  render() {
    console.log(this.state)

    this.props.getRandomImageOf(this.state.breed)
    return (
      <div>
        <h3>Which is the dog breed in the picture?</h3>
        <img src={this.state.imgURL} alt={this.state.breed} height='250px' />

        <h4>Choose from:</h4>
        <div>
          <button
            id="A"
            // onClick={() =>
            //   this.setState({ currentAnswer: this.state.answers[0] })
            // }
            onClick={()=>this.checkAnswer(this.state.answers[0])}
          >
            {this.state.answers[0]}
          </button>
          <button
            id="B"
            onClick={()=>this.checkAnswer(this.state.answers[1])}
          >
            {this.state.answers[1]}
          </button>
          <button
            id="C"
            onClick={()=>this.checkAnswer(this.state.answers[2])}
          >
            {this.state.answers[2]}
          </button>
        </div>
        <ResultGame1 result={this.state.result} breed={this.state.breed} />
      </div>
    );
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
}
export default connect(mapStateToProps,mapDispatchToProps)(Game1);
