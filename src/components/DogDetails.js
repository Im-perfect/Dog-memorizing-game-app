import React from "react";
import {Link} from 'react-router-dom'
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
        <Link to ='/dog-breeds'>
          <button className = 'choice-button primary narrow'>
            Back
          </button>
        </Link>
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
        <Link to ='/dog-breeds'>
          <button className = 'choice-button primary'>
            Back
          </button>
        </Link>
      </div>
    );
  }
}
