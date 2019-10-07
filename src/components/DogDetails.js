import React from "react";
import superagent from "superagent";

export default class DogDetails extends React.Component {
  state = { images: null };
  componentDidMount() {
    const breed = this.props.match.params.breed;
    superagent
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(res =>
        this.setState({
          images: res.body.message
        })
      )
      .catch(err => console.err(err));
  }
  render() {
    return (
      <div>
          <h1>{this.props.match.params.breed}</h1>
        {this.state.images
          ? this.state.images.slice(0,10).map(image => (
              <img src={image} alt={this.props.match.params.breed} key={image} />
            ))
          : "Loading..."}
      </div>
    );
  }
}
