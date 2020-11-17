import React, { Component } from "react";
import './App.css';

import Homepage from "./Components/Homepage";
import LogIn from "./Components/LogIn"

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'


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
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default App;
