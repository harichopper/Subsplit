import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"; // Example: if you need Firestore

// Your web app's Firebase configuration
// IMPORTANT: Replace these with your actual Firebase project configuration.
// It's recommended to use environment variables for security.
const firebaseConfig = {
  apiKey: "AIzaSyC_ODb_nOGCMaXUIKajZWuDfpKcECdijlw",              // exact match in Firebase Console
  authDomain: "ott-free.firebaseapp.com",                           // exactly like in console
  projectId: "ott-free",                                            // your project id
  storageBucket: "ott-free.appspot.com",                            // must end with .appspot.com
  messagingSenderId: "791523097768",
  appId: "1:791523097768:web:9029aa51dd5278d710969d",
  measurementId: "G-EYSK3L223R",
};


// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// const db = getFirestore(app); // Example: if you need Firestore

export { app, auth, googleProvider /*, db */ };
