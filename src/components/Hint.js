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
              <button onClick={this.handleClick}>Hint?</button>
            </span>
          </p>
        </div>
      );
    }
    return "";
  }
}

const mapStateToProps = state => {
  return {
    isFirstSeen: state.isFirstSeen
  };
};

export default connect(mapStateToProps)(Hint);
