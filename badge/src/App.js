import React, { Component } from "react";
import firebase from "./firebase"
import './App.css';
import auth from "./Components/auth";
import Homepage from "./Components/Homepage";

class App extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
      return (
          <div>
              <Homepage />
          </div>
      );
  }
}
export default App;
