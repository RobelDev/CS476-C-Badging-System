import React, { Component } from "react";

import Homepage from "./components/Homepage.js";
import LogIn from "./components/LogIn"

import './App.css';
import { BadgerProvider } from "./context/badger/BadgerContext"
import { Fragment } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <Fragment>
                <BadgerProvider>
                      <Homepage />
                  { /* <LogIn /> */}                  
                </BadgerProvider>
            </Fragment>
        )   
    }
}

export default App;


