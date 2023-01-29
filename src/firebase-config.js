// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUNrMW01jF5CFOWWEfb9_as_CkrCZyRDM",
  authDomain: "taskmanager-c5f91.firebaseapp.com",
  projectId: "taskmanager-c5f91",
  storageBucket: "taskmanager-c5f91.appspot.com",
  messagingSenderId: "590685212130",
  appId: "1:590685212130:web:6ab5a6ef2403a119223dbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };