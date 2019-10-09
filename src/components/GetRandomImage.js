import React from 'react'
import superagent from "superagent";


export default class GatRandomImage extends React.Component {
state = {
  imgUrl: null
}

  componentDidMount(){
    console.log('called')
    superagent
      .get(`https://dog.ceo/api/breed/${this.props.breed}/images/random`)
      .then(response => this.setState({
        imgURL: response.body.message
      }))
  }
  

  render() {

    return (
      <div>
          <img onClick={this.props.checkAnswer} src={this.state.imgURL} height='150px' />        
      </div >
    )
  }
}

