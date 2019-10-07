import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Startpage from "./components/Startpage";
import Doglist from "./components/Doglist";
import DogDetails from "./components/DogDetails";

function App() {
  return (
    <div className="App">
      <header></header>
      <Route path="/" exact component={Startpage}></Route>
      <Route path="/dog-breeds" component={Doglist}></Route>
      {/* <Route path="/dog-breeds/:breed" component={DogDetails}></Route> */}
    </div>
  );
}

export default App;
