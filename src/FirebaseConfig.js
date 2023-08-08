
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
    apiKey: "AIzaSyAwjxFfYKC6ywySOV4b-RmQHZ65C7rCEB8",
    authDomain: "ecommerce-aguas.firebaseapp.com",
    projectId: "ecommerce-aguas",
    storageBucket: "ecommerce-aguas.appspot.com",
    messagingSenderId: "10120309430",
    appId: "1:10120309430:web:341bd9614498e2f1471417"
  };




const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);