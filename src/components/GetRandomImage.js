import React from 'react'
import superagent from "superagent";


export default class GatRandomImage extends React.Component {
state = {
  imgUrl: null
}

  componentDidMount(){
    superagent
      .get(`https://dog.ceo/api/breed/${this.props.breed}/images/random`)
      .then(response => this.setState({
        imgURL: response.body.message
      }))
  }
  

  render() {

    return (
      <div>
          <img onClick={this.props.checkAnswer} src={this.state.imgURL} alt={this.props.breed} key={this.props.breed} alt={this.props.breed} />        
      </div >
    )
  }
}

