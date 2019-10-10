import React from "react";
import { connect } from "react-redux";

class Hint extends React.Component {
  handleClick = () => {
      
  };
  render() {
    if (this.props.isFirstSeen) {
      return (
        <div>
          <p>
            First time seen
            <span>
              <button onClick={this.handleClick}>Remove one wrong answer?</button>
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
