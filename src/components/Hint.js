import React from "react";
import { connect } from "react-redux";

class Hint extends React.Component {
  handleClick = () => {
      this.props.removeOneAnswer()
  };
  render() {
    if (this.props.isFirstSeen) {
      return (
        <div id="hint">
          <p>
            See this breed for the first time? 
            <span>
              <button className="choice-button primary narrow long" onClick={this.handleClick}>Remove one wrong answer?</button>
            </span>
          </p>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    isFirstSeen: state.firstSeen.isFirstSeen
  };
};

export default connect(mapStateToProps)(Hint);
