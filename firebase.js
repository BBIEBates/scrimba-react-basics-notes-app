// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjZD58i5Pyy-57xqGya0J6K_HQysaDWFY",
  authDomain: "scrimba-learn-react.firebaseapp.com",
  projectId: "scrimba-learn-react",
  storageBucket: "scrimba-learn-react.appspot.com",
  messagingSenderId: "509853087263",
  appId: "1:509853087263:web:2bf453248f565f349cc72a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//extra stuff
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
