import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom"

class Doglist extends React.Component {
  render() {
    return <div>
        <ul id="list">
            {this.props.dogbreeds.map(breed => {
                return <li key={breed}><Link to={`/dog-breeds/${breed}`}>{breed}</Link></li>
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
