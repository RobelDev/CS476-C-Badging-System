import React, { Component } from "react";
import firebase from "./firebase"
import './App.css';

import Homepage from "./Components/Homepage";
import Auth from "./Components/Auth"

class App extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
      return (
          <div>
              <Auth/>
              <Homepage />
              
          </div>
      );
  }
}
export default App;
