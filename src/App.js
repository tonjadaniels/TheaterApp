import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return <div className="App">{this.props.data.shows}</div>;
  }
}

export default App;
