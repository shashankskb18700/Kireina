import * as firebase from "firebase/app";
import * as auth from "firebase/auth";
import * as db from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// apiKey: "AIzaSyC3Ee5kdAbAlED1J9P0Ew0vIRwqmwtbnEc",
//   authDomain: "kireinanime.firebaseapp.com",
//   projectId: "kireinanime",
//   storageBucket: "kireinanime.appspot.com",
//   messagingSenderId: "180008524352",
//   appId: "1:180008524352:web:f8fcd79ccc482e8d0ddda5",

firebase.initializeApp(firebaseConfig);

export const authService = auth;
export const dbService = db;
