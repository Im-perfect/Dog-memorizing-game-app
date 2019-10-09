import React from 'react'
import { connect } from 'react-redux'
import superagent from "superagent";



class Game2 extends React.Component {
  state = {
    question: 1,
    breed: null,
    imgURL1: null,
    imgURL2: null,
    imgURL3: null,
    answers: [],
  }

  startGame = () => {
    const currentBreed = this.props.currentBreeds[
      Math.floor(Math.random() * this.props.currentBreeds.length)
    ]

    superagent
      .get(`https://dog.ceo/api/breed/${this.props.currentBreeds[0]}/images/random`)
      .then(response => this.setState({
        imgURL1: response.body.message,
        breed: currentBreed,
      }))
      .catch(err => console.log(err));

      superagent
      .get(`https://dog.ceo/api/breed/${this.props.currentBreeds[1]}/images/random`)
      .then(response => this.setState({
        imgURL2: response.body.message,
        breed: currentBreed,
      }))
      .catch(err => console.log(err));

      superagent
      .get(`https://dog.ceo/api/breed/${this.props.currentBreeds[2]}/images/random`)
      .then(response => this.setState({
        imgURL3: response.body.message,
        breed: currentBreed,
      }))
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.startGame()
  }


  checkAnswer = (event) => {
    if (this.state.breed === event.target.alt) {
      console.log('true!')
      this.setState({
       question: this.state.question + 1,
      })
      setTimeout(this.startGame, 1000)
    }
    if (this.state.breed !== event.target.alt) {
      console.log('false!')
      this.setState({
        question: this.state.question + 1,
      })
      setTimeout(this.startGame, 1000)
    }
  }

  render() {
    return (
      <div>
        <h2>Question {this.state.question}</h2>
        <p>What picture shows the <b>{this.state.breed}</b>?</p>

        <img onClick={this.checkAnswer} src={this.state.imgURL1} height='150px' alt={this.props.currentBreeds[0]} />
        <br></br>
        <img onClick={this.checkAnswer} src={this.state.imgURL2} height='150px' alt={this.props.currentBreeds[1]}/>
        <br></br>
        <img onClick={this.checkAnswer} src={this.state.imgURL3} height='150px' alt={this.props.currentBreeds[2]}/>
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    currentBreeds: state.currentBreeds,
  };
};

export default connect(mapStateToProps)(Game2)
