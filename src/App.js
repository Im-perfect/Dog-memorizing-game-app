import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Startpage from "./components/Startpage";
import Doglist from "./components/Doglist";
import DogDetails from "./components/DogDetails";
import {initBreeds, getBreeds} from './actions/breeds'
import Game1 from './components/Game1'
import {connect} from 'react-redux'
import Game2 from './components/Game2'
import UserPerformance from "./components/UserPerformance";


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
        <Route path="/game2" component={UserPerformance}></Route>
        <Route path="/game2" component={Game2}></Route>
        <Route path="/game1" component={UserPerformance}></Route>
        <Route path="/game1" component={Game1}></Route>

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
