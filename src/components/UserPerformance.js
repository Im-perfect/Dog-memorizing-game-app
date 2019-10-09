import React from 'react'
import { connect } from 'react-redux'
class UserPerformance extends React.Component {
    render() {
        const{rightAnswers,totalAnswers,level} = this.props.answers
        return(
            <div className = 'UserPerformance'>
                <ul>
                <li>RightAnswers:{rightAnswers}</li>
                <li>TotalAnswers:{totalAnswers}</li>
                <li>SuccessRate:{(rightAnswers/totalAnswers).toFixed(2)}</li>
                <li>Level:{level}</li>
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