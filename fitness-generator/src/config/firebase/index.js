// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore"
import { createContext, useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
//export const analytics = getAnalytics(app);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      if (!user) {
        setUserData(null)
        return;
      }
  
    }, [user])
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        setUser(user);
      })
  
      return unsubscribe;
    }, []);
  
    return (
      <AuthContext.Provider value={{ user, userData }}>{children}</AuthContext.Provider>
    );
  };

const googelProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googelProvider)
      .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          // The signed-in user info.
          const user = result.user;
      })
      .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log({ errorCode, errorMessage, email, credential });
      });
};

export const signInWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
          // The signed-in user info.
          const user = result.user;
          console.log( user );
      })
      .catch((error) => {
          // Handle Errors here.
          console.log(error)
      });
};
let errorCode;

export function reportErrorCode() {
  return errorCode;
}

export function createUserWithEmail(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
  })
  .catch((error) => {
    errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });
};


export const logOut = () => {
  signOut(auth)
  .then(() => {
    console.log('Signed out')
     // Sign-out successful.
  })
  .catch(() => {
    // An error happened.
  })
}