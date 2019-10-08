import React from 'react'
import { connect } from 'react-redux'
import RandomImage from './RandomImage'

class Game2 extends React.Component {
  state = {
    question: 1,
  
    
  }

  getRandomImage = (breed) => {
    return <RandomImage breed={breed}/>
    
  }

  checkAnswer = (event) => {
    console.log(event.target.alt)
    if(this.props.currentBreeds[0] === event.target.alt){
      console.log('correct anwser!')
    } 
    if(this.props.currentBreeds[0] !== event.target.alt){
      console.log('incorrect anwser!')
  }
}


  render() {

    return (
      <div>
        <h2>Question {this.state.question}</h2>
        <p>What dog is this?</p>
        <p>{this.props.currentBreeds[0]}</p>

          <img onClick={this.checkAnswer} src={this.getRandomImage(this.props.currentBreeds[0])} alt={this.props.currentBreeds[0]} key={this.props.currentBreeds[0]} />
          <img onClick={this.checkAnswer} src={this.getRandomImage(this.props.currentBreeds[1])} alt={this.props.currentBreeds[1]} key={this.props.currentBreeds[1]} />
          <img onClick={this.checkAnswer} src={this.getRandomImage(this.props.currentBreeds[2])} alt={this.props.currentBreeds[2]} key={this.props.currentBreeds[2]} />
        
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