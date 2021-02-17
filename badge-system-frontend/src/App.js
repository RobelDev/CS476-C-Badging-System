import React, { Component } from "react";

import Homepage from "./components/Homepage.js";
// import LogIn from "./components/LogIn"

// import logo from "./Assets/Team_Badgers_Logo.png"

import './App.css';
import BadgerState from "./context/badger/badgerState"
import { Fragment } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
//test
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

//function SignIn() {
//    const signInWithGoogle = () => {
//        const provider = new firebase.auth.GoogleAuthProvider();
//        auth.signInWithPopup(provider);
//    }

//    return (
//        <div class="log-in-page">
//            <div class="log-in-div">
//                <p class="log-in-title">Skills and Knowledge Badging System Prototype</p>
//                <img src={logo} />
//                <p class="log-in-text">Click below to log in...</p>
//            </div>
//            <button onClick={signInWithGoogle}>Sign in with Google</button>
            
//            <footer class="footer">
//                <div class="footer-div">
//                    <div class="footer-column">
//                        <span class="column-title">Sponsors</span>
//                        <br/>
//                        <span>Dave Hopfensperger</span>
//                        <span>Glenn Austin</span>
//                    </div>
//                    <div class="footer-column">
//                        <span class="column-title">Team Members</span>
//                        <br/>
//                        <span class="member-name">Abdulrahman Alamoudi</span>
//                        <span class="member-name">Tristan Marcus</span>
//                        <span class="member-name">Logan Ritter</span>
//                        <span class="member-name">Robel Tegegne</span>
//                        <span class="member-name">Yuanbo Xu</span>
//                    </div>
//                    <div class="footer-column">
//                        <span class="column-title">Team Mentor</span>
//                        <br/>
//                        <span class="member-name">Sambashiva Kethireddy</span>
//                    </div>
//                </div>
//                <div class="copyright-text">
//                        © Team Badgers 2020-2021 NAU Computer Science Capstone Team
//                </div>
//            </footer>
//        </div>
//    )
//}


