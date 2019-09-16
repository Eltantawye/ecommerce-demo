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

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch(err) {
        console.log("error creating user",err);

      }
    }
    return userRef;
  }

  // 
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
//always trigger the google pup up whenever we use the google auth
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;