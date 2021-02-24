import React, { Component } from "react";

import Homepage from "./components/Homepage.js";
import LogIn from "./components/LogIn"

import './App.css';
import { BadgerProvider } from "./context/badger/badgerContext"
import { Fragment } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <Fragment>
                <badgerState>
                    { /* <Homepage /> */}
                    <LogIn />
                </badgerState>
            </Fragment>
        )   
    }
}

export default App;


