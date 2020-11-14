import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDFkMWvKU7yDcmlqcOHLLSnhv7W8W5nd08",
    authDomain: "team-badgers-capstone.firebaseapp.com",
    databaseURL: "https://team-badgers-capstone.firebaseio.com",
    projectId: "team-badgers-capstone",
    storageBucket: "team-badgers-capstone.appspot.com",
    messagingSenderId: "609105725605",
    appId: "1:609105725605:web:1fae30e9264774b9a5254c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase
