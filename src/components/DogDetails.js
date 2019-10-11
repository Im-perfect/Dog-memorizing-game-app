import React from "react";
import superagent from "superagent";
import getRandomElements from "../getRandomElements";

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
    const images = this.state.images;

    return (
      <div>
        <h1 className="title">{this.props.match.params.breed}</h1>
        <div id="imageContainer">
          {images
            ? getRandomElements(images, 10).map(image => (
                <img
                  src={image}
                  alt={this.props.match.params.breed}
                  key={image}
                />
              ))
            : "Loading..."}
        </div>
      </div>
    );
  }
}
