import React, { Component } from "react";

import Homepage from "./components/Homepage.js";
import LogIn from "./components/LogIn"

import './App.css';
import BadgerState from "./context/badger/badgerState"
import { Fragment } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <Fragment>
                <BadgerState>
                
                </BadgerState>

                
                <div>
                    <Homepage />
                </div>

            </Fragment>
            

        )   
    }
}

export default App;


