import React, { Component } from "react";
import firebase from "firebase"
import './App.css';
import Auth from "./components/Auth"

class App extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
      return (
          <div>
              <Auth />
          </div>
      );
  }
}
export default App;
