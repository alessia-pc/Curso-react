import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1c17ljas1bxxu-NvKZL3v454p8V43suE",
  authDomain: "ecommerce-alessiapc.firebaseapp.com",
  projectId: "ecommerce-alessiapc",
  storageBucket: "ecommerce-alessiapc.appspot.com",
  messagingSenderId: "667458120083",
  appId: "1:667458120083:web:0a1633af00210947e62066",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);
