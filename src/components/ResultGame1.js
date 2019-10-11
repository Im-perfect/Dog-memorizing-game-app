import React from "react";

export default class ResultGame1 extends React.Component {
  render() {
    if (this.props.result !== null) {
      return this.props.result ? (
        <div className="result">
          <h3 className="right">&#x2714; WOOF!</h3>
        </div>
      ) : (
        <div className="result">
          <h3 className="wrong">&#x2716;MEOW!</h3>
          <p>Correct breed: <span>{this.props.breed}</span></p>
        </div>
      );
    }
    return "";
  }
}
