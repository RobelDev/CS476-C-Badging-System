import React from "react"
import { useState } from "react";
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useCollectionData } from 'react-firebase-hooks/firestore'

import MessageObject from "./WaterfallFeedComponents/MessageObject"

import "./WaterfallFeed.css"

firebase.initializeApp({
    apiKey: "AIzaSyDFkMWvKU7yDcmlqcOHLLSnhv7W8W5nd08",
    authDomain: "team-badgers-capstone.firebaseapp.com",
    databaseURL: "https://team-badgers-capstone.firebaseio.com",
    projectId: "team-badgers-capstone",
    storageBucket: "team-badgers-capstone.appspot.com",
    messagingSenderId: "609105725605",
    appId: "1:609105725605:web:1fae30e9264774b9a5254c"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function WaterfallFeed() {

    
        return(
        <div class="waterfall-feed-container">
            <div class="feed-title">
                Reward Feed
            </div>
            <div class="feed-div">
                <ChatRoom />
            </div>
        </div>

        );
    
}

function ChatRoom() {
    const messagesRef = firestore.collection('messages');

    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        });
    }

    return (
        <>
        <div>
            {messages && messages.map(msg => <RewardMessage key={msg.id} message={msg} />)}
        </div>
        <form onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
            <button type="submit">SUBMIT IT</button>

        </form>

        </>
    )
}

function RewardMessage(props) {
    const{ text, uid, photoURL} = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    
    return (
        <div classname={`message ${messageClass}`}>
            <img src={photoURL} />
            <p>
                {text}
            </p>
        </div>
            
    )
}

export default WaterfallFeed;