import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Startpage from "./components/Startpage";
import Doglist from "./components/Doglist";
import DogDetails from "./components/DogDetails";
import superagent from "superagent";
import {connect} from 'react-redux'
import {initBreeds} from './actions/breeds'

class App extends React.Component {
  componentDidMount() {
    superagent
      .get("https://dog.ceo/api/breeds/list/all")
      .then(res =>
        this.props.dispatch({
          type: "INIT_BREEDS",
          payload: Object.keys(res.body.message)
        })
      )
      .catch(err => console.err(err));
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
const mapDispatchToProps = {
  initBreeds
}
export default connect()(App);
