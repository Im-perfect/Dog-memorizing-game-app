import React from "react";
import { connect } from "react-redux";

class Doglist extends React.Component {
  render() {
    return <div>
        <ul>
            {this.props.dogbreeds.map(breed => {
                return <li key={breed}>{breed}</li>
            })}
        </ul>
    </div>;
  }
}

const mapStateToProps = state => {
  return {
      dogbreeds: state.dogbreeds
  };
};

export default connect(mapStateToProps)(Doglist);
