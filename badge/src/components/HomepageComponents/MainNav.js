import React from "react"

import firebase from 'firebase/app'
import 'firebase/auth'

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

    render() {
        return(
        <div class="navbar-div">
            <ul>
                <li><a href="#home">State Farm</a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#give-badge">Give A Badge</a></li>
                <li><a href="#give-kudos">Give Kudos</a></li>
                <li><a href="#spend-kudos">Spend Kudos</a></li>
                <li><a href="#print-badge">Badge Printing</a></li>
                <li><a href="#generate-email" data-toggle="modal">Generate Email Signature</a></li>
                <li><a href={<SignOut />}>Log Out</a></li>
            </ul>

            <div id="generate-email" className="modal modal-lg mymodal" tabindex="-1" role="dialog" data-backdrop="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Generate Email Signature</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Card />
                        </div>
                    </div>
                </div>
            </div> 
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