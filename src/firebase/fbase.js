import * as firebase from "firebase/app";
import * as auth from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3Ee5kdAbAlED1J9P0Ew0vIRwqmwtbnEc",
  authDomain: "kireinanime.firebaseapp.com",
  projectId: "kireinanime",
  storageBucket: "kireinanime.appspot.com",
  messagingSenderId: "180008524352",
  appId: "1:180008524352:web:f8fcd79ccc482e8d0ddda5",
};

firebase.initializeApp(firebaseConfig);

export const authService = auth;
