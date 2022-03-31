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
    const [userData, setUserData] = useState();

    useEffect(() => {
      if (!user) {
        setUserData(null)
        return;
      }

      const ref = doc(db, `/Users/${user.uid}`); 
      const unsubscribe = onSnapshot(ref, doc => {
          setUserData(doc.data())
      })
      // = await.getDoc(ref, doc => {

   //   }
  
      return unsubscribe;
    }, [user]);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
        setUser(user);
      })
  
      return unsubscribe;
    }, []);
  
    return (
      <AuthContext.Provider value={{ user, setUser, userData }}>{children}</AuthContext.Provider>
    );
  };

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
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

export async function signInWithEmail(email, password) {
  let firstName;
  let lastName;
  let displayName;

  await signInWithEmailAndPassword(auth, email, password)
      .then( async (result) => {
          // The signed-in user info.
          // TO-DO await, needs to add firstName and Lastname 
          const user = result.user;
          const ref = doc(db, `/Users/${user.uid}`); 

          await setDoc(ref, { email: user.email }, { merge: true });

          const dbUWDDataRef = doc(db, `/Users/${user.uid}/PersonalData/Data`);
          const userUWDDataSnap = await getDoc(dbUWDDataRef);

          if (userUWDDataSnap.exists()) {
            firstName = userUWDDataSnap.data().FirstName;
            lastName = userUWDDataSnap.data().LastName;
            displayName = userUWDDataSnap.data().DisplayName;
          } else {
            console.log("Document does not exist")
          }
          // console.log({firstName, lastName, displayName})
          // console.log([firstName, lastName, displayName]);
        })
        .catch((error) => {
          // Handle Errors here.
          // console.log(error)
        })
  return {'firstName': firstName, 'lastName': lastName, 'displayName': displayName}
};

// fxn to write user data to users collection
// from sign up 
// personal Data = [firstName, lastName]
async function makeUser(user, emailVal, firstNameVal, lastNameVal, displayNameVal) {
  try {
      // Adds the email as a field in the Users collection
      const dbUsersRef = doc(db, `Users/${user.uid}`);
      await setDoc(dbUsersRef, {
        Email: emailVal
      });

      // Adds firstName and lastName as fields in the Personal collection 
      const dbUPDDataRef = doc(db, `Users/${dbUsersRef.id}/PersonalData/Data`)
      await setDoc(dbUPDDataRef, {
        FirstName: firstNameVal,
        LastName: lastNameVal,
        DisplayName: displayNameVal
      });
  } catch (error) {
      console.error("Error while adding document", error);
  }
}

export function createUserWithEmail(email, password, firstName, lastName) {
  return createUserWithEmailAndPassword(auth, email, password)
  .then(async (result) => {
    // The signed-in user info.
    const user = result.user; 
    const displayName = firstName.charAt(0) + lastName.charAt(0);
    await makeUser(user, email, firstName, lastName, displayName);
    // AuthProvider.setUserData({})
  }).catch(
    // console.log(error);
    // console.log(errorCode);
    // console.log(errorMessage);
  );
}


//update user personal data
export async function updateUserData(user, email, firstName, lastName, displayName) {
  try {
    // Adds the email as a field in the Users collection
    const dbUsersRef = doc(db, `Users/${user.uid}`);
    await setDoc(dbUsersRef, {
      Email: email
    });

    // Adds firstName and lastName as fields in the Personal collection 
    const dbUPDDataRef = doc(db, `Users/${dbUsersRef.id}/PersonalData/Data`)
    await setDoc(dbUPDDataRef, {
      FirstName: firstName,
      LastName: lastName,
      DisplayName: displayName
    });
} catch (error) {
    console.error("Error while adding document", error);
}
}

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
  
  const ref = doc(db, `/Users/${user.uid}`); 
  await setDoc(ref, payload, { merge: true } );
}

// Adds firstName and lastName as fields in the Personal collection 
//   const dbUPersonalRef = await addDoc(collection(db, `Users/${dbUsersRef.id}/PersonalData`), 

export async function getUserName(user) {
  const dbUPDDataRef = doc(db, `/Users/${user.uid}/PersonalData/Data`);

  const userPDDSnap = await getDoc(dbUPDDataRef);
  return userPDDSnap.data();
}

export const getUserInfo =  async (user) => {
  const dbUWDDataRef = doc(db, `/Users/${user.uid}/WorkoutData/Data`);

  // const docRef = doc(db, `/Users/${user.uid}/Answers/ID`);
  const docSnap = await getDoc(dbUWDDataRef);
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

export async function setUserWorkoutData(user, feet, inches, weight, days, intensity, equipment) {
  try {
    // Adds firstName and lastName as fields in the Personal collection 
    const dbUWDDataRef = doc(db, `Users/${user.uid}/WorkoutData/Data`)
    await setDoc(dbUWDDataRef, {
      HeightFT: feet,
      HeightIN: inches,
      Weight: weight,
      Days: days, 
      Intensity: intensity,
      Equipment: equipment
    });

  } catch (error) {
    console.error("Error while adding document", error);
  }
} 