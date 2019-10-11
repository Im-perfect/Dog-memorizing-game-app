import React from 'react'
import superagent from "superagent";
import { connect } from "react-redux";
import Game1 from "./Game1";
import Game2 from "./Game2";
import {
  correctAnswer,
  wrongAnswer,
  levelUp,
  resetAnswers
} from "../actions/answers";
import { addMoreBreeds } from "../actions/breeds";
import getRandomElements from "../getRandomElements";
import {
  isFirstSeen,
  updateSeenBreeds,
  resetFirstSeen
} from "../actions/isFirstSeen";

class StartGame3 extends React.Component {
  state = {
    breed: null,
    imgURL: null,
    options: [],
    question: 1,
    imgURL1: null,
    imgURL2: null,
    imgURL3: null,
    result: null,
    isDisabled: ['initial', 'initial', 'initial']
  }
  startGame = () => {
    // get the three options to choose from
    const options =
      [...this.props.currentBreeds]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
    //get the currentBreed
    //choose randomly from the three options
    const currentBreed = options[Math.floor(Math.random() * 3)]
    // get a image of the current Breed
    // set options, currentBreed, and imgUrl of currentBreed in state
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
          options: options,
          breed: currentBreed,
          isDisabled: ['initial', 'initial', 'initial']
        })
      )
      .catch(err => console.log(err));
    // get imgUrl1 for option1
    superagent
      .get(`https://dog.ceo/api/breed/${options[0]}/images/random`)
      .then(response => this.setState({
        imgURL1: response.body.message,
      }))
      .catch(err => console.log(err));
    // get imgUrl2 for option2
    superagent
      .get(`https://dog.ceo/api/breed/${options[1]}/images/random`)
      .then(response => this.setState({
        imgURL2: response.body.message,
      }))
      .catch(err => console.log(err));
    // get imgUrl3 for option3
    superagent
      .get(`https://dog.ceo/api/breed/${options[2]}/images/random`)
      .then(response => this.setState({
        imgURL3: response.body.message,
        isDisabled: ['initial', 'initial', 'initial']
      }))
      .catch(err => console.log(err));
    this.setState({ result: null })
  }
  componentDidMount() {
    this.props.resetAnswers()
    this.startGame()
  }
  checkAnswerGame1 = answer => {
    if (answer === this.state.breed) {
      this.setState({ result: true });
      this.props.correctAnswer();
      if (this.props.streaks === 4) {
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
      if (this.props.answers.allrightAnswers > 7) {
        this.props.dogLoveLevelUp('Dog lover')
      }
      if (this.props.answers.allrightAnswers > 12) {
        this.props.dogLoveLevelUp('Dog whisperer')
      }
      setTimeout(this.startGame, 1000);
    } else {
      this.setState({ result: false });
      this.props.wrongAnswer();
      setTimeout(this.startGame, 2000);
    }
  }
  checkAnswerGame2 = (option, breed) => {
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
      setTimeout(this.startGame, 1000)
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
    if (Math.floor(Math.random() * 2) === 0) {
      return <Game1
        breed={this.state.breed}
        imgURL={this.state.imgURL}
        answers={this.state.options}
        result={this.state.result}
        checkAnswer={this.checkAnswerGame1}
        isDisabled={this.state.isDisabled}
        setIsDisabled={this.setIsDisabled}
        question={this.state.question}
      />
    }
    return <Game2
      breed={this.state.breed}
      checkAnswer={this.checkAnswerGame2}
      imgURL1={this.state.imgURL1}
      imgURL2={this.state.imgURL2}
      imgURL3={this.state.imgURL3}
      question={this.state.question}
      shuffledCurrentBreeds={this.state.options}
      result={this.state.result}
      isDisabled={this.state.isDisabled}
      setIsDisabled={this.setIsDisabled}
    />
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
export default connect(mapStateToProps, mapDispatchToProps)(StartGame3)