import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News pageSize={12} country="in" category="sport" />
      </>
    );
  }
}

export default App;
