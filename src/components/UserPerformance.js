import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'

class UserPerformance extends React.Component {
    render() {
        const{rightAnswers,totalAnswers,level} = this.props.answers
        return(
            <div className = 'UserPerformance'>
                 <Header/>
                <ul>
                <li>RightAnswers: {rightAnswers}</li>
                <li>TotalAnswers: {totalAnswers}</li>
                <li>SuccessRate: {totalAnswers === 0 ? 0 :(rightAnswers/totalAnswers*100).toFixed(0)}%</li>
                <li>Level: {level}</li>
                <li>Current Breeds:{this.props.currentBreeds.length}</li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      answers: state.answers,
      currentBreeds: state.currentBreeds
    }
  }
export default connect(mapStateToProps)(UserPerformance)