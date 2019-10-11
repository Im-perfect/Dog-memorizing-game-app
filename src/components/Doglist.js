import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

function searchingFor(term){
  return function(word){
    return term ? word.toLowerCase().includes(term.toLowerCase()) : !term
  }
}

class Doglist extends React.Component {

  state = {
    term: ""
  }

  searchHandler = (event) => {
    this.setState({
      term: event.target.value
    })
  }
    render() {    
      return (<div>
        <h1>Dogbreeds</h1>
        <Link to ='/startpage'>
          <button className = 'choice-button primary'>
            Back
          </button>
        </Link>

        <form id='search-dogs'>
        <input type="text" placeholder='Search dogs..'onChange={this.searchHandler} value={this.state.term} />
        </form>

        <ul id='list'>
          {this.props.dogbreeds.filter(searchingFor(this.state.term)).map(breed => {
            return <li key={breed}><Link to={`/dog-breeds/${breed}`}>{breed}</Link></li>
          })}
        </ul>
        <Link to ='/startpage'>
          <button className = 'choice-button primary'>
            Back
          </button>
        </Link>
     </div>)
    }
  }


const mapStateToProps = state => {
  return {
    dogbreeds: state.dogbreeds
  };
};

export default connect(mapStateToProps)(Doglist);
