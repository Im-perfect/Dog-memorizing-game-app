import React from "react";
import { connect } from "react-redux";
import superagent from "superagent";

class Game1 extends React.Component {
  state = {
    breed: this.props.currentBreeds[
      Math.floor(Math.random() * this.props.currentBreeds.length)
    ],
    imgURL: null,
    answers: [],
    currentAnswer: null
  };

  componentDidMount() {
    superagent
      .get(`https://dog.ceo/api/breed/${this.state.breed}/images/random`)
      .then(res =>
        this.setState({
          imgURL: res.body.message
        })
      )
      .catch(err => console.log(err));

      this.setState({
          answers: this.getAnswers(this.props.currentBreeds)
      })
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
    return answer === this.state.breed ? "WOOF! Good job!" : "BARK! NEE!!";
  };

  render() {
    return (
      <div>
        <h3>Which is the dog breed in the picture?</h3>
        <img src={this.state.imgURL} alt={this.state.breed} />
        
        <h4>Choose from:</h4>
        <div>
          <button id="A" onClick={()=>this.setState({ currentAnswer: this.state.answers[0] })}>
            {this.state.answers[0]}
          </button>
          <button id="B" onClick={()=>this.setState({ currentAnswer: this.state.answers[1] })}>
            {this.state.answers[1]}
          </button>
          <button id="C" onClick={()=>this.setState({ currentAnswer: this.state.answers[2] })}>
            {this.state.answers[2]}
          </button>
        </div>
        <button onClick={()=>this.checkAnswer(this.state.currentAnswer)}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentBreeds: state.currentBreeds
  };
};
export default connect(mapStateToProps)(Game1);
