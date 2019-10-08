import React from "react";

export default class ResultGame1 extends React.Component {
  render() {
    if (this.props.result !== null) {
      return this.props.result ? (
        <div>
          {/* <img
            src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Dark-512.png"
            alt="Right"
            width="32px"
          /> */}
          <h1>&#x2714; WOOF!</h1>
        </div>
      ) : (
        <div>
          {/* <img
            src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon_Dark-512.png"
            alt="Right"
            width="32px"
          /> */}
          <h1>&#x2716;MEOW!</h1>
          <p>Correct breed: {this.props.breed}</p>
        </div>
      );
    }
    return "";
  }
}
