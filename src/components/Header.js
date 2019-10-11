import React from 'react'
import {connect} from 'react-redux'


class Header extends React.Component {

    render() {
     
      const{dogLoveLevel, allrightAnswers, alltotalAnswers} = this.props.answers
        return(
            <div className = 'header'>
                <h1>{this.props.userName}</h1>
                <h3>{dogLoveLevel}</h3>
                <h3>Total points: {allrightAnswers} </h3>
                <h3>Total success: {alltotalAnswers === 0 ? 0 : (allrightAnswers/alltotalAnswers*100).toFixed(0)} %</h3>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      userName: state.userName,
      answers: state.answers
    }
  }
export default connect(mapStateToProps)(Header)