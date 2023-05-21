// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFv8mRepZIk5yk0puk6FB5F4mZ4p1KQJM",
  authDomain: "acctask-15fb7.firebaseapp.com",
  projectId: "acctask-15fb7",
  storageBucket: "acctask-15fb7.appspot.com",
  messagingSenderId: "530845217036",
  appId: "1:530845217036:web:a8c969db30a3d095245929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init firestore
export const db = getFirestore(app)