import React from "react";
import { Route } from "react-router-dom";
import {connect} from 'react-redux'
import UserName from "./components/UserName"
import Startpage from "./components/Startpage";
import UserPerformance from "./components/UserPerformance";
import Doglist from "./components/Doglist";
import DogDetails from "./components/DogDetails";
import StartGame1 from './components/StartGame1'
import StartGame2 from "./components/StartGame2";
import StartGame3 from "./components/StartGame3";
import {initBreeds, getBreeds} from './actions/breeds'
import "./css/main.css"
import "./App.css";



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
        <Route path="/" exact component={UserName}></Route>
        <Route path="/startpage" component={Startpage}></Route>
        <Route path="/dog-breeds" exact component={Doglist}></Route>
        <Route path="/dog-breeds/:breed" component={DogDetails}></Route>
        <Route path="/(game1|game2|game3)" component={UserPerformance}></Route>
        <Route path="/game1" component={StartGame1}></Route>       
        <Route path="/game2" component={StartGame2}></Route>
        <Route path="/game3" component={StartGame3}></Route>
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
