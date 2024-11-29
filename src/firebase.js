import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB57Shzn_eGWA0wn6BT612vRyuWZJqK6lI",
  authDomain: "zenchat-8be50.firebaseapp.com",
  projectId: "zenchat-8be50",
  storageBucket: "zenchat-8be50.firebasestorage.app",
  messagingSenderId: "379189661109",
  appId: "1:379189661109:web:1a62c82ee0e181f12eddfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);