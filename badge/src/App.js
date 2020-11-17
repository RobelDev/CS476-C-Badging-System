import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import Homepage from "./Components/Homepage";
import LogIn from "./Components/LogIn"

import logo from "./Assets/Team_Badgers_Logo.png"

import './App.css';

const auth = firebase.auth();

function App() {
    const [user] = useAuthState(auth);

    return (
        <div>
            <section>
                {user ? <Homepage /> : <SignIn />}
            </section>
        </div>
    );
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div class="log-in-page">
            <div class="log-in-div">
                <p class="log-in-title">Skills and Knowledge Badging System Prototype</p>
                <img src={logo} />
                <p class="log-in-text">Click below to log in...</p>
            </div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            
            <footer class="footer">
                <div class="footer-div">
                    <div class="footer-column">
                        <span class="column-title">Sponsors</span>
                        <br/>
                        <span>Dave Hopfensperger</span>
                        <span>Glenn Austin</span>
                    </div>
                    <div class="footer-column">
                        <span class="column-title">Team Members</span>
                        <br/>
                        <span class="member-name">Abdulrahman Alamoudi</span>
                        <span class="member-name">Tristan Marcus</span>
                        <span class="member-name">Logan Ritter</span>
                        <span class="member-name">Robel Tegegne</span>
                        <span class="member-name">Yuanbo Xu</span>
                    </div>
                    <div class="footer-column">
                        <span class="column-title">Team Mentor</span>
                        <br/>
                        <span class="member-name">Sambashiva Kethireddy</span>
                    </div>
                </div>
                <div class="copyright-text">
                        © Team Badgers 2020-2021 NAU Computer Science Capstone Team
                </div>
            </footer>
        </div>
    )
}

export default App;
