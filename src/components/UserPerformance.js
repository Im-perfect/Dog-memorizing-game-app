import React from 'react'
import { connect } from 'react-redux'
class UserPerformance extends React.Component {
    render() {
        const{rightAnswers,totalAnswers,level} = this.props.answers
        return(
            <div className = 'UserPerformance'>
                <span>RightAnswers:{rightAnswers}</span>
                <span>TotalAnswers:{totalAnswers}</span>
                <span>SuccessRate:{(rightAnswers/totalAnswers).toFixed(2)}</span>
                <span>Level:{level}</span>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      answers: state.answers
    }
  }
export default connect(mapStateToProps)(UserPerformance)