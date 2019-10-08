import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Startpage from "./components/Startpage";
import Doglist from "./components/Doglist";
import DogDetails from "./components/DogDetails";
import {connect} from 'react-redux'
import {initBreeds, getBreeds} from './actions/breeds'

class App extends React.Component {
  componentDidMount() {
    if(this.props.dogbreeds.length !== 0){
      return
    }
    this.props.getBreeds()
  }

  render() {
    return (
      <div className="App">
        <header></header>
        <Route path="/" exact component={Startpage}></Route>
        <Route path="/dog-breeds" exact component={Doglist}></Route>
        <Route path="/dog-breeds/:breed" component={DogDetails}></Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dogbreeds:state.dogbreeds
  }
}

const mapDispatchToProps = {
  initBreeds,
  getBreeds
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
