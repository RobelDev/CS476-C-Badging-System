import React, { Component, useContext } from "react";
import { Fragment, useEffect } from "react";

import BadgerState from "./context/badger/BadgerState"
import BadgerContext from "./context/badger/BadgerContext"

import Homepage from "./components/Homepage.js";
import LogIn from "./components/LogIn"

import './App.css';

const App = () => {
    // constructor() {
    //     super();
    //     this.state = {
    //     };
    // }

    // useEffect(() => {
    //     dispatch(loadUser());
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    // useEffect(){

    // }
    const context = useContext(BadgerContext)

    // render() {
        return (
            <Fragment>
                <BadgerState>
                    <LogIn />
                     {/* <LogIn />  */}
                </BadgerState>
            </Fragment>
        )
    //}
}

export default App;


