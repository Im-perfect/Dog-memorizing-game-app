import React from 'react'
import { connect } from 'react-redux'
import superagent from "superagent";
import Game2 from "./Game2";

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
    this.startGame()
  }


  checkAnswer = (event) => {
    if (this.state.breed === event.target.alt) {
      this.setState({
        question: this.state.question + 1,
        result: true
      })
      setTimeout(this.startGame, 500)
    }
    if (this.state.breed !== event.target.alt) {
      this.setState({
        question: this.state.question + 1,
        result: false
      })
      setTimeout(this.startGame, 500)
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
  };
};

export default connect(mapStateToProps)(StartGame2)