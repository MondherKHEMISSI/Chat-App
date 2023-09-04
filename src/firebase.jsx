import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2rgKO_eWK5De7rZVB-0FHoKBUnNuJqTo",
  authDomain: "chat-app-79761.firebaseapp.com",
  projectId: "chat-app-79761",
  storageBucket: "chat-app-79761.appspot.com",
  messagingSenderId: "737355488661",
  appId: "1:737355488661:web:7407f1f10e717b5127ea9c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);