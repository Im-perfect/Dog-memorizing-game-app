import React from 'react'
import {connect} from 'react-redux'

class Header extends React.Component {
    render() {
        return(
            <div className = 'Header'>
                <h2>User: {this.props.userName}</h2>
                <h3>You are a Beginner/ Dog lover/ Dog whisperer</h3>
                <h3>Points total: </h3>
                <h3>Overall succesrate: %</h3>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      userName: state.userName
    }
  }
export default connect(mapStateToProps)(Header)