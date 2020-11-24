import React from "react"

import firebase from 'firebase/app'
import 'firebase/auth'
import GiveKudos from "./Kudos/GiveKudos.js"

import Card from './Card/Card.js'

import "./MainNav.css"

firebase.initializeApp({
    apiKey: "AIzaSyDFkMWvKU7yDcmlqcOHLLSnhv7W8W5nd08",
    authDomain: "team-badgers-capstone.firebaseapp.com",
    databaseURL: "https://team-badgers-capstone.firebaseio.com",
    projectId: "team-badgers-capstone",
    storageBucket: "team-badgers-capstone.appspot.com",
    messagingSenderId: "609105725605",
    appId: "1:609105725605:web:1fae30e9264774b9a5254c"
});

const auth = firebase.auth();

class MainNav extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    state = {
        seen: false
      };
    
      togglePop = () => {
        this.setState({
          seen: !this.state.seen
        });
      };

    render() {
        return(
        <div class="navbar-div">
            <ul>
                <li><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">State Farm</button></li>
                <li><button onClick="#home">Home</button></li>
                <li><button onClick="#give-badge">Give A Badge</button></li>
                <li><button onClick={this.togglePop}>Give Kudos</button></li>
                {this.state.seen ? <GiveKudos toggle={this.togglePop} /> : null}
                <li><button onClick="#spend-kudos">Spend Kudos</button></li>
                <li><button onClick="#print-badge">Badge Printing</button></li>
                <li><button onClick="#generate-email" data-toggle="modal">Generate Email Signature</button></li>
                <li><button onClick={<SignOut />}>Log Out</button></li>
            </ul>
        </div>

        );
    }
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default MainNav;