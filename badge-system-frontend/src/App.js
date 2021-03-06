import React, { Component } from "react";
import { Fragment } from "react";

import BadgerState from "./context/badger/BadgerState"

import Homepage from "./components/Homepage.js";
import LogIn from "./components/LogIn"

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <Fragment>
                <BadgerState>
                    {/*<LogIn /> */}
                    <Homepage />
                </BadgerState>
            </Fragment>
        )
    }
}

export default App;


