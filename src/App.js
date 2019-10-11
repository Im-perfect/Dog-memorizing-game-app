import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Startpage from "./components/Startpage";
import Doglist from "./components/Doglist";
import DogDetails from "./components/DogDetails";
import {initBreeds, getBreeds} from './actions/breeds'
import StartGame1 from './components/StartGame1'
import {connect} from 'react-redux'
import UserPerformance from "./components/UserPerformance";
import StartGame2 from "./components/StartGame2";
import "./css/main.css"
import UserName from "./components/UserName"
import StartGame3 from "./components/StartGame3";



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
        <Route path="/startpage" component={Startpage}></Route>
        <Route path="/" exact component={UserName}></Route>
        <Route path="/dog-breeds" exact component={Doglist}></Route>
        <Route path="/dog-breeds/:breed" component={DogDetails}></Route>
        <Route path="/game2" component={UserPerformance}></Route>
        <Route path="/game2" component={StartGame2}></Route>
        <Route path="/game1" component={UserPerformance}></Route>
        <Route path="/game1" component={StartGame1}></Route>       
        <Route path="/game3" component={UserPerformance}></Route>
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
