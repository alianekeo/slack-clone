import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyDvem6VHE2FZ5fIt8pjlO88NTue3caePkE",
    authDomain: "slack-clone-yt-1d3ef.firebaseapp.com",
    projectId: "slack-clone-yt-1d3ef",
    storageBucket: "slack-clone-yt-1d3ef.appspot.com",
    messagingSenderId: "841464188264",
    appId: "1:841464188264:web:b02da8f26138bebaf51add"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };