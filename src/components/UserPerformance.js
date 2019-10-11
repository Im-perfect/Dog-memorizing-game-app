import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import "../css/main.css"

class UserPerformance extends React.Component {
  render() {
    const { rightAnswers, totalAnswers, level, streaks } = this.props.answers;
    return (
      <div className="UserPerformance">
        <Header />
        <ul id='performance'>
          <li>Points: {rightAnswers}</li>
          <li>Success:{" "}{totalAnswers === 0 ? 0
              : ((rightAnswers / totalAnswers) * 100).toFixed(0)}%</li>
          <li>Level: {level}</li>
          <li>Next level: Score {5 - streaks} points in a row</li>    
          <li>Dogbreeds:{this.props.currentBreeds.length}</li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    answers: state.answers,
    currentBreeds: state.currentBreeds
  };
};
export default connect(mapStateToProps)(UserPerformance);
