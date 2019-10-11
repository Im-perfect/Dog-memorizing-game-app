import React from "react";

export default class ResultGame2 extends React.Component {

  render() {

    if (this.props.result !== null) {
      return this.props.result ? (
        <div className="result">
          <h3 className="right">&#x2714; WOOF!</h3>
        </div>
      ) : (
          <div className="result">
            <h3 className="wrong">&#x2716;MEOW!</h3>
            <p>Correct picture:</p>        
            {this.props.imgURL1.indexOf(this.props.breed) > -1 ?
              <img src={this.props.imgURL1} height='250px' alt={this.props.imgURL1} />
              : this.props.imgURL2.indexOf(this.props.breed) > -1 ?
              <img src={this.props.imgURL2} height='250px' alt={this.props.imgURL2} />
              : this.props.imgURL3.indexOf(this.props.breed) > -1 ?
              <img src={this.props.imgURL3} height='250px' alt={this.props.imgURL3} />
              : console.log(this.props.breed, this.props.imgURL1, this.props.imgURL2, this.props.imgURL3)}
        </div>
        );
    }
    return "";
  }
}