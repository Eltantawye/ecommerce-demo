import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpXeMikGwvCRLmOr2HNiE88_-gnhODKfc",
    authDomain: "crwn-db-b2836.firebaseapp.com",
    databaseURL: "https://crwn-db-b2836.firebaseio.com",
    projectId: "crwn-db-b2836",
    storageBucket: "",
    messagingSenderId: "158759511709",
    appId: "1:158759511709:web:b2cc54a1fbc20ff4b71674"
  };

  // 
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
//always trigger the google pup up whenever we use the google auth
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;