// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "betaorder-946ef.firebaseapp.com",
  projectId: "betaorder-946ef",
  storageBucket: "betaorder-946ef.firebasestorage.app",
  messagingSenderId: "644171426011",
  appId: "1:644171426011:web:0ba4ad08daf6227a2fc4fe"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage}