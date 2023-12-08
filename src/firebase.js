import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDv9HgEpWahSctjv_B96zX9EcI8Sg5Uaa4",

  authDomain: "chat-7ccc3.firebaseapp.com",

  projectId: "chat-7ccc3",

  storageBucket: "chat-7ccc3.appspot.com",

  messagingSenderId: "991101680606",

  appId: "1:991101680606:web:e37c6ef87a32ac64573b4f",

  measurementId: "G-7BQ0NZYE6L"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
