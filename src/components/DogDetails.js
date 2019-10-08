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
    const images = this.state.images
    const getTenRandomElements = (array) => {
      const shuffled = array.sort(() => 0.5 - Math.random())
      return shuffled.slice(0,10)
    }
    return (
      <div>
          <h1>{this.props.match.params.breed}</h1>
        {images
          ? getTenRandomElements(images)
          .map(image => (
              <img src={image} alt={this.props.match.params.breed} key={image} />
            ))
          : "Loading..."}
      </div>
    );
  }
}
