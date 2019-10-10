import React from 'react'
import {connect} from 'react-redux'


class Header extends React.Component {

    render() {
     
      const{dogLoveLevel, allrightAnswers, alltotalAnswers} = this.props.answers
        return(
            <div className = 'header'>
                <h2>User: {this.props.userName}</h2>
                <h3>You are a {dogLoveLevel}!</h3>
                <h3>Points total: {allrightAnswers} </h3>
                <h3>Overall succesrate: {alltotalAnswers === 0 ? 0 : (allrightAnswers/alltotalAnswers*100).toFixed(0)} %</h3>
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