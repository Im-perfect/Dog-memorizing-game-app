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
import { updateSeenBreeds } from "../actions/handleSeenBreeds";
import { isFirstSeen } from "../actions/isFirstSeen";
import getRandomElements from "../getRandomElements";

class StartGame3 extends React.Component{
    state = {
        breed: null,
        imgURL: null,
        options: [],
        question: 1,
        imgURL1: null,
        imgURL2: null,
        imgURL3: null,
        result: null,
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
        superagent
        .get(`https://dog.ceo/api/breed/${currentBreed}/images/random`)
        .then(res =>
          this.setState({
            imgURL: res.body.message,
            options: options,
            breed: currentBreed,
          })
        )
        .catch(err => console.log(err));
        // get imgUrl1 for option1
        superagent
        .get(`https://dog.ceo/api/breed/${options[0]}/images/random`)
        .then(response =>  this.setState({
          imgURL1: response.body.message,
        }))
        .catch(err => console.log(err));
        // get imgUrl2 for option2
        superagent
        .get(`https://dog.ceo/api/breed/${options[1]}/images/random`)
        .then(response =>  this.setState({
          imgURL2: response.body.message,
        }))
        .catch(err => console.log(err));
        // get imgUrl3 for option3
        superagent
        .get(`https://dog.ceo/api/breed/${options[2]}/images/random`)
        .then(response =>  this.setState({
          imgURL3: response.body.message,
        }))
        .catch(err => console.log(err));    
    }
    componentDidMount(){
      this.props.resetAnswers()
      this.startGame()
    }
    render(){
        return 'game3'
    }
}
const mapStateToProps = state => {
  return {
    currentBreeds: state.currentBreeds,
    dogbreeds: state.dogbreeds,
    streaks: state.answers.streaks
  };
};

const mapDispatchToProps = {
  correctAnswer,
  wrongAnswer,
  levelUp,
  resetAnswers,
  addMoreBreeds
}
export default connect(mapStateToProps,mapDispatchToProps)(StartGame3)