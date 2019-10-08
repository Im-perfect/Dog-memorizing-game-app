import React from "react";
import superagent from "superagent";

export default class RandomImage extends React.Component {
  state = { image: null };

  componentDidMount() {
    superagent
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(this.props.breed)}/images/random`)
      .then(response => console.log(response.body.message))
      //   this.setState({
      //   image: response.body.message
      // }))
      .catch(console.error)
  }

  render() {
    return(
      <div>
        {console.log(this.state.image)}
      </div>
    )
  }
}
