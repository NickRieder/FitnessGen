// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, reauthenticateWithCredential, sendPasswordResetEmail, updatePassword, EmailAuthProvider } from "firebase/auth";
import { getDoc, getFirestore, doc, onSnapshot, setDoc, updateDoc, deleteField } from "firebase/firestore"
import { createContext, useEffect, useState } from 'react';
import "firebase/auth"

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
  let displayName = null;
  let email = null;

  return signInWithPopup(auth, googleProvider)
      .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential?.accessToken;
          // The signed-in user info.
          // const user = result.user;
          // email = result.user.email
          // displayName = result.user.displayName
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

      // return {email, displayName}
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

//update workout data personal data
export async function updateWorkoutData(user, height, weight, days, intensity, equipment) {
  try {
    // Adds the email as a field in the Users collection
    const dbUsersRef = doc(db, `Users/${user.uid}`);

    // Adds firstName and lastName as fields in the Personal collection 
    const dbUPDDataRef = doc(db, `Users/${dbUsersRef.id}/WorkoutData/Data`)
    await setDoc(dbUPDDataRef, {
      Days: days,
      Equipment: equipment,
      HeightFT: height.ft,
      HeightIN: height.in,
      Intensity: intensity,
      Weight: weight
    });
  } catch (error) {
    console.error("Error while adding document", error);
  }
}

export async function saveWorkoutInDatabase(user, workoutPlan) {
  try {

    const dbUsersRef = doc(db, `Users/${user.uid}`);

    //save workout plan inside WorkoutData of user document
    const dbUPDDataRef = doc(db, `Users/${dbUsersRef.id}/WorkoutData/Workout`)
    await updateDoc(dbUPDDataRef, {
      WorkoutPlan: workoutPlan
    });
  } catch (error) {
    console.error("Error while saving workout plan to database", error);
  }
}

export async function deleteWorkoutInDatabase(user) {
  try {

    const dbUsersRef = doc(db, `Users/${user.uid}`);

    //save workout plan inside WorkoutData of user document
    const dbUPDDataRef = doc(db, `Users/${dbUsersRef.id}/WorkoutData/Workout`)
    await updateDoc(dbUPDDataRef, {
      WorkoutPlan: deleteField()
    });
  } catch (error) {
    console.error("Error while saving workout plan to database", error);
  }
}

/*export async function updateNewWorkoutDesire(user, desire) {
  try {

    const dbUsersRef = doc(db, `Users/${user.uid}`);

    //save workout plan inside WorkoutData of user document
    const dbUPDDataRef = doc(db, `Users/${dbUsersRef.id}/WorkoutData/Workout`)
    await updateDoc(dbUPDDataRef, {
      wantsToGenerateNewWorkout: desire
    });
  } catch (error) {
    console.error("Error while updating user's desire to generate new workout", error);
  }
}*/

/*export async function loadWorkoutFromDatabase(user) {
  try {
    const dbWorkoutRef = doc(db, `Users/${user.uid}/WorkoutData/WorkoutPlan`);
    const docSnap = await getDoc(dbWorkoutRef);
    return docSnap.data();

  } catch (error) {
    console.error("Error while loading workout plan from database", error);
  }
}*/

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

export const getWorkout = async (body, difficulty, injuries, allEquipment, equipment) => {

   //convert difficulty into number
   let localDifficulty = 1;
   if (difficulty == "Medium") {
     localDifficulty = 2;
   } else if (difficulty == "Hard") {
     localDifficulty = 3;
   }

   // check if body part stresses any injuries and adjust accordingly
   const bodyDocRef = doc(db, `/Workouts/${body}`);
   const bodyDocSnap = await getDoc(bodyDocRef);
   const data = bodyDocSnap.data();

   for (let i = 0; i < injuries.length; i++) {
     let currentInjury = injuries[i]; // get injury
     if (data[currentInjury]) { // if body stresses injury       
       if (localDifficulty == 3) { //if difficulty is 3, decrement difficulty and lower to available equipment
         localDifficulty--;
         if (allEquipment.includes("DB")) {
           equipment = "DB";
         } else if (allEquipment.includes("Machine")) {
           equipment = "Machine";
         } else if (allEquipment.includes("Band")) {
           equipment = "Band";
         } else {
          equipment = "BodyWeight";
         }
         console.log("Made it inside decrementing injury to 2");
       } else if (localDifficulty == 2) { //if difficulty is 2, decrement difficulty and lower equipment to bodyweight
         localDifficulty--;
         if (allEquipment.includes("Machine")) {
           equipment = "Machine";
         } else if (allEquipment.includes("Band")) {
           equipment = "Band";
         } else {
           equipment = "BodyWeight";
         }
         console.log("Made it inside decrementing injury to 1");
       } else { //if difficulty is 1, lower equipment to body weight
         equipment = "BodyWeight";
         console.log("Made it inside setting equipment to bodyweight");
       }
     }
   }
    
    if (localDifficulty == 1) {
      difficulty = "Easy";
    } else if (localDifficulty == 2) {
      difficulty = "Medium";
    } else if (localDifficulty == 3) {
     difficulty = "Hard";
    } else {
      console.log("config/firebase/index.js -> localDifficulty was not 1, 2, or 3");
    }

    const docRef = doc(db, `/Workouts/${body}/${difficulty}/${equipment}`);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

/*export const getDailyWorkout = async (body, difficulty, equipment) => {
  const legsRef = await getDoc(doc(db, `/Workouts/Legs/${difficulty}/${equipment}`));
  const backRef = await getDoc(doc(db, `/Workouts/Back/${difficulty}/${equipment}`));
  const chestRef = await getDoc(doc(db, `/Workouts/Chest/${difficulty}/${equipment}`));
  const armsRef = await getDoc(doc(db, `/Workouts/Arms/${difficulty}/${equipment}`));
  const coreRef = await getDoc(doc(db, `/Workouts/Core/${difficulty}/${equipment}`));
  console.log(legsRef.data());

  const workoutsObject = [{
    leg: legsRef.data(),
    back: backRef.data(),
    chest: chestRef.data(),
    arms: armsRef.data(),
    core: coreRef.data() 
  }];
  console.log(workoutsObject)
  return workoutsObject;
}*/

/*const getUserData = (user) => {
  setDifficulty(FirebaseError.doc.get().collection(users[user].get(difficulty)))
}

const getWorkout = (user) => {
  firebsase.get(wokrouts.{difficulty}.{equipemtn}(());
}*/

export async function setUserWorkoutData(user, feet, inches, weight, days, intensity, equipment, injuries) {
  try {
    // Adds firstName and lastName as fields in the Personal collection 
    const dbUWDDataRef = doc(db, `Users/${user.uid}/WorkoutData/Data`)
    await setDoc(dbUWDDataRef, {
      HeightFT: feet,
      HeightIN: inches,
      Weight: weight,
      Days: days, 
      Intensity: intensity,
      Equipment: equipment,
      Injuries: injuries
    });

  } catch (error) {
    console.error("Error while adding document", error);
  }
} 

//Password Update

export async function forgotPassword(email) {
  return await sendPasswordResetEmail(auth, email) 
}

export async function updatePasswordRequest(user, currentPassword, newPassword) {
  const cred = EmailAuthProvider.credential(user.email, currentPassword);
  return await reauthenticateWithCredential(user, cred).then(() => {
    updatePassword(user, newPassword).then(() => {
      console.log("Password updated!");
    }).catch((error) => { console.log("cant change pass"); });
  }).catch((error) => { 
    console.log(error);
    console.log("cred bad")
    console.log(cred)    
  });
}

export async function setUserAssessmentData(user, wallSit, maxBench, maxSquat, pushUps, crunches, upper, lower, core, total) {
    try {
        // Adds user's input assessment data to the database
        const dbUWDDataRef = doc(db, `Users/${user.uid}/WorkoutData/AssessmentData`)
        await setDoc(dbUWDDataRef, {
            WallSit: wallSit,
            MaxBench: maxBench,
            MaxSquat: maxSquat,
            PushUps: pushUps,
            Crunches: crunches,
            UpperBodyStrength: upper,
            LowerBodyStrength: lower,
            CoreStrength: core,
            TotalStrength: total
        });

    } catch (error) {
        console.error("Error while adding document", error);
    }
}
export async function sendWorkoutDay(user, dailyWorkout) {
  console.log("Daily Workout")
  console.log(dailyWorkout)
  dailyWorkout.map((event, index) => {
      console.log(event)
  })
  
  try {
    // Adds firstName and lastName as fields in the Personal collection 
    const dbUWDDataRef = doc(db, `Users/${user.uid}/WorkoutData/Day1`)
    await setDoc(dbUWDDataRef, {
      Legs: "legs Test",
    });

  } catch (error) {
    console.error("Error while adding document", error);
  }
} 


    export async function setUserMobilityData(user, posture, overheadSquat, squat, hip, ankle, windmill, lumbarSpine, wall, shoulder, scapula, workouts) {
        try {
            // Adds responses to mobility test to the user database 
            const dbUWDDataRef = doc(db, `Users/${user.uid}/WorkoutData/MobilityData`)
            await setDoc(dbUWDDataRef, {
                Posture: posture,
                OverheadSquat: overheadSquat,
                Squat: squat,
                Hip: hip,
                Ankle: ankle,
                Windmill: windmill,
                LumbarSpine: lumbarSpine,
                Wall: wall,
                Shoulder: shoulder,
                Scapula: scapula,
                Workouts: workouts
            });

        } catch (error) {
            console.error("Error while adding document", error);
        }
    }