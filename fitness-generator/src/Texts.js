import db, { collection, addDoc } from './config/firebase'

const signInBtnText = "Already have an account? Sign in...";
const continueGuestBtnText = "Continue as Guest...";
const signUpBtnText = "Don't have an account? Sign up...";

// Sign Up Page
export { signInBtnText, continueGuestBtnText };

// Sign In Page
export { signUpBtnText }; 

try {
    const docRef = await addDoc(collection(db, "users"), {
        first: "TestUser"
    });
    console.log("Working with ", docRef.id);
} catch (error) {
    console.error("Error while adding document", error);
}