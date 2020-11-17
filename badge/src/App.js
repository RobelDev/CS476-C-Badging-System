import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import Homepage from "./Components/Homepage";
import LogIn from "./Components/LogIn"

import './App.css';

const auth = firebase.auth();

function App() {
    const [user] = useAuthState(auth);

    return (
        <div>
            <section>
                {user ? <Homepage /> : <LogIn />}
            </section>
        </div>
    );
}

export default App;
