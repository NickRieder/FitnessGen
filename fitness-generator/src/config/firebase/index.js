// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, addDoc, getDoc, getFirestore, doc, onSnapshot, setDoc } from "firebase/firestore"
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

      const ref = doc(db, `/users/${user.uid}`); 
      const unsubscribe = onSnapshot(ref, doc => {
          setUserData(doc.data())
      })
      // = await.getDoc(ref, doc => {

   //   }
  
      return unsubscribe;
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
      .then( async (result) => {
          // The signed-in user info.
          const user = result.user;
          const ref = doc(db, `/users/${user.uid}`); 

          await setDoc(ref, { email: user.email }, { merge: true });

          console.log( user );
      })
      .catch((error) => {
          // Handle Errors here.
          console.log(error)
      });
};

export const createUserWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
          // The signed-in user info.
          const user = result.user;

      })
      .catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
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

export const updateUser = async (payload, user) => {
  
  const ref = doc(db, `/users/${user.uid}`); 
  await setDoc(ref, payload, { merge: true } );
}


export const getUserInfo =  async (user) => {
  const docRef = doc(db, `/users/${user.uid}/Answers/ID`);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export const getWorkout =  async (body, difficulty, equipment) => {
    //const docRef = doc(db, `/Workouts/${body}/${difficulty}/${equipment}`);
    const docRef = doc(db, `/Workouts/${body}/${difficulty}/${equipment}`);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

/*const getUserData = (user) => {
  setDifficulty(FirebaseError.doc.get().collection(users[user].get(difficulty)))
}

const getWorkout = (user) => {
  firebsase.get(wokrouts.{difficulty}.{equipemtn}(());
}*/