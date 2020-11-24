import React from "react"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import firebase from 'firebase/app'
import 'firebase/auth'
import GiveKudos from "./Kudos/GiveKudos.js"
import BadgePrinting from "./Printing/BadgePrinting.js"

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
                <li>
                    <Popup trigger={<button>Home</button>} position="right center">
                        <div>Popup content here !!</div>
                    </Popup>
                </li>
                <li>
                    <Popup trigger={<button>Give a Badge</button>} position="right center">
                        <div>Popup content here !!</div>
                    </Popup>
                </li>
                <li>
                    <Popup trigger={<button>Give Kudos</button>} position="right center">
                        <div><GiveKudos /></div>
                    </Popup>
                </li>
                <li>
                    <Popup trigger={<button>Spend Kudos</button>} position="right center">
                        <div>Popup content here !!</div>
                    </Popup>
                </li>
                <li>
                    <Popup trigger={<button>Badge Printing</button>} position="right center">
                        <div><BadgePrinting /></div>
                    </Popup>
                </li>
                <li>
                    <Popup trigger={<button>Generate Email Signature</button>} position="right center">
                        <div class="card-popup"><Card /></div>
                    </Popup>
                </li>
                <li>
                    <Popup trigger={<button>Log Out</button>} position="right center">
                        <div><SignOut /></div>
                    </Popup>
                </li>
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