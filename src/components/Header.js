import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom"

class Header extends React.Component {
  render() {
    const {
      dogLoveLevel,
      allrightAnswers,
      alltotalAnswers
    } = this.props.answers;
    return (
      <div className="header">
        <Link to ='/startpage'>
          <button className = 'choice-button primary narrow' id="back">
            Home
          </button>
        </Link>
        <h3>{this.props.userName}</h3>
        <h1>{dogLoveLevel}</h1>
        <div className="header-status">
          <p>Total points: {allrightAnswers} </p>
          <p>
            Total success:{" "}
            {alltotalAnswers === 0
              ? 0
              : ((allrightAnswers / alltotalAnswers) * 100).toFixed(0)}{" "}
            %
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userName: state.userName,
    answers: state.answers
  };
};
export default connect(mapStateToProps)(Header);
