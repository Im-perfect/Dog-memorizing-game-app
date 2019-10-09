import React from 'react'
import { connect } from 'react-redux'
import GetRandomImage from './GetRandomImage'


class Game2 extends React.Component {


  state = {
    question: 1,
    breed: this.props.currentBreeds[
      Math.floor(Math.random() * this.props.currentBreeds.length)
    ],
    breedImages: [this.props.currentBreeds[1], this.props.currentBreeds[2], this.props.currentBreeds[0]],
  }

  checkAnswer = (event) => {
    //console.log(event)
    if (this.state.breed === event.target.alt) {
      this.setState({
        question: this.state.question + 1,
        breed: this.props.currentBreeds[
          Math.floor(Math.random() * this.props.currentBreeds.length)
        ],
        breedImages: [this.props.currentBreeds[0], this.props.currentBreeds[1], this.props.currentBreeds[2]],
      })
    }
    if (this.state.breed !== event.target.alt) {
      this.setState({
        question: this.state.question + 1,
        breed: this.props.currentBreeds[
          Math.floor(Math.random() * this.props.currentBreeds.length)
        ],
        breedImages: [this.props.currentBreeds[2], this.props.currentBreeds[0], this.props.currentBreeds[1]],
      })
    }
  }

  render() {
console.log(this.state.breedImages)
    return (
      <div>
        <h2>Question {this.state.question}</h2>
        <p>What picture shows the <b>{this.state.breed}</b>?</p>
            
      <GetRandomImage breed={this.state.breedImages[0]} checkAnswer={this.checkAnswer} />,
      <GetRandomImage breed={this.state.breedImages[1]} checkAnswer={this.checkAnswer} />,
      <GetRandomImage breed={this.state.breedImages[2]} checkAnswer={this.checkAnswer} />
    

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

// This game must show the user the name of a breed and 3 images of dogs. 
// The user must select the correct image that matches the breed name.